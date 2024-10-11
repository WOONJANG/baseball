let playerCount = 0;
    const positions = ["투수", "포수", "1루수", "2루수", "3루수", "유격수", "좌익수", "중견수", "우익수", "지명타자"];
    let savedNames = [];

    // 이름을 저장하는 함수
    function saveNames() {
        const input = document.getElementById("name-input").value;
        if (input.trim() === '') return;

        savedNames = input.split(',').map(name => name.trim());

        // 쿠키에 저장
        document.cookie = `savedNames=${savedNames.join(',')}; path=/`;
        alert("이름이 저장되었습니다.");
    }

    // 쿠키에서 이름 불러오기
    function loadNamesFromCookies() {
        const cookieValue = document.cookie.split('; ').find(row => row.startsWith('savedNames='));
        if (cookieValue) {
            savedNames = cookieValue.split('=')[1].split(',');
        }
    }

    function addPlayer() {
        if (playerCount >= 20) return;

        const container = document.createElement("div");
        container.classList.add("player");

        container.innerHTML = `
            <select class="name">${generateNameOptions()}</select>
            <select class="pref1">${generateOptions()}</select>
            <select class="pref2">${generateOptions()}</select>
            <select class="pref3">${generateOptions()}</select>
        `;

        document.getElementById("player-container").appendChild(container);
        playerCount++;

        updateRemoveButtonVisibility();

        if (playerCount >= 9) {
            document.getElementById("create-lineup").style.display = 'block';
            document.getElementById("create-lineup").style.backgroundColor = 'green';
        } else {
            document.getElementById("create-lineup").style.display = 'none';
        }
    }

    // 드롭다운에 저장된 이름들 표시
    function generateNameOptions() {
        return savedNames.map(name => `<option value="${name}">${name}</option>`).join('');
    }

    function generateOptions() {
        return positions.map(pos => `<option value="${pos}">${pos}</option>`).join('');
    }

    function createLineup() {
        const players = Array.from(document.querySelectorAll(".player")).map(player => ({
            name: player.querySelector(".name").value,
            pref1: player.querySelector(".pref1").value,
            pref2: player.querySelector(".pref2").value,
            pref3: player.querySelector(".pref3").value
        }));

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ''; // 결과를 새로 초기화

        // 각 안에 대한 결과 생성
        const result = document.createElement("div");
        result.classList.add("result");
        result.innerHTML = `<h2>LineUp</h2>${generateTable(players)}`;
        resultsContainer.appendChild(result);
    }

function generateTable(players) {
    const positionAssignments = {
        "투수": [],
        "포수": [],
        "1루수": [],
        "2루수": [],
        "3루수": [],
        "유격수": [],
        "좌익수": [],
        "중견수": [],
        "우익수": [],
        "지명타자": [],
        "대기인원": []
    };

    const assignedPlayers = new Set(); // 이미 배정된 선수들
    const addedPlayers = new Set(); // 중복되지 않도록 체크하는 Set

    // 1지망 배치
    const firstPrefs = {};
    players.forEach(player => {
        const pref1 = player.pref1;
        if (!firstPrefs[pref1]) firstPrefs[pref1] = [];
        firstPrefs[pref1].push(player);
    });

    for (const [pos, playersWithSamePref] of Object.entries(firstPrefs)) {
        if (playersWithSamePref.length > 0 && positionAssignments[pos].length === 0) {
            const randomIndex = Math.floor(Math.random() * playersWithSamePref.length);
            positionAssignments[pos].push(playersWithSamePref[randomIndex]);
            assignedPlayers.add(playersWithSamePref[randomIndex].name);
        }
    }

    // 2지망 배치
    players.forEach(player => {
        if (!assignedPlayers.has(player.name)) {
            const pref2 = player.pref2;
            if (positionAssignments[pref2].length === 0) {
                positionAssignments[pref2].push(player);
                assignedPlayers.add(player.name);
            }
        }
    });

    // 3지망 배치
    players.forEach(player => {
        if (!assignedPlayers.has(player.name)) {
            const pref3 = player.pref3;
            if (positionAssignments[pref3].length === 0) {
                positionAssignments[pref3].push(player);
                assignedPlayers.add(player.name);
            }
        }
    });

    // 대기인원 처리
    players.forEach(player => {
        if (!assignedPlayers.has(player.name)) {
            positionAssignments["대기인원"].push(player);
        }
    });

    // 지명타자 랜덤 배치
    const availableForDH = players.filter(p => !assignedPlayers.has(p.name) && p.pref1 === "지명타자");
    if (availableForDH.length === 0 && assignedPlayers.size > 0) {
        const firstDH = positionAssignments["대기인원"][0] || positionAssignments["투수"][0];
        if (firstDH) {
            positionAssignments["지명타자"].push(firstDH);
            assignedPlayers.add(firstDH.name);
        }
    } else if (availableForDH.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableForDH.length);
        positionAssignments["지명타자"].push(availableForDH[randomIndex]);
        assignedPlayers.add(positionAssignments["지명타자"][0].name);
    }

    // 지명타자에 여러 명이 있는 경우 처리
    if (positionAssignments["지명타자"].length > 1) {
        const firstDH = positionAssignments["지명타자"].shift(); // 첫 번째 선수만 남김
        const remainingDH = positionAssignments["지명타자"].map(p => p.name).join(', ');
        positionAssignments["대기인원"].push({ name: remainingDH });
        positionAssignments["지명타자"] = [firstDH];
    }

    // 중복된 이름 제거
    for (const [pos, players] of Object.entries(positionAssignments)) {
        positionAssignments[pos] = players.filter(player => {
            if (!addedPlayers.has(player.name)) {
                addedPlayers.add(player.name); // 이름이 이미 있는지 확인하고 없으면 추가
                return true;
            }
            return false;
        });
    }

    // 중복된 이름을 대기인원에서 제거
    const uniqueWaitingPlayers = new Set();
    positionAssignments["대기인원"] = positionAssignments["대기인원"].filter(player => {
        if (!uniqueWaitingPlayers.has(player.name)) {
            uniqueWaitingPlayers.add(player.name); // 중복된 이름은 추가하지 않음
            return true;
        }
        return false;
    });

    // 테이블 생성
    let table = `
        <table>
            <tr>
                <th>포지션</th>
                <th>선수</th>
            </tr>
            ${Object.entries(positionAssignments).map(([pos, players]) => `
                <tr>
                    <td>${pos}</td>
                    <td>${pos === "지명타자" ? 
                        (players.length > 0 ? players[0].name : '') : 
                        (players.length > 0 ? players.map(p => p.name).join(', ') : '')}</td>
                </tr>
            `).join('')}
        </table>
    `;

    return table;
}

    function updateRemoveButtonVisibility() {
        const removeButton = document.getElementById("remove-player");
	removeButton.style.backgroundColor = 'red';
        removeButton.style.display = playerCount > 1 ? 'block' : 'none';
    }

    document.getElementById("save-names").addEventListener("click", saveNames);
    document.getElementById("add-player").addEventListener("click", addPlayer);
    document.getElementById("create-lineup").addEventListener("click", createLineup);
    document.getElementById("remove-player").addEventListener("click", function() {
        const playerContainers = document.querySelectorAll(".player");
        if (playerContainers.length > 0) {
            playerContainers[playerContainers.length - 1].remove();
            playerCount--;
            updateRemoveButtonVisibility();
        }
        if (playerCount <= 8) {
            document.getElementById("create-lineup").style.display = 'none';
        }
    });

    // 페이지 로드 시 쿠키에서 이름 불러오기
    loadNamesFromCookies();

function getRandomColor() {
	const letters = '0123456789ABCDEF';
    	let color = '#';
    	for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
	}
   		 return color;
}

        let clickCount = 0;
        const linkElement = document.getElementById('link');

        linkElement.addEventListener('click', function(event) {
            clickCount++;
            if (clickCount === 10) {
                // Change background color randomly
                document.body.style.backgroundColor = getRandomColor();
            } else if (clickCount === 14) {
                // Activate link and navigate to the URL
                linkElement.setAttribute('href', 'https://github.com/WOONJANG');
                linkElement.removeAttribute('onclick');
            }
        });

// 사용방법 카드 함수
document.getElementById('toggle-help').addEventListener('click', function(event) {
    event.stopPropagation(); // 이벤트 버블링 방지
    const helpCard = document.getElementById('help-card');
    if (helpCard.classList.contains('show')) {
        helpCard.classList.remove('show');
    } else {
	helpCard.classList.remove('hidden');
        helpCard.classList.add('show');
    }
});

// 화면의 다른 곳 클릭 시 카드 닫기
document.addEventListener('click', function(event) {
    const helpCard = document.getElementById('help-card');
    const toggleButton = document.getElementById('toggle-help');
    
    if (!helpCard.contains(event.target) && event.target !== toggleButton) {
        helpCard.classList.remove('show');
    }
});

// 선수 쿠키 초기화
document.getElementById('clear-cookies').addEventListener('click', function() {
    const confirmation = confirm("정말로 입력한 선수를 초기화하시겠습니까?");
    if (confirmation) {
        // 쿠키 삭제
        document.cookie = "savedNames=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        alert("초기화되었습니다.");
        savedNames = []; // 배열 초기화
	location.reload();
    }
});

// 새로고침 방지 코드
function NotReload(){
    if( (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116) ) {
        event.keyCode = 0;
        event.cancelBubble = true;
        event.returnValue = false;
    } 
}
document.onkeydown = NotReload;

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = ''; // 이 값은 크롬에서는 무시되지만, 경고 메시지를 표시합니다.
});
