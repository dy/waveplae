var Ie=(n,e,i)=>{for(let s=0;s<n.length;s++){let t=e(s);for(let r=8;r>0;r--)t=i(t);n[s]=t}return n},lt=Ie(new Uint8Array(256),n=>n,n=>n&128?7^n<<1:n<<1),d=[Ie(new Uint16Array(256),n=>n<<8,n=>n<<1^(n&1<<15?32773:0))],p=[Ie(new Uint32Array(256),n=>n,n=>n>>>1^(n&1)*3988292384)];for(let n=0;n<15;n++){d.push(new Uint16Array(256)),p.push(new Uint32Array(256));for(let e=0;e<=255;e++)d[n+1][e]=d[0][d[n][e]>>>8]^d[n][e]<<8,p[n+1][e]=p[n][e]>>>8^p[0][p[n][e]&255]}var qe=n=>{let e=0,i=n.length;for(let s=0;s!==i;s++)e=lt[e^n[s]];return e},Ve=n=>{let e=n.length,i=e-16,s=0,t=0;for(;t<=i;)s^=n[t++]<<8|n[t++],s=d[15][s>>8]^d[14][s&255]^d[13][n[t++]]^d[12][n[t++]]^d[11][n[t++]]^d[10][n[t++]]^d[9][n[t++]]^d[8][n[t++]]^d[7][n[t++]]^d[6][n[t++]]^d[5][n[t++]]^d[4][n[t++]]^d[3][n[t++]]^d[2][n[t++]]^d[1][n[t++]]^d[0][n[t++]];for(;t!==e;)s=(s&255)<<8^d[0][s>>8^n[t++]];return s},Ge=n=>{let e=n.length,i=e-16,s=0,t=0;for(;t<=i;)s=p[15][(n[t++]^s)&255]^p[14][(n[t++]^s>>>8)&255]^p[13][(n[t++]^s>>>16)&255]^p[12][n[t++]^s>>>24]^p[11][n[t++]]^p[10][n[t++]]^p[9][n[t++]]^p[8][n[t++]]^p[7][n[t++]]^p[6][n[t++]]^p[5][n[t++]]^p[4][n[t++]]^p[3][n[t++]]^p[2][n[t++]]^p[1][n[t++]]^p[0][n[t++]];for(;t!==e;)s=p[0][(s^n[t++])&255]^s>>>8;return s^-1},se=(...n)=>{let e=new Uint8Array(n.reduce((i,s)=>i+s.length,0));return n.reduce((i,s)=>(e.set(s,i),i+s.length),0),e},x=n=>String.fromCharCode(...n),$e=[0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15],ie=n=>$e[n&15]<<4|$e[n>>4],fe=class{constructor(e){this._data=e,this._pos=e.length*8}set position(e){this._pos=e}get position(){return this._pos}read(e){let i=Math.floor(this._pos/8),s=this._pos%8;return this._pos-=e,(ie(this._data[i-1])<<8)+ie(this._data[i])>>7-s&255}};var ne=class{constructor(e){this._onCodecUpdate=e,this.reset()}enable(){this._isEnabled=!0}reset(){this._headerCache=new Map,this._codecUpdateData=new WeakMap,this._codecShouldUpdate=!1,this._bitrate=null,this._isEnabled=!1}checkCodecUpdate(e,i){if(this._onCodecUpdate){this._bitrate!==e&&(this._bitrate=e,this._codecShouldUpdate=!0);let s=this._codecUpdateData.get(this._headerCache.get(this._currentHeader));this._codecShouldUpdate&&s&&this._onCodecUpdate({bitrate:e,...s},i),this._codecShouldUpdate=!1}}updateCurrentHeader(e){this._onCodecUpdate&&e!==this._currentHeader&&(this._codecShouldUpdate=!0,this._currentHeader=e)}getHeader(e){let i=this._headerCache.get(e);return i&&this.updateCurrentHeader(e),i}setHeader(e,i,s){this._isEnabled&&(this.updateCurrentHeader(e),this._headerCache.set(e,i),this._codecUpdateData.set(i,s))}};var b=new WeakMap,g=new WeakMap;var y=class{constructor(e,i){this._codecParser=e,this._headerCache=i}*syncFrame(){let e;do{if(e=yield*this.Frame.getFrame(this._codecParser,this._headerCache,0),e)return e;this._codecParser.incrementRawData(1)}while(!0)}*fixedLengthFrameSync(e){let i=yield*this.syncFrame(),s=g.get(i).length;if(e||this._codecParser._flushing||(yield*this.Header.getHeader(this._codecParser,this._headerCache,s)))return this._headerCache.enable(),this._codecParser.incrementRawData(s),this._codecParser.mapFrameStats(i),i;this._codecParser.logWarning(`Missing frame frame at ${s} bytes from current position.`,"Dropping current frame and trying again."),this._headerCache.reset(),this._codecParser.incrementRawData(1)}};var T=class{constructor(e,i){g.set(this,{header:e}),this.data=i}};var w=class extends T{static*getFrame(e,i,s,t,r){let a=yield*e.getHeader(s,t,r);if(a){let c=b.get(a).frameLength,h=b.get(a).samples,m=(yield*s.readRawData(c,r)).subarray(0,c);return new i(a,m,h)}else return null}constructor(e,i,s){super(e,i),this.header=e,this.samples=s,this.duration=s/e.sampleRate*1e3,this.frameNumber=null,this.totalBytesOut=null,this.totalSamples=null,this.totalDuration=null,g.get(this).length=i.length}};var l="reserved",S="bad",G="free",oe="none",Se="16bit CRC",We=", ",ht="front",mt="side",dt="rear",ge="left",_e="center",ye="right",o=["",ht+" ",mt+" ",dt+" "].map(n=>[[ge,ye],[ge,ye,_e],[ge,_e,ye],[_e,ge,ye],[_e]].flatMap(e=>e.map(i=>n+i).join(We))),z="LFE",D="monophonic (mono)",L="stereo",ae="surround",pt=[D,L,`linear ${ae}`,"quadraphonic",`5.0 ${ae}`,`5.1 ${ae}`,`6.1 ${ae}`,`7.1 ${ae}`],u=(n,...e)=>`${pt[n-1]} (${e.join(We)})`,ce=[D,u(2,o[0][0]),u(3,o[0][2]),u(4,o[1][0],o[3][0]),u(5,o[1][2],o[3][0]),u(6,o[1][2],o[3][0],z),u(7,o[1][2],o[2][0],o[3][4],z),u(8,o[1][2],o[2][0],o[3][0],z)],je=192e3,Je=176400,xe=96e3,we=88200,Ze=64e3,U=48e3,W=44100,j=32e3,J=24e3,Z=22050,K=16e3,Ce=12e3,Fe=11025,X=8e3,Ke=7350;var E=class{static*getID3v2Header(e,i,s){let t={headerLength:10},r=yield*e.readRawData(3,s);return r[0]!==73||r[1]!==68||r[2]!==51||(r=yield*e.readRawData(t.headerLength,s),t.version=`id3v2.${r[3]}.${r[4]}`,r[5]&15)||(t.unsynchronizationFlag=Boolean(r[5]&128),t.extendedHeaderFlag=Boolean(r[5]&64),t.experimentalFlag=Boolean(r[5]&32),t.footerPresent=Boolean(r[5]&16),r[6]&128||r[7]&128||r[8]&128||r[9]&128)?null:(t.dataLength=r[6]<<21|r[7]<<14|r[8]<<7|r[9],t.length=t.headerLength+t.dataLength,new E(t))}constructor(e){this.version=e.version,this.unsynchronizationFlag=e.unsynchronizationFlag,this.extendedHeaderFlag=e.extendedHeaderFlag,this.experimentalFlag=e.experimentalFlag,this.footerPresent=e.footerPresent,this.length=e.length}};var C=class{constructor(e){b.set(this,e),this.bitDepth=e.bitDepth,this.bitrate=null,this.channels=e.channels,this.channelMode=e.channelMode,this.sampleRate=e.sampleRate}};var rt={0:[G,G,G,G,G],16:[32,32,32,32,8],240:[S,S,S,S,S]},Be=(n,e,i)=>8*((n+i)%e+e)*(1<<(n+i)/e)-8*e*(e/8|0);for(let n=2;n<15;n++)rt[n<<4]=[n*32,Be(n,4,0),Be(n,4,-1),Be(n,8,4),Be(n,8,0)];var ut=0,bt=1,ft=2,gt=3,Xe=4,ke="bands ",Re=" to 31",Qe={0:ke+4+Re,16:ke+8+Re,32:ke+12+Re,48:ke+16+Re},ze="Intensity stereo ",Me=", MS stereo ",ve="on",Pe="off",_t={0:ze+Pe+Me+Pe,16:ze+ve+Me+Pe,32:ze+Pe+Me+ve,48:ze+ve+Me+ve};var Ne={0:{description:l},2:{description:"Layer III",framePadding:1,modeExtensions:_t,v1:{bitrateIndex:ft,samples:1152},v2:{bitrateIndex:Xe,samples:576}},4:{description:"Layer II",framePadding:1,modeExtensions:Qe,samples:1152,v1:{bitrateIndex:bt},v2:{bitrateIndex:Xe}},6:{description:"Layer I",framePadding:4,modeExtensions:Qe,samples:384,v1:{bitrateIndex:ut},v2:{bitrateIndex:gt}}},Ae="MPEG Version ",Ye="ISO/IEC ",et="v2",yt="v1",St={0:{description:`${Ae}2.5 (later extension of MPEG 2)`,layers:et,sampleRates:{0:Fe,4:Ce,8:X,12:l}},8:{description:l},16:{description:`${Ae}2 (${Ye}13818-3)`,layers:et,sampleRates:{0:Z,4:J,8:K,12:l}},24:{description:`${Ae}1 (${Ye}11172-3)`,layers:yt,sampleRates:{0:W,4:U,8:j,12:l}}},xt={0:Se,1:oe},wt={0:oe,1:"50/15 ms",2:l,3:"CCIT J.17"},tt={0:{channels:2,description:L},64:{channels:2,description:"joint "+L},128:{channels:2,description:"dual channel"},192:{channels:1,description:D}},M=class extends C{static*getHeader(e,i,s){let t={},r=yield*E.getID3v2Header(e,i,s);r&&(yield*e.readRawData(r.length,s),e.incrementRawData(r.length));let a=yield*e.readRawData(4,s),c=x(a.subarray(0,4)),h=i.getHeader(c);if(h)return new M(h);if(a[0]!==255||a[1]<224)return null;let m=St[a[1]&24];if(m.description===l)return null;let f=a[1]&6;if(Ne[f].description===l)return null;let F={...Ne[f],...Ne[f][m.layers]};if(t.mpegVersion=m.description,t.layer=F.description,t.samples=F.samples,t.protection=xt[a[1]&1],t.length=4,t.bitrate=rt[a[2]&240][F.bitrateIndex],t.bitrate===S||(t.sampleRate=m.sampleRates[a[2]&12],t.sampleRate===l)||(t.framePadding=a[2]&2&&F.framePadding,t.isPrivate=Boolean(a[2]&1),t.frameLength=Math.floor(125*t.bitrate*t.samples/t.sampleRate+t.framePadding),!t.frameLength))return null;let re=a[3]&192;if(t.channelMode=tt[re].description,t.channels=tt[re].channels,t.modeExtension=F.modeExtensions[a[3]&48],t.isCopyrighted=Boolean(a[3]&8),t.isOriginal=Boolean(a[3]&4),t.emphasis=wt[a[3]&3],t.emphasis===l)return null;t.bitDepth=16;let{length:Le,frameLength:be,samples:Ee,...Ue}=t;return i.setHeader(c,t,Ue),new M(t)}constructor(e){super(e),this.bitrate=e.bitrate,this.emphasis=e.emphasis,this.framePadding=e.framePadding,this.isCopyrighted=e.isCopyrighted,this.isOriginal=e.isOriginal,this.isPrivate=e.isPrivate,this.layer=e.layer,this.modeExtension=e.modeExtension,this.mpegVersion=e.mpegVersion,this.protection=e.protection}};var O=class extends w{static*getFrame(e,i,s){return yield*super.getFrame(M,O,e,i,s)}constructor(e,i,s){super(e,i,s)}};var le=class extends y{constructor(e,i,s){super(e,i),this.Frame=O,this.Header=M,s(this.codec)}get codec(){return"mpeg"}*parseFrame(){return yield*this.fixedLengthFrameSync()}};var Ct={0:"MPEG-4",8:"MPEG-2"},Ft={0:"valid",2:S,4:S,6:S},Bt={0:Se,1:oe},kt={0:"AAC Main",64:"AAC LC (Low Complexity)",128:"AAC SSR (Scalable Sample Rate)",192:"AAC LTP (Long Term Prediction)"},Rt={0:xe,4:we,8:Ze,12:U,16:W,20:j,24:J,28:Z,32:K,36:Ce,40:Fe,44:X,48:Ke,52:l,56:l,60:"frequency is written explicitly"},it={0:{channels:0,description:"Defined in AOT Specific Config"},64:{channels:1,description:D},128:{channels:2,description:u(2,o[0][0])},192:{channels:3,description:u(3,o[1][3])},256:{channels:4,description:u(4,o[1][3],o[3][4])},320:{channels:5,description:u(5,o[1][3],o[3][0])},384:{channels:6,description:u(6,o[1][3],o[3][0],z)},448:{channels:8,description:u(8,o[1][3],o[2][0],o[3][0],z)}},v=class extends C{static*getHeader(e,i,s){let t={},r=yield*e.readRawData(7,s),a=x([r[0],r[1],r[2],r[3]&252|r[6]&3]),c=i.getHeader(a);if(c)Object.assign(t,c);else{if(r[0]!==255||r[1]<240||(t.mpegVersion=Ct[r[1]&8],t.layer=Ft[r[1]&6],t.layer===S))return null;let m=r[1]&1;t.protection=Bt[m],t.length=m?7:9,t.profileBits=r[2]&192,t.sampleRateBits=r[2]&60;let f=r[2]&2;if(t.profile=kt[t.profileBits],t.sampleRate=Rt[t.sampleRateBits],t.sampleRate===l)return null;t.isPrivate=Boolean(f),t.channelModeBits=(r[2]<<8|r[3])&448,t.channelMode=it[t.channelModeBits].description,t.channels=it[t.channelModeBits].channels,t.isOriginal=Boolean(r[3]&32),t.isHome=Boolean(r[3]&8),t.copyrightId=Boolean(r[3]&8),t.copyrightIdStart=Boolean(r[3]&4),t.bitDepth=16,t.samples=1024,t.numberAACFrames=r[6]&3;let{length:F,channelModeBits:re,profileBits:Le,sampleRateBits:be,frameLength:Ee,samples:Ue,numberAACFrames:Oe,...ct}=t;i.setHeader(a,t,ct)}if(t.frameLength=(r[3]<<11|r[4]<<3|r[5]>>5)&8191,!t.frameLength)return null;let h=(r[5]<<6|r[6]>>2)&2047;return t.bufferFullness=h===2047?"VBR":h,new v(t)}constructor(e){super(e),this.copyrightId=e.copyrightId,this.copyrightIdStart=e.copyrightIdStart,this.bufferFullness=e.bufferFullness,this.isHome=e.isHome,this.isOriginal=e.isOriginal,this.isPrivate=e.isPrivate,this.layer=e.layer,this.length=e.length,this.mpegVersion=e.mpegVersion,this.numberAACFrames=e.numberAACFrames,this.profile=e.profile,this.protection=e.protection}get audioSpecificConfig(){let e=b.get(this),i=e.profileBits+64<<5|e.sampleRateBits<<5|e.channelModeBits>>3,s=new Uint8Array(2);return new DataView(s.buffer).setUint16(0,i,!1),s}};var $=class extends w{static*getFrame(e,i,s){return yield*super.getFrame(v,$,e,i,s)}constructor(e,i,s){super(e,i,s)}};var he=class extends y{constructor(e,i,s){super(e,i),this.Frame=$,this.Header=v,s(this.codec)}get codec(){return"aac"}*parseFrame(){return yield*this.fixedLengthFrameSync()}};var R=class extends w{static getFrameFooterCrc16(e){return(e[e.length-2]<<8)+e[e.length-1]}static checkFrameFooterCrc16(e){let i=R.getFrameFooterCrc16(e),s=Ve(e.subarray(0,-2));return i===s}constructor(e,i,s){i.streamInfo=s,i.crc16=R.getFrameFooterCrc16(e),super(i,e,b.get(i).samples)}};var st="get from STREAMINFO metadata block",zt={0:"Fixed",1:"Variable"},nt={0:l,16:192};for(let n=2;n<16;n++)nt[n<<4]=n<6?576*2**(n-2):2**n;var Mt={0:st,1:we,2:Je,3:je,4:X,5:K,6:Z,7:J,8:j,9:W,10:U,11:xe,15:S},vt={0:{channels:1,description:D},16:{channels:2,description:u(2,o[0][0])},32:{channels:3,description:u(3,o[0][1])},48:{channels:4,description:u(4,o[1][0],o[3][0])},64:{channels:5,description:u(5,o[1][1],o[3][0])},80:{channels:6,description:u(6,o[1][1],z,o[3][0])},96:{channels:7,description:u(7,o[1][1],z,o[3][4],o[2][0])},112:{channels:8,description:u(8,o[1][1],z,o[3][0],o[2][0])},128:{channels:2,description:`${L} (left, diff)`},144:{channels:2,description:`${L} (diff, right)`},160:{channels:2,description:`${L} (avg, diff)`},176:l,192:l,208:l,224:l,240:l},Pt={0:st,2:8,4:12,6:l,8:16,10:20,12:24,14:l},B=class extends C{static decodeUTF8Int(e){if(e[0]>254)return null;if(e[0]<128)return{value:e[0],length:1};let i=1;for(let a=64;a&e[0];a>>=1)i++;let s=i-1,t=0,r=0;for(;s>0;r+=6,s--){if((e[s]&192)!==128)return null;t|=(e[s]&63)<<r}return t|=(e[s]&127>>i)<<r,{value:t,length:i}}static getHeaderFromUint8Array(e,i){let s={readRawData:function*(){return e}};return B.getHeader(s,i,0).next().value}static*getHeader(e,i,s){let t=yield*e.readRawData(6,s);if(t[0]!==255||!(t[1]===248||t[1]===249))return null;let r={},a=x(t.subarray(0,4)),c=i.getHeader(a);if(c)Object.assign(r,c);else{if(r.blockingStrategyBits=t[1]&1,r.blockingStrategy=zt[r.blockingStrategyBits],r.blockSizeBits=t[2]&240,r.sampleRateBits=t[2]&15,r.blockSize=nt[r.blockSizeBits],r.blockSize===l||(r.sampleRate=Mt[r.sampleRateBits],r.sampleRate===S)||t[3]&1)return null;let m=vt[t[3]&240];if(m===l||(r.channels=m.channels,r.channelMode=m.description,r.bitDepth=Pt[t[3]&14],r.bitDepth===l))return null}r.length=5,t=yield*e.readRawData(r.length+8,s);let h=B.decodeUTF8Int(t.subarray(4));if(!h||(r.blockingStrategyBits?r.sampleNumber=h.value:r.frameNumber=h.value,r.length+=h.length,r.blockSizeBits===96?(t.length<r.length&&(t=yield*e.readRawData(r.length,s)),r.blockSize=t[r.length-1]+1,r.length+=1):r.blockSizeBits===112&&(t.length<r.length&&(t=yield*e.readRawData(r.length,s)),r.blockSize=(t[r.length-1]<<8)+t[r.length]+1,r.length+=2),r.samples=r.blockSize,r.sampleRateBits===12?(t.length<r.length&&(t=yield*e.readRawData(r.length,s)),r.sampleRate=t[r.length-1]*1e3,r.length+=1):r.sampleRateBits===13?(t.length<r.length&&(t=yield*e.readRawData(r.length,s)),r.sampleRate=(t[r.length-1]<<8)+t[r.length],r.length+=2):r.sampleRateBits===14&&(t.length<r.length&&(t=yield*e.readRawData(r.length,s)),r.sampleRate=((t[r.length-1]<<8)+t[r.length])*10,r.length+=2),t.length<r.length&&(t=yield*e.readRawData(r.length,s)),r.crc=t[r.length-1],r.crc!==qe(t.subarray(0,r.length-1))))return null;if(!c){let{blockingStrategyBits:m,frameNumber:f,sampleNumber:F,samples:re,sampleRateBits:Le,blockSizeBits:be,crc:Ee,length:Ue,...Oe}=r;i.setHeader(a,r,Oe)}return new B(r)}constructor(e){super(e),this.crc16=null,this.blockingStrategy=e.blockingStrategy,this.blockSize=e.blockSize,this.frameNumber=e.frameNumber,this.sampleNumber=e.sampleNumber,this.streamInfo=null}};var Ht=2,Dt=512*1024,q=class extends y{constructor(e,i){super(e,i),this.Frame=R,this.Header=B}get codec(){return"flac"}*_getNextFrameSyncOffset(e){let i=yield*this._codecParser.readRawData(2,0),s=i.length-2;for(;e<s;){if(i[e]===255){let r=i[e+1];if(r===248||r===249)break;r!==255&&e++}e++}return e}*parseFrame(){do{let e=yield*B.getHeader(this._codecParser,this._headerCache,0);if(e){let i=b.get(e).length+Ht;for(;i<=Dt;){if(this._codecParser._flushing||(yield*B.getHeader(this._codecParser,this._headerCache,i))){let s=yield*this._codecParser.readRawData(i);if(this._codecParser._flushing||(s=s.subarray(0,i)),R.checkFrameFooterCrc16(s)){let t=new R(s,e);return this._headerCache.enable(),this._codecParser.incrementRawData(i),this._codecParser.mapFrameStats(t),t}}i=yield*this._getNextFrameSyncOffset(i+1)}this._codecParser.logWarning(`Unable to sync FLAC frame after searching ${i} bytes.`),this._codecParser.incrementRawData(i)}else this._codecParser.incrementRawData(yield*this._getNextFrameSyncOffset(1))}while(!0)}parseOggPage(e){return e.pageSequenceNumber===0?(this._headerCache.enable(),this._streamInfo=e.data.subarray(13)):e.pageSequenceNumber===1||(e.codecFrames=g.get(e).segments.map(i=>{let s=B.getHeaderFromUint8Array(i,this._headerCache);if(s)return new R(i,s,this._streamInfo);this._codecParser.logWarning("Failed to parse Ogg FLAC frame","Skipping invalid FLAC frame")}).filter(i=>Boolean(i))),e}};var P=class{static*getHeader(e,i,s){let t={},r=yield*e.readRawData(28,s);if(r[0]!==79||r[1]!==103||r[2]!==103||r[3]!==83||(t.streamStructureVersion=r[4],r[5]&248))return null;t.isLastPage=Boolean(r[5]&4),t.isFirstPage=Boolean(r[5]&2),t.isContinuedPacket=Boolean(r[5]&1);let c=new DataView(Uint8Array.from(r.subarray(0,28)).buffer);try{t.absoluteGranulePosition=c.getBigInt64(6,!0)}catch{}t.streamSerialNumber=c.getInt32(14,!0),t.pageSequenceNumber=c.getInt32(18,!0),t.pageChecksum=c.getInt32(22,!0);let h=r[26];t.length=h+27,r=yield*e.readRawData(t.length,s),t.frameLength=0,t.pageSegmentTable=[],t.pageSegmentBytes=Uint8Array.from(r.subarray(27,t.length));for(let m=0,f=0;m<h;m++){let F=t.pageSegmentBytes[m];t.frameLength+=F,f+=F,(F!==255||m===h-1)&&(t.pageSegmentTable.push(f),f=0)}return new P(t)}constructor(e){b.set(this,e),this.absoluteGranulePosition=e.absoluteGranulePosition,this.isContinuedPacket=e.isContinuedPacket,this.isFirstPage=e.isFirstPage,this.isLastPage=e.isLastPage,this.pageSegmentTable=e.pageSegmentTable,this.pageSequenceNumber=e.pageSequenceNumber,this.pageChecksum=e.pageChecksum,this.streamSerialNumber=e.streamSerialNumber}};var V=class extends T{static*getFrame(e,i,s){let t=yield*P.getHeader(e,i,s);if(t){let r=b.get(t).frameLength,a=b.get(t).length,c=a+r,h=(yield*e.readRawData(c,0)).subarray(0,c),m=h.subarray(a,c);return new V(t,m,h)}else return null}constructor(e,i,s){super(e,i),g.get(this).length=s.length,this.codecFrames=[],this.rawData=s,this.absoluteGranulePosition=e.absoluteGranulePosition,this.crc32=e.pageChecksum,this.duration=0,this.isContinuedPacket=e.isContinuedPacket,this.isFirstPage=e.isFirstPage,this.isLastPage=e.isLastPage,this.pageSequenceNumber=e.pageSequenceNumber,this.samples=0,this.streamSerialNumber=e.streamSerialNumber}};var Q=class extends w{constructor(e,i){super(i,e,i.frameSize*i.frameCount/1e3*i.sampleRate)}};var at={0:ce.slice(0,2),1:ce},k="SILK-only",_="CELT-only",He="Hybrid",I="narrowband",De="medium-band",N="wideband",Y="super-wideband",ee="fullband",Lt={0:{mode:k,bandwidth:I,frameSize:10},8:{mode:k,bandwidth:I,frameSize:20},16:{mode:k,bandwidth:I,frameSize:40},24:{mode:k,bandwidth:I,frameSize:60},32:{mode:k,bandwidth:De,frameSize:10},40:{mode:k,bandwidth:De,frameSize:20},48:{mode:k,bandwidth:De,frameSize:40},56:{mode:k,bandwidth:De,frameSize:60},64:{mode:k,bandwidth:N,frameSize:10},72:{mode:k,bandwidth:N,frameSize:20},80:{mode:k,bandwidth:N,frameSize:40},88:{mode:k,bandwidth:N,frameSize:60},96:{mode:He,bandwidth:Y,frameSize:10},104:{mode:He,bandwidth:Y,frameSize:20},112:{mode:He,bandwidth:ee,frameSize:10},120:{mode:He,bandwidth:ee,frameSize:20},128:{mode:_,bandwidth:I,frameSize:2.5},136:{mode:_,bandwidth:I,frameSize:5},144:{mode:_,bandwidth:I,frameSize:10},152:{mode:_,bandwidth:I,frameSize:20},160:{mode:_,bandwidth:N,frameSize:2.5},168:{mode:_,bandwidth:N,frameSize:5},176:{mode:_,bandwidth:N,frameSize:10},184:{mode:_,bandwidth:N,frameSize:20},192:{mode:_,bandwidth:Y,frameSize:2.5},200:{mode:_,bandwidth:Y,frameSize:5},208:{mode:_,bandwidth:Y,frameSize:10},216:{mode:_,bandwidth:Y,frameSize:20},224:{mode:_,bandwidth:ee,frameSize:2.5},232:{mode:_,bandwidth:ee,frameSize:5},240:{mode:_,bandwidth:ee,frameSize:10},248:{mode:_,bandwidth:ee,frameSize:20}},H=class extends C{static getHeaderFromUint8Array(e,i,s){let t={};if(t.channels=e[9],t.channelMappingFamily=e[18],t.length=t.channelMappingFamily!==0?21+t.channels:19,e.length<t.length)throw new Error("Out of data while inside an Ogg Page");let r=i[0]&3,a=r===3?2:1,c=x(e.subarray(0,t.length))+x(i.subarray(0,a)),h=s.getHeader(c);if(h)return new H(h);if(c.substr(0,8)!=="OpusHead"||e[8]!==1)return null;t.data=Uint8Array.from(e.subarray(0,t.length));let m=new DataView(t.data.buffer);if(t.bitDepth=16,t.preSkip=m.getUint16(10,!0),t.inputSampleRate=m.getUint32(12,!0),t.sampleRate=U,t.outputGain=m.getInt16(16,!0),t.channelMappingFamily in at&&(t.channelMode=at[t.channelMappingFamily][t.channels-1],!t.channelMode))return null;t.channelMappingFamily!==0&&(t.streamCount=e[19],t.coupledStreamCount=e[20],t.channelMappingTable=[...e.subarray(21,t.channels+21)]);let f=Lt[248&i[0]];switch(t.mode=f.mode,t.bandwidth=f.bandwidth,t.frameSize=f.frameSize,r){case 0:t.frameCount=1;break;case 1:case 2:t.frameCount=2;break;case 3:t.isVbr=Boolean(128&i[1]),t.hasOpusPadding=Boolean(64&i[1]),t.frameCount=63&i[1];break;default:return null}let{length:F,data:re,channelMappingFamily:Le,...be}=t;return s.setHeader(c,t,be),new H(t)}constructor(e){super(e),this.data=e.data,this.bandwidth=e.bandwidth,this.channelMappingFamily=e.channelMappingFamily,this.channelMappingTable=e.channelMappingTable,this.coupledStreamCount=e.coupledStreamCount,this.frameCount=e.frameCount,this.frameSize=e.frameSize,this.hasOpusPadding=e.hasOpusPadding,this.inputSampleRate=e.inputSampleRate,this.isVbr=e.isVbr,this.mode=e.mode,this.outputGain=e.outputGain,this.preSkip=e.preSkip,this.streamCount=e.streamCount}};var me=class extends y{constructor(e,i){super(e,i),this.Frame=Q,this.Header=H,this._identificationHeader=null}get codec(){return"opus"}parseOggPage(e){return e.pageSequenceNumber===0?(this._headerCache.enable(),this._identificationHeader=e.data):e.pageSequenceNumber===1||(e.codecFrames=g.get(e).segments.map(i=>{let s=H.getHeaderFromUint8Array(this._identificationHeader,i,this._headerCache);if(s)return new Q(i,s);this._codecParser.logError("Failed to parse Ogg Opus Header","Not a valid Ogg Opus file")})),e}};var te=class extends w{constructor(e,i,s){super(i,e,s)}};var Te={};for(let n=0;n<8;n++)Te[n+6]=2**(6+n);var A=class extends C{static getHeaderFromUint8Array(e,i){if(e.length<30)throw new Error("Out of data while inside an Ogg Page");let s=x(e.subarray(0,30)),t=i.getHeader(s);if(t)return new A(t);let r={length:30};if(s.substr(0,7)!=="vorbis")return null;r.data=Uint8Array.from(e.subarray(0,30));let a=new DataView(r.data.buffer);if(r.version=a.getUint32(7,!0),r.version!==0||(r.channels=e[11],r.channelMode=ce[r.channels-1]||"application defined",r.sampleRate=a.getUint32(12,!0),r.bitrateMaximum=a.getInt32(16,!0),r.bitrateNominal=a.getInt32(20,!0),r.bitrateMinimum=a.getInt32(24,!0),r.blocksize1=Te[(e[28]&240)>>4],r.blocksize0=Te[e[28]&15],r.blocksize0>r.blocksize1)||e[29]!==1)return null;r.bitDepth=32;{let{length:c,data:h,version:m,...f}=r;i.setHeader(s,r,f)}return new A(r)}constructor(e){super(e),this.bitrateMaximum=e.bitrateMaximum,this.bitrateMinimum=e.bitrateMinimum,this.bitrateNominal=e.bitrateNominal,this.blocksize0=e.blocksize0,this.blocksize1=e.blocksize1,this.data=e.data,this.vorbisComments=null,this.vorbisSetup=null}};var de=class extends y{constructor(e,i){super(e,i),this.Frame=te,this._identificationHeader=null,this._mode={count:0},this._prevBlockSize=0,this._currBlockSize=0}get codec(){return"vorbis"}parseOggPage(e){let i=g.get(e).segments;return e.pageSequenceNumber===0?(this._headerCache.enable(),this._identificationHeader=e.data):e.pageSequenceNumber===1?i[1]&&(this._vorbisComments=i[0],this._vorbisSetup=i[1],this._mode=this._parseSetupHeader(i[1])):e.codecFrames=i.map(s=>{let t=A.getHeaderFromUint8Array(this._identificationHeader,this._headerCache);if(t)return t.vorbisComments=this._vorbisComments,t.vorbisSetup=this._vorbisSetup,new te(s,t,this._getSamples(s,t));this._codecParser.logError("Failed to parse Ogg Vorbis Header","Not a valid Ogg Vorbis file")}),e}_getSamples(e,i){let s=e[0]>>1,t=this._mode[s&this._mode.mask];t&&(this._prevBlockSize=s&this._mode.prevMask?i.blocksize1:i.blocksize0),this._currBlockSize=t?i.blocksize1:i.blocksize0;let r=this._prevBlockSize+this._currBlockSize>>2;return this._prevBlockSize=this._currBlockSize,r}_parseSetupHeader(e){let i=new fe(e),s="Failed to read Vorbis stream",t=", failed to parse vorbis modes",r={count:0};for(;(i.read(1)&1)!==1;);let a;for(;r.count<64&&i.position>0;){let c=ie(i.read(8));if(c in r&&!(r.count===1&&c===0))throw this._codecParser.logError("received duplicate mode mapping"+t),new Error(s);let h=0;for(;i.read(8)===0&&h++<3;);if(h===4)a=i.read(7),r[c]=a&1,i.position+=6,r.count++;else{if(((ie(a)&126)>>1)+1!==r.count)throw this._codecParser.logError("mode count did not match actual modes"+t),new Error(s);break}}return r.mask=(1<<Math.log2(r.count))-1,r.prevMask=(r.mask|1)+1,r}};var pe=class extends y{constructor(e,i,s){super(e,i),this._onCodec=s,this.Frame=V,this.Header=P,this._codec=null,this._continuedPacket=new Uint8Array,this._pageSequenceNumber=0}get codec(){return this._codec||""}_updateCodec(e,i){this._codec!==e&&(this._parser=new i(this._codecParser,this._headerCache),this._codec=e,this._onCodec(e))}_checkForIdentifier({data:e}){let i=x(e.subarray(0,8));switch(i){case"fishead\0":case"fisbone\0":case"index\0\0\0":return!1;case"OpusHead":return this._updateCodec("opus",me),!0;case(/^\x7fFLAC/.test(i)&&i):return this._updateCodec("flac",q),!0;case(/^\x01vorbis/.test(i)&&i):return this._updateCodec("vorbis",de),!0}}_checkPageSequenceNumber(e){e.pageSequenceNumber!==this._pageSequenceNumber+1&&this._pageSequenceNumber>1&&e.pageSequenceNumber>1&&this._codecParser.logWarning("Unexpected gap in Ogg Page Sequence Number.",`Expected: ${this._pageSequenceNumber+1}, Got: ${e.pageSequenceNumber}`),this._pageSequenceNumber=e.pageSequenceNumber}*parseFrame(){let e=yield*this.fixedLengthFrameSync(!0);this._checkPageSequenceNumber(e);let i=g.get(e),{pageSegmentBytes:s,pageSegmentTable:t}=b.get(i.header),r=0;if(i.segments=t.map(a=>e.data.subarray(r,r+=a)),s[s.length-1]===255?this._continuedPacket=se(this._continuedPacket,i.segments.pop()):this._continuedPacket.length&&(i.segments[0]=se(this._continuedPacket,i.segments[0]),this._continuedPacket=new Uint8Array),this._codec||this._checkForIdentifier(e)){let a=this._parser.parseOggPage(e);return this._codecParser.mapFrameStats(a),a}}};var ot=()=>{},ue=class{constructor(e,{onCodecUpdate:i,onCodec:s,enableLogging:t=!1,enableFrameCRC32:r=!0}={}){this._inputMimeType=e,this._onCodec=s||ot,this._onCodecUpdate=i,this._enableLogging=t,this._crc32=r?Ge:ot,this._generator=this._getGenerator(),this._generator.next()}get codec(){return this._parser.codec}*flush(){this._flushing=!0;for(let e=this._generator.next();e.value;e=this._generator.next())yield e.value;this._flushing=!1,this._generator=this._getGenerator(),this._generator.next()}*parseChunk(e){for(let i=this._generator.next(e);i.value;i=this._generator.next())yield i.value}parseAll(e){return[...this.parseChunk(e),...this.flush()]}*_getGenerator(){if(this._headerCache=new ne(this._onCodecUpdate),this._inputMimeType.match(/aac/))this._parser=new he(this,this._headerCache,this._onCodec);else if(this._inputMimeType.match(/mpeg/))this._parser=new le(this,this._headerCache,this._onCodec);else if(this._inputMimeType.match(/flac/))this._parser=new q(this,this._headerCache,this._onCodec);else if(this._inputMimeType.match(/ogg/))this._parser=new pe(this,this._headerCache,this._onCodec);else throw new Error(`Unsupported Codec ${mimeType}`);for(this._frameNumber=0,this._currentReadPosition=0,this._totalBytesIn=0,this._totalBytesOut=0,this._totalSamples=0,this._sampleRate=void 0,this._rawData=new Uint8Array(0);;){let e=yield*this._parser.parseFrame();e&&(yield e)}}*readRawData(e=0,i=0){let s;for(;this._rawData.length<=e+i;){if(s=yield,this._flushing)return this._rawData.subarray(i);s&&(this._totalBytesIn+=s.length,this._rawData=se(this._rawData,s))}return this._rawData.subarray(i)}incrementRawData(e){this._currentReadPosition+=e,this._rawData=this._rawData.subarray(e)}mapCodecFrameStats(e){this._sampleRate=e.header.sampleRate,e.header.bitrate=Math.round(e.data.length/e.duration)*8,e.frameNumber=this._frameNumber++,e.totalBytesOut=this._totalBytesOut,e.totalSamples=this._totalSamples,e.totalDuration=this._totalSamples/this._sampleRate*1e3,e.crc32=this._crc32(e.data),this._headerCache.checkCodecUpdate(e.header.bitrate,e.totalDuration),this._totalBytesOut+=e.data.length,this._totalSamples+=e.samples}mapFrameStats(e){e.codecFrames?(e.codecFrames.forEach(i=>{e.duration+=i.duration,e.samples+=i.samples,this.mapCodecFrameStats(i)}),e.totalSamples=this._totalSamples,e.totalDuration=this._totalSamples/this._sampleRate*1e3||0,e.totalBytesOut=this._totalBytesOut):this.mapCodecFrameStats(e)}_log(e,i){if(this._enableLogging){let s=[`codec:         ${this.codec}`,`inputMimeType: ${this._inputMimeType}`,`readPosition:  ${this._currentReadPosition}`,`totalBytesIn:  ${this._totalBytesIn}`,`totalBytesOut: ${this._totalBytesOut}`],t=Math.max(...s.map(r=>r.length));i.push(`--stats--${"-".repeat(t-9)}`,...s,"-".repeat(t)),e("codec-parser",i.reduce((r,a)=>r+`
  `+a,""))}}logWarning(...e){this._log(console.warn,e)}logError(...e){this._log(console.error,e)}};var Fr=ue;export{Fr as a};
//# sourceMappingURL=chunk-6T6HPD5B.js.map