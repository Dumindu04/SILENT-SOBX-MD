const _0x23e578=_0x15e5;(function(_0x170db1,_0x4155eb){const _0x38bf51=_0x15e5,_0x35ba5=_0x170db1();while(!![]){try{const _0x5c3738=parseInt(_0x38bf51(0xc4))/0x1+parseInt(_0x38bf51(0xb9))/0x2*(parseInt(_0x38bf51(0xa9))/0x3)+-parseInt(_0x38bf51(0xba))/0x4+-parseInt(_0x38bf51(0xa1))/0x5*(parseInt(_0x38bf51(0x98))/0x6)+parseInt(_0x38bf51(0xbf))/0x7*(parseInt(_0x38bf51(0xbc))/0x8)+-parseInt(_0x38bf51(0x9a))/0x9*(-parseInt(_0x38bf51(0xa5))/0xa)+parseInt(_0x38bf51(0xcb))/0xb;if(_0x5c3738===_0x4155eb)break;else _0x35ba5['push'](_0x35ba5['shift']());}catch(_0x43b8bf){_0x35ba5['push'](_0x35ba5['shift']());}}}(_0x5757,0x604e9));function _0x15e5(_0x450f7a,_0x5793e6){const _0x57573a=_0x5757();return _0x15e5=function(_0x15e5ff,_0x516ed2){_0x15e5ff=_0x15e5ff-0x96;let _0x576195=_0x57573a[_0x15e5ff];return _0x576195;},_0x15e5(_0x450f7a,_0x5793e6);}const fetch=require('node-fetch'),{getBuffer,getGroupAdmins,getRandom,getsize,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x23e578(0x9d)),{cmd,commands}=require('../command'),fg=require(_0x23e578(0xc3)),yts=require(_0x23e578(0xbd));async function dlyta(_0x3210fb){const _0x27b26c=_0x23e578;try{const _0x421d13=0xa;for(let _0x33b16d=0x0;_0x33b16d<_0x421d13;_0x33b16d++){const _0x4784e7=await fetch(_0x27b26c(0xb7)+_0x3210fb),_0x2640e9=await _0x4784e7[_0x27b26c(0x96)]();if(_0x2640e9[_0x27b26c(0xb2)]['download_url'])return{'status':!![],'dl_link':_0x2640e9[_0x27b26c(0xb2)][_0x27b26c(0xb0)]};;}return await new Promise(_0x1e9cba=>setTimeout(_0x1e9cba,0xfa0)),{'status':![],'msg':_0x27b26c(0xa0)};}catch(_0x49beae){return console['error'](_0x49beae),{'status':![],'msg':_0x49beae[_0x27b26c(0xaf)]};}}cmd({'pattern':_0x23e578(0xb1),'alias':[_0x23e578(0xb8),'ytdown'],'react':'🎧','dontAddCommandList':!![],'filename':__filename},async(_0x8a410a,_0x588e3f,_0x1099a5,{from:_0x418acf,q:_0x48c130,reply:_0x3a6be1})=>{const _0x17bed8=_0x23e578;try{if(!_0x48c130)return await _0x3a6be1('*Need\x20a\x20YouTube\x20URL!*');_0x3a6be1(_0x17bed8(0xca));const _0x5e0f7c=await dlyta(_0x48c130);await _0x8a410a[_0x17bed8(0xb6)](_0x418acf,{'audio':{'url':_0x5e0f7c[_0x17bed8(0xb3)]},'mimetype':_0x17bed8(0xb5)},{'quoted':_0x588e3f});}catch(_0x4cc801){console[_0x17bed8(0xae)](_0x17bed8(0xc2),_0x4cc801);try{const _0x43632f=await dlyta(_0x48c130);await _0x8a410a[_0x17bed8(0xb6)](_0x418acf,{'audio':{'url':_0x43632f[_0x17bed8(0xb3)]},'mimetype':_0x17bed8(0xb5)},{'quoted':_0x588e3f});}catch(_0x402e63){console['log'](_0x17bed8(0xa6),_0x402e63),await _0x3a6be1(_0x17bed8(0xbe));}}}),cmd({'pattern':'song','alias':[_0x23e578(0xa2),'ytmp3'],'react':'🎧','dontAddCommandList':!![],'filename':__filename},async(_0x33e7cf,_0x29345f,_0x302243,{from:_0x50d8d0,q:_0x41efe9,reply:_0x19a939})=>{const _0xfac6c4=_0x23e578;try{if(!_0x41efe9)return await _0x19a939(_0xfac6c4(0xc1));const _0x15baab=await yts(_0x41efe9),_0x246f2c=_0x15baab[_0xfac6c4(0x9c)][0x0],_0x37ed0d=_0x246f2c[_0xfac6c4(0xab)];let _0x2b9c99='\x0a╭──────────────⊷❒\x0a_*🌸\x20SILENT-SOBX-MD\x20MUSIC\x20DOWNLOADER🌸*_\x0a⁠⁠⁠⁠╰──────────────⊷❒\x0a🌸\x20*Title\x20:*\x20'+_0x246f2c[_0xfac6c4(0x9b)]+_0xfac6c4(0xac)+_0x246f2c[_0xfac6c4(0xc7)]+'\x0a\x0a🌸\x20*Duration\x20:*\x20'+_0x246f2c[_0xfac6c4(0xb4)]+_0xfac6c4(0xaa)+_0x246f2c[_0xfac6c4(0x9e)]+_0xfac6c4(0xc6)+_0x246f2c[_0xfac6c4(0xbb)]+_0xfac6c4(0xc5)+_0x246f2c['url']+_0xfac6c4(0xa4),_0x345c19=await _0x33e7cf[_0xfac6c4(0xb6)](_0x50d8d0,{'image':{'url':_0x246f2c['thumbnail']},'caption':_0x2b9c99},{'quoted':_0x29345f});const _0x1b375e=await dlyta(_0x37ed0d);await _0x33e7cf[_0xfac6c4(0xb6)](_0x50d8d0,{'audio':{'url':_0x1b375e[_0xfac6c4(0xb3)]},'mimetype':_0xfac6c4(0xb5)},{'quoted':_0x29345f}),await _0x33e7cf[_0xfac6c4(0xb6)](_0x50d8d0,{'delete':_0x345c19[_0xfac6c4(0xc9)]});}catch(_0x48d3f1){console['log'](_0xfac6c4(0xc2),_0x48d3f1);try{const _0x44193a=await dlyta(url);await _0x33e7cf[_0xfac6c4(0xb6)](_0x50d8d0,{'audio':{'url':_0x44193a[_0xfac6c4(0xb3)]},'mimetype':_0xfac6c4(0xb5)},{'quoted':_0x29345f}),await _0x33e7cf[_0xfac6c4(0xb6)](_0x50d8d0,{'delete':dels[_0xfac6c4(0xc9)]});}catch(_0x3c3044){console['log'](_0xfac6c4(0xa6),_0x3c3044),await _0x19a939(_0xfac6c4(0xbe));}}}),cmd({'pattern':_0x23e578(0xad),'desc':'downlode\x20videos','category':_0x23e578(0xc0),'react':'🎬','filename':__filename},async(_0x55d0ac,_0x5a89fd,_0x1d185d,{from:_0x58615b,quoted:_0x12b195,body:_0x466314,isCmd:_0x476ed5,command:_0x13ff48,args:_0x1115ff,q:_0x1ef769,isGroup:_0x2c3808,sender:_0x317e54,senderNumber:_0x58932d,botNumber2:_0xf1d812,botNumber:_0x4e133d,pushname:_0x59ad66,isMe:_0x137414,isOwner:_0x58a0e2,groupMetadata:_0x4cdbf9,groupName:_0x23a9c3,participants:_0x1f63b8,groupAdmins:_0x2d6bc6,isBotAdmins:_0x133c52,isAdmins:_0x566f49,reply:_0x158882})=>{const _0x40d0a0=_0x23e578;try{if(!_0x1ef769)return _0x158882(_0x40d0a0(0xa3));const _0x541ffb=await yts(_0x1ef769),_0x49d7ef=_0x541ffb[_0x40d0a0(0x9c)][0x0],_0x40d7ef=_0x49d7ef[_0x40d0a0(0xab)];let _0x3d4fc8=_0x40d0a0(0xa8)+_0x49d7ef[_0x40d0a0(0x9b)]+'\x0a\x0a🌸\x20*Description\x20:*\x20'+_0x49d7ef[_0x40d0a0(0xc7)]+'\x0a\x0a🌸\x20*Duration\x20:*\x20'+_0x49d7ef[_0x40d0a0(0xb4)]+_0x40d0a0(0xaa)+_0x49d7ef[_0x40d0a0(0x9e)]+_0x40d0a0(0xc6)+_0x49d7ef[_0x40d0a0(0xbb)]+_0x40d0a0(0xc5)+_0x49d7ef[_0x40d0a0(0xab)]+_0x40d0a0(0xa7);await _0x55d0ac['sendMessage'](_0x58615b,{'image':{'url':_0x49d7ef[_0x40d0a0(0x9f)]},'caption':_0x3d4fc8},{'quoted':_0x5a89fd});let _0x4d56b7=await fg['ytv'](_0x40d7ef),_0x22e21a=_0x4d56b7[_0x40d0a0(0x99)],_0x1b6348=await _0x55d0ac[_0x40d0a0(0xb6)](_0x58615b,{'video':{'url':_0x22e21a},'mimetype':_0x40d0a0(0x97),'caption':_0x40d0a0(0xc8)},{'quoted':_0x5a89fd});await _0x55d0ac[_0x40d0a0(0xb6)](_0x58615b,{'react':{'text':'✅','key':_0x1b6348['key']}});}catch(_0x2fc383){console['log'](_0x2fc383),_0x158882(''+_0x2fc383);}});function _0x5757(){const _0x3d3be8=['\x0a\x0a🌸\x20*Views\x20:*\x20','description','*©ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ꜱɪʟᴇɴᴛ\x20ʟᴏᴠᴇʀ..⁴³²🧑🏻‍💻*','key','*🌸DOWNLOADING···*\x0a>\x20SILΣΠT-SΩβX-MD','7222699dGqIyF','json','video/mp4','448194fOzfxT','dl_url','1258551SSiZnw','title','videos','../lib/functions','ago','thumbnail','error','45CwzMUp','play','*Please\x20give\x20me\x20a\x20YT\x20url\x20or\x20Title*','\x0a┌───────────────\x0a│\x20*_ᴜᴘʟᴏᴅɪɴɢ\x20ʏᴏᴜʀ\x20ᴀᴜᴅɪᴏ\x20ꜰɪʟᴇ_*\x0a└───────────────\x0a>\x20*©\x20ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ꜱɪʟᴇɴᴛ\x20ʟᴏᴠᴇʀ\x20·\x20·\x20·⁴³²*\x0a>\x20SILΣΠT-SΩβX-MD\x0a','10Kwmbie','Second\x20attempt\x20failed:','\x0a\x0a_📤ᴜᴘʟᴏᴅɪɴɢ\x20ʏᴏᴜʀ\x20ᴠɪᴅᴇᴏ\x20ꜰɪʟᴇ📤_\x0a\x0a\x0a>\x20SILΣΠT-SΩβX-MD\x0a','\x0a*──────────────────*\x0a_*🌸\x20SILENT-SOBX-MD\x20VIDEO\x20DOWNLOADER\x20🌸*_\x0a*──────────────────*\x0a\x0a🌸\x20*Title\x20:*\x20','1134777MmoiZX','\x0a\x0a🌸\x20*Ago\x20:*\x20','url','\x0a\x0a🌸\x20*Description\x20:*\x20','video','log','message','download_url','yta','result','dl_link','timestamp','audio/mpeg','sendMessage','https://api-pink-venom.vercel.app/api/ytdl?url=','ytmp3','2HOOTKz','2611992jCfNsF','views','8XzTQEq','yt-search','*Failed\x20to\x20process\x20the\x20request.\x20Please\x20try\x20again\x20later!*','467138hVMTgF','downlode','*Need\x20a\x20Title!*','First\x20attempt\x20failed:','api-dylux','478321vYWMeU','\x0a\x0a🌸\x20*URL\x20:*\x20'];_0x5757=function(){return _0x3d3be8;};return _0x5757();}
