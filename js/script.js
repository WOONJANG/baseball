const _0x5bae4f=_0x17aa;(function(_0x34bfc6,_0x33baed){const _0x5d3a6d=_0x17aa,_0x26afdc=_0x34bfc6();while(!![]){try{const _0x175c7a=-parseInt(_0x5d3a6d(0x147))/0x1+-parseInt(_0x5d3a6d(0x173))/0x2+-parseInt(_0x5d3a6d(0x185))/0x3+parseInt(_0x5d3a6d(0x15f))/0x4+-parseInt(_0x5d3a6d(0x132))/0x5*(-parseInt(_0x5d3a6d(0x13b))/0x6)+-parseInt(_0x5d3a6d(0x15c))/0x7+parseInt(_0x5d3a6d(0x142))/0x8;if(_0x175c7a===_0x33baed)break;else _0x26afdc['push'](_0x26afdc['shift']());}catch(_0x3a489a){_0x26afdc['push'](_0x26afdc['shift']());}}}(_0x576e,0x74a7b));let playerCount=0x0;const positions=['투수','포수',_0x5bae4f(0x158),_0x5bae4f(0x134),_0x5bae4f(0x190),_0x5bae4f(0x138),_0x5bae4f(0x145),'중견수',_0x5bae4f(0x18d),'지명타자'];let savedNames=[];function saveNames(){const _0x22c20f=_0x5bae4f,_0x3ed30f=document['getElementById']('name-input')[_0x22c20f(0x139)];if(_0x3ed30f['trim']()==='')return;savedNames=_0x3ed30f[_0x22c20f(0x13d)](',')[_0x22c20f(0x186)](_0x23424a=>_0x23424a[_0x22c20f(0x17f)]()),document['cookie']=_0x22c20f(0x133)+savedNames[_0x22c20f(0x135)](',')+_0x22c20f(0x18c),alert('이름이\x20저장되었습니다.');}function loadNamesFromCookies(){const _0x3bde7e=_0x5bae4f,_0xcfd1b7=document[_0x3bde7e(0x175)][_0x3bde7e(0x13d)](';\x20')['find'](_0x540d92=>_0x540d92[_0x3bde7e(0x165)](_0x3bde7e(0x133)));_0xcfd1b7&&(savedNames=_0xcfd1b7[_0x3bde7e(0x13d)]('=')[0x1][_0x3bde7e(0x13d)](','));}function addPlayer(){const _0x11a4c5=_0x5bae4f;if(playerCount>=0x14)return;const _0x2dce4d=document[_0x11a4c5(0x187)](_0x11a4c5(0x176));_0x2dce4d[_0x11a4c5(0x191)][_0x11a4c5(0x18a)]('player'),_0x2dce4d[_0x11a4c5(0x14e)]=_0x11a4c5(0x14d)+generateNameOptions()+'</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22pref1\x22>'+generateOptions()+_0x11a4c5(0x15d)+generateOptions()+_0x11a4c5(0x148)+generateOptions()+_0x11a4c5(0x189),document[_0x11a4c5(0x13e)](_0x11a4c5(0x15e))[_0x11a4c5(0x156)](_0x2dce4d),playerCount++,updateRemoveButtonVisibility(),playerCount>=0x9?(document[_0x11a4c5(0x13e)](_0x11a4c5(0x14c))[_0x11a4c5(0x157)]['display']=_0x11a4c5(0x167),document[_0x11a4c5(0x13e)](_0x11a4c5(0x14c))[_0x11a4c5(0x157)][_0x11a4c5(0x153)]=_0x11a4c5(0x17c)):document[_0x11a4c5(0x13e)](_0x11a4c5(0x14c))[_0x11a4c5(0x157)]['display']=_0x11a4c5(0x16d);}function generateNameOptions(){const _0x843391=_0x5bae4f;return savedNames[_0x843391(0x186)](_0x5889f4=>_0x843391(0x151)+_0x5889f4+'\x22>'+_0x5889f4+_0x843391(0x137))[_0x843391(0x135)]('');}function generateOptions(){const _0x4c84fa=_0x5bae4f;return positions[_0x4c84fa(0x186)](_0x37b803=>_0x4c84fa(0x151)+_0x37b803+'\x22>'+_0x37b803+_0x4c84fa(0x137))['join']('');}function createLineup(){const _0x12ea19=_0x5bae4f,_0x5c0c10=Array[_0x12ea19(0x13c)](document[_0x12ea19(0x16f)](_0x12ea19(0x178)))[_0x12ea19(0x186)](_0x3cc02f=>({'name':_0x3cc02f[_0x12ea19(0x177)](_0x12ea19(0x171))[_0x12ea19(0x139)],'pref1':_0x3cc02f['querySelector'](_0x12ea19(0x17e))[_0x12ea19(0x139)],'pref2':_0x3cc02f['querySelector'](_0x12ea19(0x159))[_0x12ea19(0x139)],'pref3':_0x3cc02f[_0x12ea19(0x177)](_0x12ea19(0x195))[_0x12ea19(0x139)]})),_0x533a24=document[_0x12ea19(0x13e)](_0x12ea19(0x197));_0x533a24[_0x12ea19(0x14e)]='';const _0x53c826=document[_0x12ea19(0x187)](_0x12ea19(0x176));_0x53c826[_0x12ea19(0x191)][_0x12ea19(0x18a)](_0x12ea19(0x17a)),_0x53c826[_0x12ea19(0x14e)]=_0x12ea19(0x170)+generateTable(_0x5c0c10),_0x533a24[_0x12ea19(0x156)](_0x53c826);}function generateTable(_0x973859){const _0x574242=_0x5bae4f,_0x274d91={'투수':[],'포수':[],'1루수':[],'2루수':[],'3루수':[],'유격수':[],'좌익수':[],'중견수':[],'우익수':[],'지명타자':[],'대기인원':[]},_0x2e9d6e=new Set(),_0x25c8d2=new Set(),_0x131a85={};_0x973859['forEach'](_0x24721b=>{const _0x36d098=_0x17aa,_0x405743=_0x24721b[_0x36d098(0x144)];if(!_0x131a85[_0x405743])_0x131a85[_0x405743]=[];_0x131a85[_0x405743]['push'](_0x24721b);});for(const [_0x1352f1,_0x40cdcf]of Object[_0x574242(0x18f)](_0x131a85)){if(_0x40cdcf['length']>0x0&&_0x274d91[_0x1352f1]['length']===0x0){const _0x3c0e5d=Math['floor'](Math[_0x574242(0x143)]()*_0x40cdcf[_0x574242(0x150)]);_0x274d91[_0x1352f1]['push'](_0x40cdcf[_0x3c0e5d]),_0x2e9d6e[_0x574242(0x18a)](_0x40cdcf[_0x3c0e5d][_0x574242(0x136)]);}}_0x973859['forEach'](_0xd92056=>{const _0x482d0d=_0x574242;if(!_0x2e9d6e['has'](_0xd92056['name'])){const _0x4c8b21=_0xd92056[_0x482d0d(0x18e)];_0x274d91[_0x4c8b21]['length']===0x0&&(_0x274d91[_0x4c8b21][_0x482d0d(0x188)](_0xd92056),_0x2e9d6e[_0x482d0d(0x18a)](_0xd92056[_0x482d0d(0x136)]));}}),_0x973859['forEach'](_0x393608=>{const _0x42d388=_0x574242;if(!_0x2e9d6e['has'](_0x393608[_0x42d388(0x136)])){const _0x35269f=_0x393608['pref3'];_0x274d91[_0x35269f][_0x42d388(0x150)]===0x0&&(_0x274d91[_0x35269f][_0x42d388(0x188)](_0x393608),_0x2e9d6e['add'](_0x393608[_0x42d388(0x136)]));}}),_0x973859[_0x574242(0x180)](_0x230501=>{const _0x5dbe68=_0x574242;!_0x2e9d6e[_0x5dbe68(0x140)](_0x230501['name'])&&_0x274d91[_0x5dbe68(0x15a)][_0x5dbe68(0x188)](_0x230501);});const _0x54ef8a=_0x973859[_0x574242(0x162)](_0x55236e=>!_0x2e9d6e['has'](_0x55236e[_0x574242(0x136)])&&_0x55236e[_0x574242(0x144)]==='지명타자');if(_0x54ef8a[_0x574242(0x150)]===0x0&&_0x2e9d6e[_0x574242(0x172)]>0x0){const _0x4e98cb=_0x274d91[_0x574242(0x15a)][0x0]||_0x274d91['투수'][0x0];_0x4e98cb&&(_0x274d91[_0x574242(0x181)][_0x574242(0x188)](_0x4e98cb),_0x2e9d6e[_0x574242(0x18a)](_0x4e98cb[_0x574242(0x136)]));}else{if(_0x54ef8a['length']>0x0){const _0x19329c=Math[_0x574242(0x13a)](Math[_0x574242(0x143)]()*_0x54ef8a['length']);_0x274d91[_0x574242(0x181)][_0x574242(0x188)](_0x54ef8a[_0x19329c]),_0x2e9d6e[_0x574242(0x18a)](_0x274d91[_0x574242(0x181)][0x0]['name']);}}if(_0x274d91[_0x574242(0x181)][_0x574242(0x150)]>0x1){const _0x2ceb3a=_0x274d91[_0x574242(0x181)][_0x574242(0x154)](),_0x2c1def=_0x274d91['지명타자']['map'](_0x2ac75d=>_0x2ac75d[_0x574242(0x136)])['join'](',\x20');_0x274d91[_0x574242(0x15a)]['push']({'name':_0x2c1def}),_0x274d91[_0x574242(0x181)]=[_0x2ceb3a];}for(const [_0x2d1f00,_0xb4d630]of Object[_0x574242(0x18f)](_0x274d91)){_0x274d91[_0x2d1f00]=_0xb4d630['filter'](_0x16cf5b=>{const _0x2699d0=_0x574242;if(!_0x25c8d2[_0x2699d0(0x140)](_0x16cf5b['name']))return _0x25c8d2[_0x2699d0(0x18a)](_0x16cf5b[_0x2699d0(0x136)]),!![];return![];});}const _0x38c900=new Set();_0x274d91[_0x574242(0x15a)]=_0x274d91['대기인원']['filter'](_0x10802a=>{const _0x18c196=_0x574242;if(!_0x38c900[_0x18c196(0x140)](_0x10802a[_0x18c196(0x136)]))return _0x38c900[_0x18c196(0x18a)](_0x10802a[_0x18c196(0x136)]),!![];return![];});let _0x4538bc=_0x574242(0x17d)+Object[_0x574242(0x18f)](_0x274d91)['map'](([_0x1eba03,_0x4b2783])=>_0x574242(0x155)+_0x1eba03+_0x574242(0x149)+(_0x1eba03===_0x574242(0x181)?_0x4b2783['length']>0x0?_0x4b2783[0x0][_0x574242(0x136)]:'':_0x4b2783[_0x574242(0x150)]>0x0?_0x4b2783[_0x574242(0x186)](_0x497235=>_0x497235[_0x574242(0x136)])[_0x574242(0x135)](',\x20'):'')+_0x574242(0x169))[_0x574242(0x135)]('')+_0x574242(0x14b);return _0x4538bc;}function updateRemoveButtonVisibility(){const _0x5e9227=_0x5bae4f,_0x28ba53=document[_0x5e9227(0x13e)]('remove-player');_0x28ba53[_0x5e9227(0x157)][_0x5e9227(0x153)]='red',_0x28ba53[_0x5e9227(0x157)]['display']=playerCount>0x1?_0x5e9227(0x167):'none';}document[_0x5bae4f(0x13e)](_0x5bae4f(0x161))[_0x5bae4f(0x163)](_0x5bae4f(0x15b),saveNames),document[_0x5bae4f(0x13e)](_0x5bae4f(0x164))[_0x5bae4f(0x163)](_0x5bae4f(0x15b),addPlayer),document[_0x5bae4f(0x13e)]('create-lineup')[_0x5bae4f(0x163)](_0x5bae4f(0x15b),createLineup),document[_0x5bae4f(0x13e)](_0x5bae4f(0x152))[_0x5bae4f(0x163)](_0x5bae4f(0x15b),function(){const _0x9c68f7=_0x5bae4f,_0x466e61=document[_0x9c68f7(0x16f)](_0x9c68f7(0x178));_0x466e61[_0x9c68f7(0x150)]>0x0&&(_0x466e61[_0x466e61[_0x9c68f7(0x150)]-0x1][_0x9c68f7(0x146)](),playerCount--,updateRemoveButtonVisibility()),playerCount<=0x8&&(document[_0x9c68f7(0x13e)](_0x9c68f7(0x14c))[_0x9c68f7(0x157)][_0x9c68f7(0x16b)]='none');}),loadNamesFromCookies();function getRandomColor(){const _0x751092=_0x5bae4f,_0x22aeeb=_0x751092(0x193);let _0x20c338='#';for(let _0x5b23d3=0x0;_0x5b23d3<0x6;_0x5b23d3++){_0x20c338+=_0x22aeeb[Math[_0x751092(0x13a)](Math[_0x751092(0x143)]()*0x10)];}return _0x20c338;}let clickCount=0x0;function _0x17aa(_0x49675e,_0x3a285d){const _0x576ed7=_0x576e();return _0x17aa=function(_0x17aabf,_0x5c795c){_0x17aabf=_0x17aabf-0x132;let _0x46aa84=_0x576ed7[_0x17aabf];return _0x46aa84;},_0x17aa(_0x49675e,_0x3a285d);}const linkElement=document['getElementById']('link');linkElement[_0x5bae4f(0x163)](_0x5bae4f(0x15b),function(_0x316ab3){const _0x1cbf72=_0x5bae4f;clickCount++;if(clickCount===0xa)document[_0x1cbf72(0x13f)][_0x1cbf72(0x157)][_0x1cbf72(0x153)]=getRandomColor();else clickCount===0xe&&(linkElement[_0x1cbf72(0x16c)](_0x1cbf72(0x182),'https://github.com/WOONJANG'),linkElement[_0x1cbf72(0x160)](_0x1cbf72(0x18b)));}),document[_0x5bae4f(0x13e)](_0x5bae4f(0x141))[_0x5bae4f(0x163)]('click',function(_0x370884){const _0x5c6e88=_0x5bae4f;_0x370884['stopPropagation']();const _0x3cbf82=document[_0x5c6e88(0x13e)]('help-card');_0x3cbf82[_0x5c6e88(0x191)][_0x5c6e88(0x184)](_0x5c6e88(0x16e))?_0x3cbf82[_0x5c6e88(0x191)]['remove'](_0x5c6e88(0x16e)):_0x3cbf82[_0x5c6e88(0x191)][_0x5c6e88(0x18a)](_0x5c6e88(0x16e));}),document['addEventListener'](_0x5bae4f(0x15b),function(_0x362d7b){const _0x279192=_0x5bae4f,_0x223eca=document[_0x279192(0x13e)](_0x279192(0x16a)),_0x28fd20=document[_0x279192(0x13e)]('toggle-help');!_0x223eca[_0x279192(0x184)](_0x362d7b[_0x279192(0x17b)])&&_0x362d7b['target']!==_0x28fd20&&_0x223eca[_0x279192(0x191)][_0x279192(0x146)](_0x279192(0x16e));}),document[_0x5bae4f(0x13e)](_0x5bae4f(0x174))['addEventListener'](_0x5bae4f(0x15b),function(){const _0x28a99f=_0x5bae4f,_0x325be5=confirm(_0x28a99f(0x179));_0x325be5&&(document[_0x28a99f(0x175)]=_0x28a99f(0x183),alert(_0x28a99f(0x196)),savedNames=[],location['reload']());});function NotReload(){const _0x465cd8=_0x5bae4f;(event[_0x465cd8(0x192)]==!![]&&(event[_0x465cd8(0x14a)]==0x4e||event[_0x465cd8(0x14a)]==0x52)||event[_0x465cd8(0x14a)]==0x74)&&(event[_0x465cd8(0x14a)]=0x0,event[_0x465cd8(0x168)]=!![],event[_0x465cd8(0x166)]=![]);}function _0x576e(){const _0x223cdf=['9940kCrvzQ','savedNames=','2루수','join','name','</option>','유격수','value','floor','2802psDVmt','from','split','getElementById','body','has','toggle-help','90280cWOXxh','random','pref1','좌익수','remove','142285qpvjmj','</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22pref3\x22>','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','keyCode','\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20','create-lineup','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22name\x22>','innerHTML','beforeunload','length','<option\x20value=\x22','remove-player','backgroundColor','shift','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','appendChild','style','1루수','.pref2','대기인원','click','870079dkzSsG','</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22pref2\x22>','player-container','3188644imrsHu','removeAttribute','save-names','filter','addEventListener','add-player','startsWith','returnValue','block','cancelBubble','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','help-card','display','setAttribute','none','show','querySelectorAll','<h2>LineUp</h2>','.name','size','1837804XThqds','clear-cookies','cookie','div','querySelector','.player','정말로\x20입력한\x20선수를\x20초기화하시겠습니까?','result','target','green','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>포지션</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>선수</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.pref1','trim','forEach','지명타자','href','savedNames=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/','contains','220617EBepve','map','createElement','push','</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','add','onclick',';\x20path=/','우익수','pref2','entries','3루수','classList','ctrlKey','0123456789ABCDEF','onkeydown','.pref3','초기화되었습니다.','results'];_0x576e=function(){return _0x223cdf;};return _0x576e();}document[_0x5bae4f(0x194)]=NotReload,window[_0x5bae4f(0x163)](_0x5bae4f(0x14f),function(_0x36c696){const _0x105b8e=_0x5bae4f;_0x36c696['preventDefault'](),_0x36c696[_0x105b8e(0x166)]='';});
