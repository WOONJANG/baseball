const _0x587d6d=_0x2f83;function _0x23c7(){const _0xc9088b=['4579768mtXQFT','length','split','player','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','<option\x20value=\x22','player-container','div','이름이\x20저장되었습니다.','add','3루수','show','filter','.pref2','<h2>LineUp</h2>','name','</option>','contains','querySelectorAll','6735211jXNZqY','6430NGJjHt','pref2','map','\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20','.pref1','block','startsWith','keyCode','has','remove','지명타자','find','random','404tgHDWm','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','ctrlKey','9924954xldwqz','초기화되었습니다.','none','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22name\x22>','좌익수','backgroundColor','green','onclick','querySelector',';\x20path=/','click','</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22pref3\x22>','.name','4047180XqNVNU','entries','result','shift','returnValue','</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','removeAttribute','9144NPzVne','style','body','reload','remove-player','20632rCYxgi','classList','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','forEach','pref1','create-lineup','2루수','우익수','6132630cnBSyD','value','유격수','results','savedNames=','floor','innerHTML','createElement','trim','중견수','onkeydown','display','1루수','대기인원','.pref3','toggle-help','clear-cookies','getElementById','.player','cookie','push','appendChild','join','addEventListener'];_0x23c7=function(){return _0xc9088b;};return _0x23c7();}(function(_0x4f3a53,_0x5af02f){const _0x3ca345=_0x2f83,_0x1e1f67=_0x4f3a53();while(!![]){try{const _0x23af07=parseInt(_0x3ca345(0x209))/0x1*(parseInt(_0x3ca345(0x1fc))/0x2)+-parseInt(_0x3ca345(0x219))/0x3+-parseInt(_0x3ca345(0x1e8))/0x4+-parseInt(_0x3ca345(0x22d))/0x5+parseInt(_0x3ca345(0x20c))/0x6+-parseInt(_0x3ca345(0x1fb))/0x7+parseInt(_0x3ca345(0x225))/0x8*(parseInt(_0x3ca345(0x220))/0x9);if(_0x23af07===_0x5af02f)break;else _0x1e1f67['push'](_0x1e1f67['shift']());}catch(_0x200ec5){_0x1e1f67['push'](_0x1e1f67['shift']());}}}(_0x23c7,0xd96d6));let playerCount=0x0;const positions=['투수','포수',_0x587d6d(0x1dc),_0x587d6d(0x22b),_0x587d6d(0x1f2),_0x587d6d(0x22f),_0x587d6d(0x210),_0x587d6d(0x236),_0x587d6d(0x22c),_0x587d6d(0x206)];let savedNames=[];function saveNames(){const _0x3fb197=_0x587d6d,_0x3a90bb=document[_0x3fb197(0x1e1)]('name-input')['value'];if(_0x3a90bb['trim']()==='')return;savedNames=_0x3a90bb[_0x3fb197(0x1ea)](',')[_0x3fb197(0x1fe)](_0xa5e4b=>_0xa5e4b[_0x3fb197(0x235)]()),document[_0x3fb197(0x1e3)]=_0x3fb197(0x231)+savedNames[_0x3fb197(0x1e6)](',')+_0x3fb197(0x215),alert(_0x3fb197(0x1f0));}function loadNamesFromCookies(){const _0x57dbad=_0x587d6d,_0x3ec378=document[_0x57dbad(0x1e3)][_0x57dbad(0x1ea)](';\x20')[_0x57dbad(0x207)](_0x3894e8=>_0x3894e8[_0x57dbad(0x202)](_0x57dbad(0x231)));_0x3ec378&&(savedNames=_0x3ec378[_0x57dbad(0x1ea)]('=')[0x1]['split'](','));}function addPlayer(){const _0xb4416a=_0x587d6d;if(playerCount>=0x14)return;const _0x63de5e=document['createElement']('div');_0x63de5e[_0xb4416a(0x226)][_0xb4416a(0x1f1)](_0xb4416a(0x1eb)),_0x63de5e[_0xb4416a(0x233)]=_0xb4416a(0x20f)+generateNameOptions()+'</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22pref1\x22>'+generateOptions()+'</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22pref2\x22>'+generateOptions()+_0xb4416a(0x217)+generateOptions()+_0xb4416a(0x21e),document[_0xb4416a(0x1e1)](_0xb4416a(0x1ee))[_0xb4416a(0x1e5)](_0x63de5e),playerCount++,updateRemoveButtonVisibility(),playerCount>=0x9?(document[_0xb4416a(0x1e1)](_0xb4416a(0x22a))[_0xb4416a(0x221)][_0xb4416a(0x238)]=_0xb4416a(0x201),document[_0xb4416a(0x1e1)](_0xb4416a(0x22a))['style'][_0xb4416a(0x211)]=_0xb4416a(0x212)):document[_0xb4416a(0x1e1)](_0xb4416a(0x22a))[_0xb4416a(0x221)]['display']='none';}function _0x2f83(_0x338bec,_0xbb6509){const _0x23c747=_0x23c7();return _0x2f83=function(_0x2f8362,_0x88db5e){_0x2f8362=_0x2f8362-0x1dc;let _0x93eccb=_0x23c747[_0x2f8362];return _0x93eccb;},_0x2f83(_0x338bec,_0xbb6509);}function generateNameOptions(){const _0x17f2da=_0x587d6d;return savedNames[_0x17f2da(0x1fe)](_0x975a1=>_0x17f2da(0x1ed)+_0x975a1+'\x22>'+_0x975a1+_0x17f2da(0x1f8))[_0x17f2da(0x1e6)]('');}function generateOptions(){const _0x533fc1=_0x587d6d;return positions[_0x533fc1(0x1fe)](_0x4b0a71=>'<option\x20value=\x22'+_0x4b0a71+'\x22>'+_0x4b0a71+_0x533fc1(0x1f8))[_0x533fc1(0x1e6)]('');}function createLineup(){const _0x41aeb6=_0x587d6d,_0x525a72=Array['from'](document[_0x41aeb6(0x1fa)]('.player'))[_0x41aeb6(0x1fe)](_0x413176=>({'name':_0x413176[_0x41aeb6(0x214)](_0x41aeb6(0x218))[_0x41aeb6(0x22e)],'pref1':_0x413176[_0x41aeb6(0x214)](_0x41aeb6(0x200))[_0x41aeb6(0x22e)],'pref2':_0x413176[_0x41aeb6(0x214)](_0x41aeb6(0x1f5))[_0x41aeb6(0x22e)],'pref3':_0x413176['querySelector'](_0x41aeb6(0x1de))[_0x41aeb6(0x22e)]})),_0x365b7e=document['getElementById'](_0x41aeb6(0x230));_0x365b7e[_0x41aeb6(0x233)]='';const _0x4fa9b7=document[_0x41aeb6(0x234)](_0x41aeb6(0x1ef));_0x4fa9b7[_0x41aeb6(0x226)][_0x41aeb6(0x1f1)](_0x41aeb6(0x21b)),_0x4fa9b7[_0x41aeb6(0x233)]=_0x41aeb6(0x1f6)+generateTable(_0x525a72),_0x365b7e[_0x41aeb6(0x1e5)](_0x4fa9b7);}function generateTable(_0x58b119){const _0x416c17=_0x587d6d,_0x3eced3={'투수':[],'포수':[],'1루수':[],'2루수':[],'3루수':[],'유격수':[],'좌익수':[],'중견수':[],'우익수':[],'지명타자':[],'대기인원':[]},_0x56c37a=new Set(),_0x58e6bd=new Set(),_0x243639={};_0x58b119['forEach'](_0x3b38d6=>{const _0x22d2b3=_0x2f83,_0x17ade6=_0x3b38d6[_0x22d2b3(0x229)];if(!_0x243639[_0x17ade6])_0x243639[_0x17ade6]=[];_0x243639[_0x17ade6][_0x22d2b3(0x1e4)](_0x3b38d6);});for(const [_0x4a912d,_0x24c2ce]of Object[_0x416c17(0x21a)](_0x243639)){if(_0x24c2ce[_0x416c17(0x1e9)]>0x0&&_0x3eced3[_0x4a912d][_0x416c17(0x1e9)]===0x0){const _0x39718a=Math[_0x416c17(0x232)](Math[_0x416c17(0x208)]()*_0x24c2ce[_0x416c17(0x1e9)]);_0x3eced3[_0x4a912d][_0x416c17(0x1e4)](_0x24c2ce[_0x39718a]),_0x56c37a[_0x416c17(0x1f1)](_0x24c2ce[_0x39718a][_0x416c17(0x1f7)]);}}_0x58b119[_0x416c17(0x228)](_0x37d2a3=>{const _0x1dc5f8=_0x416c17;if(!_0x56c37a[_0x1dc5f8(0x204)](_0x37d2a3[_0x1dc5f8(0x1f7)])){const _0x177a43=_0x37d2a3[_0x1dc5f8(0x1fd)];_0x3eced3[_0x177a43][_0x1dc5f8(0x1e9)]===0x0&&(_0x3eced3[_0x177a43][_0x1dc5f8(0x1e4)](_0x37d2a3),_0x56c37a[_0x1dc5f8(0x1f1)](_0x37d2a3[_0x1dc5f8(0x1f7)]));}}),_0x58b119[_0x416c17(0x228)](_0x182103=>{const _0x59b6cf=_0x416c17;if(!_0x56c37a[_0x59b6cf(0x204)](_0x182103['name'])){const _0x26468e=_0x182103['pref3'];_0x3eced3[_0x26468e][_0x59b6cf(0x1e9)]===0x0&&(_0x3eced3[_0x26468e][_0x59b6cf(0x1e4)](_0x182103),_0x56c37a[_0x59b6cf(0x1f1)](_0x182103[_0x59b6cf(0x1f7)]));}}),_0x58b119[_0x416c17(0x228)](_0x121971=>{const _0x5edf4e=_0x416c17;!_0x56c37a[_0x5edf4e(0x204)](_0x121971['name'])&&_0x3eced3[_0x5edf4e(0x1dd)][_0x5edf4e(0x1e4)](_0x121971);});const _0x433062=_0x58b119[_0x416c17(0x1f4)](_0x4e4208=>!_0x56c37a[_0x416c17(0x204)](_0x4e4208[_0x416c17(0x1f7)])&&_0x4e4208[_0x416c17(0x229)]===_0x416c17(0x206));if(_0x433062['length']===0x0&&_0x56c37a['size']>0x0){const _0x5c6cbd=_0x3eced3[_0x416c17(0x1dd)][0x0]||_0x3eced3['투수'][0x0];_0x5c6cbd&&(_0x3eced3[_0x416c17(0x206)][_0x416c17(0x1e4)](_0x5c6cbd),_0x56c37a[_0x416c17(0x1f1)](_0x5c6cbd[_0x416c17(0x1f7)]));}else{if(_0x433062[_0x416c17(0x1e9)]>0x0){const _0x3a45cf=Math[_0x416c17(0x232)](Math[_0x416c17(0x208)]()*_0x433062[_0x416c17(0x1e9)]);_0x3eced3[_0x416c17(0x206)][_0x416c17(0x1e4)](_0x433062[_0x3a45cf]),_0x56c37a[_0x416c17(0x1f1)](_0x3eced3[_0x416c17(0x206)][0x0][_0x416c17(0x1f7)]);}}if(_0x3eced3[_0x416c17(0x206)][_0x416c17(0x1e9)]>0x1){const _0x353238=_0x3eced3['지명타자'][_0x416c17(0x21c)](),_0x5210f7=_0x3eced3[_0x416c17(0x206)][_0x416c17(0x1fe)](_0x5cc448=>_0x5cc448[_0x416c17(0x1f7)])[_0x416c17(0x1e6)](',\x20');_0x3eced3[_0x416c17(0x1dd)]['push']({'name':_0x5210f7}),_0x3eced3[_0x416c17(0x206)]=[_0x353238];}for(const [_0x58f37b,_0x55ad2d]of Object[_0x416c17(0x21a)](_0x3eced3)){_0x3eced3[_0x58f37b]=_0x55ad2d[_0x416c17(0x1f4)](_0x3c73ca=>{const _0x5858ba=_0x416c17;if(!_0x58e6bd[_0x5858ba(0x204)](_0x3c73ca['name']))return _0x58e6bd[_0x5858ba(0x1f1)](_0x3c73ca[_0x5858ba(0x1f7)]),!![];return![];});}const _0x1fee21=new Set();_0x3eced3[_0x416c17(0x1dd)]=_0x3eced3[_0x416c17(0x1dd)][_0x416c17(0x1f4)](_0x36ae45=>{const _0x599c68=_0x416c17;if(!_0x1fee21['has'](_0x36ae45[_0x599c68(0x1f7)]))return _0x1fee21['add'](_0x36ae45[_0x599c68(0x1f7)]),!![];return![];});let _0x4091a1='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>포지션</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>선수</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+Object[_0x416c17(0x21a)](_0x3eced3)['map'](([_0x197eac,_0x533352])=>_0x416c17(0x20a)+_0x197eac+_0x416c17(0x1ec)+(_0x197eac===_0x416c17(0x206)?_0x533352[_0x416c17(0x1e9)]>0x0?_0x533352[0x0][_0x416c17(0x1f7)]:'':_0x533352['length']>0x0?_0x533352[_0x416c17(0x1fe)](_0x1beba3=>_0x1beba3[_0x416c17(0x1f7)])[_0x416c17(0x1e6)](',\x20'):'')+_0x416c17(0x227))[_0x416c17(0x1e6)]('')+_0x416c17(0x1ff);return _0x4091a1;}function updateRemoveButtonVisibility(){const _0x260b0a=_0x587d6d,_0x1c8a8e=document[_0x260b0a(0x1e1)](_0x260b0a(0x224));_0x1c8a8e[_0x260b0a(0x221)]['backgroundColor']='red',_0x1c8a8e['style'][_0x260b0a(0x238)]=playerCount>0x1?'block':'none';}document['getElementById']('save-names')[_0x587d6d(0x1e7)](_0x587d6d(0x216),saveNames),document['getElementById']('add-player')[_0x587d6d(0x1e7)](_0x587d6d(0x216),addPlayer),document[_0x587d6d(0x1e1)](_0x587d6d(0x22a))[_0x587d6d(0x1e7)](_0x587d6d(0x216),createLineup),document[_0x587d6d(0x1e1)]('remove-player')[_0x587d6d(0x1e7)]('click',function(){const _0x4ca4cb=_0x587d6d,_0x31f234=document[_0x4ca4cb(0x1fa)](_0x4ca4cb(0x1e2));_0x31f234[_0x4ca4cb(0x1e9)]>0x0&&(_0x31f234[_0x31f234[_0x4ca4cb(0x1e9)]-0x1][_0x4ca4cb(0x205)](),playerCount--,updateRemoveButtonVisibility()),playerCount<=0x8&&(document['getElementById'](_0x4ca4cb(0x22a))['style'][_0x4ca4cb(0x238)]=_0x4ca4cb(0x20e));}),loadNamesFromCookies();function getRandomColor(){const _0xa16f12=_0x587d6d,_0x254245='0123456789ABCDEF';let _0x3fbe08='#';for(let _0x4272d0=0x0;_0x4272d0<0x6;_0x4272d0++){_0x3fbe08+=_0x254245[Math[_0xa16f12(0x232)](Math[_0xa16f12(0x208)]()*0x10)];}return _0x3fbe08;}let clickCount=0x0;const linkElement=document[_0x587d6d(0x1e1)]('link');linkElement[_0x587d6d(0x1e7)](_0x587d6d(0x216),function(_0xefa1b4){const _0x43af0b=_0x587d6d;clickCount++;if(clickCount===0xa)document[_0x43af0b(0x222)][_0x43af0b(0x221)][_0x43af0b(0x211)]=getRandomColor();else clickCount===0xe&&(linkElement['setAttribute']('href','https://github.com/WOONJANG'),linkElement[_0x43af0b(0x21f)](_0x43af0b(0x213)));}),document[_0x587d6d(0x1e1)](_0x587d6d(0x1df))[_0x587d6d(0x1e7)](_0x587d6d(0x216),function(_0x40a34d){const _0x3dbdbe=_0x587d6d;_0x40a34d['stopPropagation']();const _0x11acf2=document[_0x3dbdbe(0x1e1)]('help-card');_0x11acf2[_0x3dbdbe(0x226)]['contains']('show')?_0x11acf2['classList']['remove'](_0x3dbdbe(0x1f3)):_0x11acf2[_0x3dbdbe(0x226)][_0x3dbdbe(0x1f1)]('show');}),document[_0x587d6d(0x1e7)](_0x587d6d(0x216),function(_0x1957a0){const _0x5cf94d=_0x587d6d,_0x52eaee=document[_0x5cf94d(0x1e1)]('help-card'),_0x51827b=document[_0x5cf94d(0x1e1)](_0x5cf94d(0x1df));!_0x52eaee[_0x5cf94d(0x1f9)](_0x1957a0['target'])&&_0x1957a0['target']!==_0x51827b&&_0x52eaee[_0x5cf94d(0x226)]['remove'](_0x5cf94d(0x1f3));}),document[_0x587d6d(0x1e1)](_0x587d6d(0x1e0))[_0x587d6d(0x1e7)](_0x587d6d(0x216),function(){const _0x37f908=_0x587d6d,_0x59a6e7=confirm('정말로\x20입력한\x20선수를\x20초기화하시겠습니까?');_0x59a6e7&&(document[_0x37f908(0x1e3)]='savedNames=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/',alert(_0x37f908(0x20d)),savedNames=[],location[_0x37f908(0x223)]());});function NotReload(){const _0x53c70a=_0x587d6d;(event[_0x53c70a(0x20b)]==!![]&&(event[_0x53c70a(0x203)]==0x4e||event['keyCode']==0x52)||event[_0x53c70a(0x203)]==0x74)&&(event[_0x53c70a(0x203)]=0x0,event['cancelBubble']=!![],event[_0x53c70a(0x21d)]=![]);}document[_0x587d6d(0x237)]=NotReload;
