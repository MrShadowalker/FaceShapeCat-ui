var pe=Object.defineProperty,me=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var D=Math.pow,q=(r,e,t)=>e in r?pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,x=(r,e)=>{for(var t in e||(e={}))Me.call(e,t)&&q(r,t,e[t]);if(G)for(var t of G(e))ye.call(e,t)&&q(r,t,e[t]);return r},A=(r,e)=>me(r,be(e));import{_ as ke,y as Se}from"./jeecg-online-vendor-f57c6456.js";import{d as xe,f as ve,e as Ee,u as F,h as we,a4 as os,a5 as cs,Y as Ae,a6 as V,a7 as Te,aj as j,ab as De,ae as Ce,aq as Ie,aa as Re,a9 as Pe,Q as Le,ah as je,ai as _e,Z as Ne,ac as B}from"./tinymce-vendor-3c2b3d6e.js";import{j as Oe}from"./antd-vue-vendor-05bfa84d.js";import{p as _,k as Ue}from"./index-37448b2d.js";const U=(r,e)=>r.push.apply(r,e),C=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),H=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var $e={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const Z=2050,X=1e3,We=$e,ze=10,Ye=1e4,se=10,ne=50,re=20,ae=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Ge=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,qe=/^[A-Z\xbf-\xdf]+$/,ie=/^[^a-z\xdf-\xff]+$/,Fe=/^[a-z\xdf-\xff]+$/,Ve=/^[^A-Z\xbf-\xdf]+$/,Be=/[a-z\xdf-\xff]/,He=/[A-Z\xbf-\xdf]/,Ze=/[^A-Za-z\xbf-\xdf]/gi,Xe=/^\d+$/,W=new Date().getFullYear(),Ke={recentYear:/19\d\d|200\d|201\d|202\d/g},oe=[" ",",",";",":","|","/","\\","_",".","-"],Qe=oe.length;class Je{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return C(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-W);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const o=e.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],l=o.length;if(We[l].forEach(([f,p])=>{const m=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,f),10),parseInt(o.slice(f,p),10),parseInt(o.slice(p),10)]);m!=null&&c.push(m)}),c.length>0){let f=c[0],p=n(c[0]);c.slice(1).forEach(m=>{const d=n(m);d<p&&(f=m,p=d)}),t.push({pattern:"date",token:o,i:a,j:i,separator:"",year:f.year,month:f.month,day:f.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const o=e[a];if(o>99&&o<X||o>Z)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(X<=a&&a<=Z){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const w=new Uint32Array(65536),et=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,o=t,c=t;for(;c--;)w[r.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let l=w[e.charCodeAt(c)];const h=l|i;l|=(l&a)+a^a,i|=~(l|a),a&=l,i&n&&o++,a&n&&o--,i=i<<1|1,a=a<<1|~(h|i),i&=h}for(c=t;c--;)w[r.charCodeAt(c)]=0;return o},tt=(r,e)=>{const t=e.length,s=r.length,n=[],a=[],i=Math.ceil(t/32),o=Math.ceil(s/32);for(let d=0;d<i;d++)a[d]=-1,n[d]=0;let c=0;for(;c<o-1;c++){let d=0,b=-1;const v=c*32,y=Math.min(32,s)+v;for(let g=v;g<y;g++)w[r.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const S=w[e.charCodeAt(g)],k=a[g/32|0]>>>g&1,E=n[g/32|0]>>>g&1,z=S|d,Y=((S|E)&b)+b^b|S|E;let I=d|~(Y|b),P=b&Y;I>>>31^k&&(a[g/32|0]^=1<<g),P>>>31^E&&(n[g/32|0]^=1<<g),I=I<<1|k,P=P<<1|E,b=P|~(z|I),d=I&z}for(let g=v;g<y;g++)w[r.charCodeAt(g)]=0}let l=0,h=-1;const f=c*32,p=Math.min(32,s-f)+f;for(let d=f;d<p;d++)w[r.charCodeAt(d)]|=1<<d;let m=s;for(let d=0;d<t;d++){const b=w[e.charCodeAt(d)],v=a[d/32|0]>>>d&1,y=n[d/32|0]>>>d&1,g=b|l,S=((b|y)&h)+h^h|b|y;let k=l|~(S|h),E=h&S;m+=k>>>s-1&1,m-=E>>>s-1&1,k>>>31^v&&(a[d/32|0]^=1<<d),E>>>31^y&&(n[d/32|0]^=1<<d),k=k<<1|v,E=E<<1|y,h=E|~(g|k),l=k&g}for(let d=f;d<p;d++)w[r.charCodeAt(d)]=0;return m},st=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?et(r,e):tt(r,e)};const nt=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},rt=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=nt(r,a,t);if(Math.abs(r.length-a.length)>i)return!1;const o=st(r,a),c=o<=i;return c&&(s=o),c});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var K={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},N={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class R{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new R([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<e.length;a+=1){const i=e.charAt(a);n.hasChild(i)||n.addChild(i),n=n.getChild(i)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new R([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var Q=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class at{constructor(){this.matchers={},this.l33tTable=K,this.trieNodeRoot=Q(K,new R),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=N,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=Q(e.l33tTable,new R)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(N).forEach(s=>{if(s in e){const n=s;Object.keys(N[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=H(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),H(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}}const u=new at;class it{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>A(x({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class ot{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const a=this.substr.charAt(n);if(s=s.getChild(a),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:a,lastSubLetter:i,consecutiveSubCount:o}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:a});return}const c=[...this.getAllPossibleSubsAtIndex(s)];let l=!1;for(let h=s+c.length-1;h>=s;h-=1){const f=c[h-s];if(f.isTerminal()){if(i===f.parents.join("")&&o>=3)continue;l=!0;const p=f.subs;for(const m of p){this.buffer.push(m);const d=a.concat({i:n,letter:m,substitution:f.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:h+1,subIndex:n+m.length,changes:d,lastSubLetter:f.parents.join(""),consecutiveSubCount:i===f.parents.join("")?o+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!l){const h=this.substr.charAt(s);this.buffer.push(h),this.helper({onlyFullSub:e,isFullSub:t&&!l,index:s+1,subIndex:n+1,changes:a,lastSubLetter:i,consecutiveSubCount:o}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const ct=(r,e,t)=>new ot({substr:r,limit:e,trieRoot:t}).getAll(),lt=(r,e,t)=>{const n=r.changes.filter(l=>l.i<e).reduce((l,h)=>l-h.letter.length+h.substitution.length,e),a=r.changes.filter(l=>l.i>=e&&l.i<=t),i=a.reduce((l,h)=>l-h.letter.length+h.substitution.length,t-e+n),o=[],c=[];return a.forEach(l=>{o.findIndex(f=>f.letter===l.letter&&f.substitution===l.substitution)<0&&(o.push({letter:l.letter,substitution:l.substitution}),c.push(`${l.substitution} -> ${l.letter}`))}),{i:n,j:i,subs:o,subDisplay:c.join(", ")}};class ht{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===t[n]))}match({password:e}){const t=[],s=ct(e,u.l33tMaxSubstitutions,u.trieNodeRoot);let n=!1,a=!0;return s.forEach(i=>{if(n)return;const o=this.defaultMatch({password:i.password,useLevenshtein:a});a=!1,o.forEach(c=>{n||(n=c.i===0&&c.j===e.length-1);const l=lt(i,c.i,c.j),h=e.slice(l.i,+l.j+1||9e9),f=x(A(x({},c),{l33t:!0,token:h}),l),p=this.isAlreadyIncluded(t,f);h.toLowerCase()!==c.matchedWord&&!p&&t.push(f)})}),t.filter(i=>i.token.length>1)}}class ut{constructor(){this.l33t=new ht(this.defaultMatch),this.reverse=new it(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return C(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,a=e.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(i=>{const o=u.rankedDictionaries[i],c=u.rankedDictionariesMaxWordSize[i],l=Math.min(c,n);for(let h=0;h<n;h+=1){const f=Math.min(h+l,n);for(let p=h;p<f;p+=1){const m=a.slice(h,+p+1||9e9),d=m in o;let b={};const v=h===0&&p===n-1;u.useLevenshteinDistance&&v&&!d&&t&&(b=rt(m,o,u.levenshteinThreshold));const y=Object.keys(b).length!==0;if(d||y){const g=y?b.levenshteinDistanceEntry:m,S=o[g];s.push(x({pattern:"dictionary",i:h,j:p,token:e.slice(h,+p+1||9e9),matchedWord:m,rank:S,dictionaryName:i,reversed:!1,l33t:!1},b))}}}}),s}}class dt{match({password:e,regexes:t=Ke}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;let i;for(;i=a.exec(e);)if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),C(s)}}var T={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},ft=({token:r})=>{let e=D(ze,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=se+1:t=ne+1,Math.max(e,t)},gt=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-W),re)*365;return e&&(s*=4),s};const pt=r=>{const e=r.split(""),t=e.filter(i=>i.match(He)).length,s=e.filter(i=>i.match(Be)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=T.nCk(t+s,i);return n};var mt=r=>{const e=r.replace(Ze,"");if(e.match(Ve)||e.toLowerCase()===e)return 1;const t=[ae,Ge,ie],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return pt(e)};const J=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},bt=({sub:r,token:e})=>{const t=e.toLowerCase(),s=J(t,r.substitution),n=J(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var Mt=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:a,unsubbedCount:i}=bt({sub:n,token:t});if(a===0||i===0)s*=2;else{const o=Math.min(i,a);let c=0;for(let l=1;l<=o;l+=1)c+=T.nCk(i+a,l);s*=c}}),s},yt=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:a})=>{const i=r,o=mt(n),c=Mt({l33t:t,subs:s,token:n}),l=e&&2||1;let h;return a==="diceware"?h=D(6,5)/2:h=i*o*c*l,{baseGuesses:i,uppercaseVariations:o,l33tVariations:c,calculation:h}},kt=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return D(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-W),re)}return 0},St=({baseGuesses:r,repeatCount:e})=>r*e,xt=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const vt=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},Et=({token:r,graph:e,turns:t})=>{const s=Object.keys(u.graphs[e]).length,n=vt(u.graphs[e]);let a=0;const i=r.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let l=1;l<=c;l+=1)a+=T.nCk(o-1,l-1)*s*D(n,l)}return a};var wt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=Et({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(t,a);o+=1)i+=T.nCk(t+a,o);n*=i}}return Math.round(n)},At=()=>Qe;const Tt=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=se:t=ne),t},ee={bruteforce:ft,date:gt,dictionary:yt,regex:kt,repeat:St,sequence:xt,spatial:wt,separator:At},Dt=(r,e)=>ee[r]?ee[r](e):u.matchers[r]&&"scoring"in u.matchers[r]?u.matchers[r].scoring(e):0;var Ct=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=Tt(r,e),n=Dt(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return A(x(x({},r),t),{guesses:i,guessesLog10:T.log10(i)})};const M={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=Ct(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=T.factorial(e)*n;this.excludeAdditive||(a+=D(Ye,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<n&&(s=parseInt(i,10),n=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var $={mostGuessableMatchSequence(r,e,t=!1){M.password=r,M.excludeAdditive=t;const s=r.length;let n=M.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((l,h)=>l.i-h.i)),M.optimal={m:M.fillArray(s,"object"),pi:M.fillArray(s,"object"),g:M.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(l=>{l.i>0?Object.keys(M.optimal.m[l.i-1]).forEach(h=>{M.update(l,parseInt(h,10)+1)}):M.update(l,1)}),M.bruteforceUpdate(c);const a=M.unwind(s),i=a.length,o=this.getGuesses(r,i);return{password:r,guesses:o,guessesLog10:T.log10(o),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=M.optimal.g[t-1][e],s}};class It{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(i==null)break;const{match:c,baseToken:l}=this.setMatchToken(i,o);if(c){const h=c.index+c[0].length-1,f=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,h,c,f)),n=h+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>A(x({},a),{baseGuesses:i})):A(x({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>$.mostGuessableMatchSequence(e,a).guesses):$.mostGuessableMatchSequence(e,s).guesses}}class Rt{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(o);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Fe.test(e)?(t="lower",s=26):qe.test(e)?(t="upper",s=26):Xe.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class Pt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];U(t,this.helper(e,n,s))}),C(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,l=null,h=0;for(n=this.checkIfShifted(s,e,i);;){const f=e.charAt(c-1),p=t[f]||[];let m=!1,d=-1,b=-1;if(c<o){const v=e.charAt(c),y=p.length;for(let g=0;g<y;g+=1){const S=p[g];if(b+=1,S){const k=S.indexOf(v);if(k!==-1){m=!0,d=b,k===1&&(n+=1),l!==d&&(h+=1,l=d);break}}}}if(m)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:h,shiftedCount:n}),i=c;break}}}return a}}const Lt=new RegExp(`[${oe.join("")}]`);class L{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>Lt.test(n)).reduce((n,a)=>{const i=n.get(a);return i?n.set(a,i+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[i,o])=>o-a);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=L.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=L.getSeparatorRegex(s);for(const a of e.matchAll(n)){if(a.index===void 0)continue;const i=a.index+1;t.push({pattern:"separator",token:s,i,j:i})}return t}}class jt{constructor(){this.matchers={date:Je,dictionary:ut,regex:dt,repeat:It,sequence:Rt,spatial:Pt,separator:L}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(a=>{if(!this.matchers[a]&&!u.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:u.matchers[a].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{U(t,l)}),s.push(c)):U(t,c)}),s.length>0?new Promise((a,i)=>{Promise.all(s).then(()=>{a(C(t))}).catch(o=>{i(o)})}):C(t)}}const ce=1,le=ce*60,he=le*60,ue=he*24,de=ue*31,fe=de*12,_t=fe*100,O={second:ce,minute:le,hour:he,day:ue,month:de,year:fe,century:_t};class Nt{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(O),a=n.findIndex(i=>e<O[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/O[t]):t="ltSecond"),this.translate(t,s)}}var Ot=()=>null,Ut=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const $t=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=u.translations.warnings.topTen:r.rank<=100?t=u.translations.warnings.topHundred:t=u.translations.warnings.common:r.guessesLog10<=4&&(t=u.translations.warnings.similarToCommon),t},Wt=(r,e)=>{let t=null;return e&&(t=u.translations.warnings.wordByItself),t},zt=(r,e)=>e?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames,Yt=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=$t(r,e):s.includes("wikipedia")?t=Wt(r,e):n?t=zt(r,e):s==="userInputs"&&(t=u.translations.warnings.userInputs),t};var Gt=(r,e)=>{const t=Yt(r,e),s=[],n=r.token;return n.match(ae)?s.push(u.translations.suggestions.capitalization):n.match(ie)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(u.translations.suggestions.reverseWords),r.l33t&&s.push(u.translations.suggestions.l33t),{warning:t,suggestions:s}},qt=r=>r.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Ft=r=>{let e=u.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=u.translations.warnings.simpleRepeat),{warning:e,suggestions:[u.translations.suggestions.repeated]}},Vt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),Bt=r=>{let e=u.translations.warnings.keyPattern;return r.turns===1&&(e=u.translations.warnings.straightRow),{warning:e,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},Ht=()=>null;const te={warning:null,suggestions:[]};class Zt{constructor(){this.matchers={bruteforce:Ot,date:Ut,dictionary:Gt,regex:qt,repeat:Ft,sequence:Vt,spatial:Bt,separator:Ht},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return te;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):u.matchers[e.pattern]&&"feedback"in u.matchers[e.pattern]?u.matchers[e.pattern].feedback(e,t):te}}const ge=()=>new Date().getTime(),Xt=(r,e,t)=>{const s=new Zt,n=new Nt,a=$.mostGuessableMatchSequence(e,r),i=ge()-t,o=n.estimateAttackTimes(a.guesses);return A(x(x({calcTime:i},a),o),{feedback:s.getFeedback(o.score,a.sequence)})},Kt=(r,e)=>(e&&u.extendUserInputsDictionary(e),new jt().match(r)),Qt=(r,e)=>{const t=ge(),s=Kt(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Xt(s,r,t)};const Jt=xe({name:"StrengthMeter",components:{InputPassword:Oe.Password},props:{value:_.string,showInput:_.bool.def(!0),disabled:_.bool},emits:["score-change","change"],setup(r,{emit:e}){const t=ve(""),{prefixCls:s}=Ue("strength-meter"),n=Ee(()=>{const{disabled:i}=r;if(i)return-1;const c=F(t)?Qt(F(t)).score:-1;return e("score-change",c),c});function a(i){t.value=i.target.value,e("change",i.target.value)}return we(()=>{t.value=r.value||""}),{getPasswordStrength:n,handleChange:a,prefixCls:s,innerValueRef:t}}});const es=["data-score"];function ts(r,e,t,s,n,a){const i=Ae("InputPassword");return V(),Te("div",{class:j([r.prefixCls,"relative"])},[r.showInput?(V(),De(i,Ce({key:0},r.$attrs,{allowClear:"",value:r.innerValueRef,onChange:r.handleChange,disabled:r.disabled}),Ie({_:2},[Re(Object.keys(r.$slots),o=>({name:o,fn:Pe(c=>[Le(r.$slots,o,je(_e(c||{})),void 0,!0)])}))]),1040,["value","onChange","disabled"])):Ne("",!0),B("div",{class:j(`${r.prefixCls}-bar`)},[B("div",{class:j(`${r.prefixCls}-bar--fill`),"data-score":r.getPasswordStrength},null,10,es)],2)],2)}const ss=ke(Jt,[["render",ts],["__scopeId","data-v-06316133"]]),us=Se(ss);export{us as S};
