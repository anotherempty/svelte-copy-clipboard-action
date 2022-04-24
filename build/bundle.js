var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let l=a?()=>window.performance.now():()=>Date.now(),c=a?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&c(d)}function p(t,e){t.appendChild(e)}function f(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function h(t){const e=x("style");return function(t,e){p(t.head||t,e)}(f(t),e),e.sheet}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}const P=new Map;let _,S=0;function C(t,e,n,o,r,i,s,a=0){const l=16.666/o;let c="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*i(t);c+=100*t+`%{${s(o,1-o)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,p=f(t),{stylesheet:g,rules:m}=P.get(p)||function(t,e){const n={stylesheet:h(e),rules:{}};return P.set(t,n),n}(p,t);m[d]||(m[d]=!0,g.insertRule(`@keyframes ${d} ${u}`,g.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${d} ${o}ms linear ${r}ms 1 both`,S+=1,d}function Z(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||c((()=>{S||(P.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),P.clear())})))}function L(t){_=t}const R=[],O=[],j=[],F=[],E=Promise.resolve();let Q=!1;function q(t){j.push(t)}const A=new Set;let D,T=0;function U(){const t=_;do{for(;T<R.length;){const t=R[T];T++,L(t),X(t.$$)}for(L(null),R.length=0,T=0;O.length;)O.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];A.has(e)||(A.add(e),e())}j.length=0}while(R.length);for(;F.length;)F.pop()();Q=!1,A.clear(),L(t)}function X(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function z(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const M=new Set;let W;function G(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),W.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const B={duration:0};function H(n,o,s,a){let p=o(n,s),f=a?0:1,h=null,g=null,m=null;function x(){m&&Z(n,m)}function b(t,e){const n=t.b-f;return e*=Math.abs(n),{a:f,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(o){const{delay:i=0,duration:s=300,easing:a=e,tick:w=t,css:y}=p||B,v={start:l()+i,b:o};o||(v.group=W,W.r+=1),h||g?g=v:(y&&(x(),m=C(n,f,o,s,i,a,y)),o&&w(0,1),h=b(v,s),q((()=>z(n,o,"start"))),function(t){let e;0===u.size&&c(d),new Promise((n=>{u.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(h=b(g,s),g=null,z(n,h.b,"start"),y&&(x(),m=C(n,f,h.b,h.duration,0,a,p.css))),h)if(t>=h.end)w(f=h.b,1-f),z(n,h.b,"end"),g||(h.b?x():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;f=h.a+h.d*a(e/h.duration),w(f,1-f)}return!(!h&&!g)})))}return{run(t){i(p)?(D||(D=Promise.resolve(),D.then((()=>{D=null}))),D).then((()=>{p=p(),w(t)})):w(t)},end(){x(),h=g=null}}}function K(t,e){-1===t.$$.dirty[0]&&(R.push(t),Q||(Q=!0,E.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,s,a,l,c,u,d,p=[-1]){const f=_;L(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:o(),dirty:p,skip_bound:!1,root:s.target||f.$$.root};d&&d(h.root);let g=!1;if(h.ctx=a?a(e,s.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),g&&K(e,t)),n})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();s.intro&&G(e.$$.fragment),function(t,e,o,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,o),s||q((()=>{const e=l.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(q)}(e,s.target,s.anchor,s.customElement),U()}L(f)}function V(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function J(t){const e=t-1;return e*e*e+1}function N(t,{delay:e=0,duration:n=400,easing:o=J}={}){const r=getComputedStyle(t),i=+r.opacity,s=parseFloat(r.height),a=parseFloat(r.paddingTop),l=parseFloat(r.paddingBottom),c=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),p=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*i};height: ${t*s}px;padding-top: ${t*a}px;padding-bottom: ${t*l}px;margin-top: ${t*c}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*p}px;`}}function $(t,{trigger:e="click",text:n=""}={}){const o=async e=>{await navigator.clipboard.writeText(n).then((()=>t.dispatchEvent(new CustomEvent("copied",{detail:{clipboard:n}}))),(e=>t.dispatchEvent(new CustomEvent("error",{detail:{error:e}}))))};return t.addEventListener(e,o,!0),{update:t=>{void 0!==t.trigger&&(e=t.trigger),void 0!==t.text&&(n=t.text)},destroy(){t.removeEventListener(e,o,!0)}}}function tt(t){let e,n,o,r,i;return{c(){e=x("button"),e.innerHTML='<i class="icon-paste pr-2"></i>Paste it in a new tab',v(e,"class","px-4 py-2 mt-2 rounded-full border-0 text-white bg-orange-600")},m(n,s){g(n,e,s),o=!0,r||(i=y(e,"click",t[6]),r=!0)},p(e,n){t=e},i(t){o||(q((()=>{n||(n=H(e,N,{duration:225,easing:V},!0)),n.run(1)})),o=!0)},o(t){n||(n=H(e,N,{duration:225,easing:V},!1)),n.run(0),o=!1},d(t){t&&m(e),t&&n&&n.end(),r=!1,i()}}}function et(e){let n,o,s,a,l,c,u,d,f,h,P,_,S,C,Z,L,R,O,j,F,E=e[1]&&tt(e);return{c(){n=x("main"),o=x("h1"),o.textContent="Svelte Copy Clipboard Action",s=w(),a=x("h4"),a.innerHTML='A <a href="https://svelte.dev" class="text-orange-600 visited:text-orange-600">Svelte</a> action to easily copy to the clipboard',l=w(),c=x("ul"),c.innerHTML='<li><a class="inline-block pr-6 pl-4 py-2 rounded-full text-white visited:text-slate-400 hover:bg-black hover:no-underline bg-dark-3" href="https://github.com/anotherempty/svelte-copy-clipboard-action.git"><i class="icon-github-circled mr-2 text-lg"></i>See on Github</a></li>',u=w(),d=x("div"),f=x("div"),h=x("input"),P=w(),_=x("button"),S=x("i"),C=b("Copy to clipboard"),R=w(),E&&E.c(),v(o,"class","text-4xl md:p-4 text-slate-500 font-extrabold"),v(a,"class","text-xl mb-4 text-slate-400"),v(c,"class","mb-10"),v(h,"type","text"),v(h,"class","p-3 flex-grow truncate bg-dark-4 border-0 focus:outline-none rounded-tl-lg text-slate-300 rounded-bl-lg"),h.readOnly=!0,h.value=e[0],v(S,"class","icon-docs pr-2"),v(_,"class",Z="pr-4 pl-2 "+(e[1]?"bg-dark-3":"bg-orange-600")+" text-white outline-none border-0 appearance-none rounded-lg"),v(f,"class","flex rounded-lg bg-dark-4 overflow-hidden"),v(d,"class","px-6 py-12 bg-dark-2 rounded-xl"),k(n,"max-width","968px"),k(n,"margin","0 auto"),v(n,"class","w-full text-center relative")},m(r,m){var x;g(r,n,m),p(n,o),p(n,s),p(n,a),p(n,l),p(n,c),p(n,u),p(n,d),p(d,f),p(f,h),p(f,P),p(f,_),p(_,S),p(_,C),p(d,R),E&&E.m(d,null),O=!0,j||(F=[(x=L=$.call(null,_,{text:e[0]}),x&&i(x.destroy)?x.destroy:t),y(_,"copied",e[4]),y(_,"error",e[5])],j=!0)},p(t,[e]){(!O||1&e&&h.value!==t[0])&&(h.value=t[0]),(!O||2&e&&Z!==(Z="pr-4 pl-2 "+(t[1]?"bg-dark-3":"bg-orange-600")+" text-white outline-none border-0 appearance-none rounded-lg"))&&v(_,"class",Z),L&&i(L.update)&&1&e&&L.update.call(null,{text:t[0]}),t[1]?E?(E.p(t,e),2&e&&G(E,1)):(E=tt(t),E.c(),G(E,1),E.m(d,null)):E&&(W={r:0,c:[],p:W},Y(E,1,1,(()=>{E=null})),W.r||r(W.c),W=W.p)},i(t){O||(G(E),O=!0)},o(t){Y(E),O=!1},d(t){t&&m(n),E&&E.d(),j=!1,r(F)}}}function nt(t,e,n){let o,r=["http://www.reallylong.link/rll/xiHHHPHC9bi5TV0sSl_4Mu/UaqNOpSsb9g3e4F041u5rTPC1k3O4fg4wrByhMwSRZrktY9yaU/a6UNbEjlhJFrIOyCcd7gTk/E6ugN6v463R_iWPgeneZNWp2jUepwmmgr2V1nzqKYGfrNvWoKy95LIXJ2IBgIdBGdyLph/E293R9qYVMZd61_wm9LcUp_lV8XkFKHfLuZKfvTnL2/3AWJUCPPm9k7P/4RfhVDM2MqPqQdos2taM8QPVLSeRS2yKU7Tayzf3PK5PBtDFDQl5JqGkC0xmL1I59muBLJbpI9FrEbYbbZUnjEFZsjldXpNPRTjDcn4QK1ukTrtRmdtNmpMvuxaD4wzqpryXq4r4T/PQIDDqXnkiiG/fyC3xUmAtL4csiPHprSQ2gAXzTHjIZm_EVdAwk8sJTOyyjSkPNUYvbinQu606y5eTHxMhc47XSgER9JqSAe5lfxwVqPiEBjWoGY_OZnY6rNDjDJH3VrjMd7CQpSPvQRLWJ5Lvy2CnCFRSh38KLjiQuwh2mA9eJKpCtEFj5DGxslzYS_cQ2SwEXpgoL0gZPjS1u7F0r9wZOXqY65VNabqguXrbUwA8iqU3Wf1CTN/HluAuvZZ8F/lHrLk3DoUX4ICqWwGhZrfxTj_hRSZmYtIAZiEWdaug6a5hEjdXWf9uQ0GkabqlHBy_lF2tcMDWyC2vFwHJAYNdDnsN/DhJQOgs_83C5W3xf5D266et2nGS/bmUoSg8ImjRIAPchaM2sv0IZOwHE/_Pq3cIVhoFCVf1mWBVGA9ScKUfASEQF4ZTRIzJzUPgowDWxYL2nJq5AbkpvMMTw/jlIXASy2SiKKEbXCjunkztM_0fIdczLLVbuBOv9Hlaj6p9Nv/IMbTiz7zDjUJB6JVxVDpZdoPgE9owVeTz1DxBk1VC51hvF0Aw54TeZ8eEAVHlAGNZxIceRune1i1JhAKByCX7MCTTC8gMs/uoBxWiCXpw2QOrUNqWhRn0X4fqcRQJLOpxjHh87o64ORBRCGJhER6LcmWwSM110LSndS_VUZnaJcVkrIoJ9LDNpKu4OBfSyhJ9GDT0csSHhCeKxtyXOqRe3c9HZtzg6kkcB7XCnJej_LOj3LzICPGIGTW6_3/qUNDirm_oy7y3osq48S8sSB3hIRkWmVYUqxeG5LZp3aeRmP3ep9XNPWohaYpG3BaygIlFsJ_g2SF9rDOjMcWQdfYNczh652u4exOFv83JPgfxIpVIolGo_3R5kcfUs/_tmk2CwerrDEtpmOopOOJLG0f5Q/bvOpzHSAaegT6s3NwI0n0zOul3qIzRPmty/8CZetPaAI_kmZr26_jSMBLjuNK6Ru0fX2XKkZnyPhKP5C6Abr6Q6YdB77Ih2ItSDFBUJn0jVh/9u8PkLRvmWIwUwXbQ_DOfAwrpoBNhclUT8HLiHpyfre83NCiP9BbasQ8GWlPNpstdTBTXIhmBsQFpP3z7FdofW8fstbg2/VSJHoL2stlT1TxPa/cgliJMp_O4qnvRxaQIQaLz8EJ3k/7E18h99e6GJtXwhirrOzi8Dw2MLmI6ky2Y4CAFCvkZXDFPtYKYQg1n9h_LHDsalJyBxbu4ldnsvo6HFdyJAf72lKhVQtTW7hvwi9uborEZA35YYHQOtrtKrPMnYGRh3MNhCqYr2elTZwKbSfe728ja55spF49s0ZXEJVUJ4K2UPRoUWmgNS/qXA0KRvnA6Tx2O6tFyP8lRA9vbYh7JD_ADOiSId9t6B3u8xpIwltxbWI1xQOXfY43Qv06ASRCTXW0qBqLMtsfzOXave6ExMM4cfOb0u97v5O0MwE29W2EJThWGppfykho2F5Ol7Oszv_6bbbFDZSc6oVM6/r87wQOjUsoYP1/k6aQpSAit1vX7eRejb/hN9KRsa0djP2JKPqcDM_kaiCeCUUkwWePPrzUdvCfARfwTiYrko1SC4Fk95XUxXtm","http://www.reallylong.link/rll/eY6KWslmev6A3yd2ZPTHDZJLPmcHgZc7O2/AxlWWVRLxBqQbUzgwRFpgJ1iGznTXyw/LfsvZtz7Pqzm6Q2RnchyT28xf0nw1fM0ALHMXnFG/Nv41D2X5RpRPalZs3jkWzYfFZsi0HAVC33/hThugGCruYEizJxQQkKSjEds5pv4gkGbB7bbRX5Z0Uk2N8mRL8kKyX1r/FFWeV1VLeVL2IxG5pZSZeqWfzX3x6dD0OE8zHcTt8bf6PRvZ0zBw8z7cHCOCo99skoyLiKX3P3PgKiDIj/jzm6szDFcArKd09egmkxIdf4FwwXWq5Y/ZCCHDTISvAuwsMkMKDpU/dO3GNEne_quzc/KCvrOTKELSKr82UkJodxO9EmEVd8n7hK_so9aaW4bHRO8viM266LiC9gdUGvaCVwXjG9gMEiwrr9r1xsy_imsRbMpR3RusvS5wgDXUxLIVCu6JQBaNoFcaQVtTYvIaHqSgrefDZ6qkiffPDWwxhZiQPEiI73adJXB5nQ4CFtXz3jLNCosjGc/PVUYJYeWJHeitkc0jJ17xU1vX_Xk_eHD/l/hzQi0kl7Ya3JoVSfK_VxcoHgIQ7k1mBDX_AErBb9yO7l89GgLsSfH7g4TTUQJcuAd8oViAsjonwpr/WLBCPg9OcB9Dudn7gYV/6zn8Z7B95COlRxxG96wqgHqQwTrsv4iuEWiqoxWG5bCsCPYz1_ZgY0vbtx6xDDpMk_4kmf6eCXp34etiXTeW60UCo8J94iBhAuFTo4BinEHup0YZOvfXOsuZMQoOASZgFXrsRPqNzvt8p40BkpQKKAH6kpxL7TQ5CTvywf_ziufcGNQDK46x3zyPYsYQMfRm5MnYCGNDo6oHL3B7Swt_MoMCg1qsgBTMUhHDFtzUFFe5EnQdVymukCzSLFC55LQm9Aa2INcqPkcCs1EgGv17xAFTxKXe1MIBsBek483NHfGjFOyh2t_SagwmDjRcHXJTHY6L6q6Ycvufub6yMQvwlM0NOzkWyq7no7z7okBfhqKavbzKHevRBZQITzram1vFm8oC7jiG4YFXTb8mGS80BmqF6yjEjdk1IpB3Ch4gSNeKXylLAWTYujPp9h2e7DvX60LZAFM9sROmQtQfDCaO6AgkOcmLcf49paMMs2uCSoEid4ZdjZR7OQ0pdn9HnVHNM8P5I1YmBaoL4dFdbtjk44dUM1dru5yUIW_iL6PPwQ9Kz0Lv0cmIKq2Dcuji7tid/AuzAOlehO93ThTq5FoPR9UNcHgAlXFfqdQ4oWwihmvEkmJKkkYmVFjw6Vh11fbjZMomdKbtiOzrAriEYzAibW1lxB7jqpW1UxflUBFkHKn7OHR3SadyBBnFnO0CGKGxcNuS_oQoGjlQSzYLU5mhKUq_G0MZOEU29hFwzcT3DRv116oXNrqA6aTdx3LV4hjM2bKXe9adQSUbxSIt_g8ZDCZY5tQf0pUw3HPyHGBb/bUaV27vDOvqSqU8W5HvMhojHaTr0WoOeND7GWIiwl7BS9ceZx9_GMwF6_c9C7DVwNgaWX8Xdxh6fGqYlIPsVIPu51Tg4ShRLRvGJtcElvdr0YIpgazoSJ/R3OQxCNBCVww9Dev1QTUN2fCjWGNpxwtxiFIsanw7UNi9GL_/u69vn4acR7DGs_ZtSFH9a1RmjterrRo7fkLQk6A60ENyb9Os0hwM6EHjsYdpzA_qeVphdbfemANGxsNG5pFUnRQVamMJREqKQY/s9XMirrzJoT180Us9aASiJh05EQg0aZLSQgHYXklxkmPwsHT8qVEAjXlWZwdLSunu6RzRGLMz/odjAv6OzjxeJ_Vw239PBcYrfAzO8ezjYiyk/Wn6kS_Rbf/CGXtr29UJzxVOxlffm9nvdiND1A_xU1K6/Ka3/JpERhX3ixuSs_O8HRBokLlW9GA2CEBHXZtecIx8SVLQszu21Gtm8soGxfUh8NM7F/os8NI","http://www.reallylong.link/rll/v4wAq32txF0_zZkjG3eyDbPrW9M8VTj7UBCbhKAF3YtKsZJyjvYhaiR5E0n2Pu5jBFXFkQm1J5qrLYx6cv7satMNssTW93zBl_05hTy7VY_Z9dBf/uS3Y_XXJ4troNpiGCUA44mPwccNEWGqoKimhNNednB0qXPKFWeYEaEVBnPDa8UC3wmqerkaE21iKnencZajeJFHp6of7dMWnOuRwvCFyDq5sodpoCK0Hiin2q0xrb0oyp71MyjhHfTJ/iRGrqxt21C_r_ujdJ99ctwJ1fDPuyp5qj_wVZ6OQ1zYZV9_hZCXEYeSrR/IeKrSgTxwbA5cZRlPyu53BM6XoEnxgP4J1PbUPBOcSB6kMs8_CyUgr9D0LxYDqQbJUDUX9YBGscL5e3f1tNuv/ZkaiYcNsazKhHKBhW96eG2TdjYWMU0jM49bKjpwzoAl4otbJdoL9o5ARFvgx/XlIZo9GmcebZvifTnDlKCSqcsukrZcBkLVuwUoN6HUOfIkgZhPFSJmpZdK2cqOHa_UDuXAMVKZSIDZFXUSpnlhR8aGO_2aexgPprRbT25phhOU7GcZteYVw5m3p1cLzo29watwL4k187PEBjLsKtlEJ8OL63lf93Pis3aXTzolApG8lfnUFOgDdxkQq9YCLhzZU5gqxncJTO0vvOzC07jbnIEkjgQJLe8e7d7Ew74vlSvOiYI30W3SyGzukArjKyOKUvZrhi6wdWbdzprQ74Rt0pGW34zrmlpR_4_yhlOBFBsm/S7xi1E73qQSFCW2Ntd7r7L55Y3JqYo/YM/ZUztHKajxVSoaBXrvwLLoLCWiJvPKp9Zr841xlVGrMoFbqJORrrx9Nu7SWP4Koxijut8gUUrb23E9wilFXsqcdIlXmpyyYglF4g28DomVUo_5iChir5aavpNjyy7By2S6KuLqtbSPRsvSGNIeSWDD6IDocpvHi9opawcGjLG8VTF6lJ8PZLqrVDdPPHr5G3m26uM4H4rQOOkHbJb6sm67vzItL7chsRenW937zhKqlQQ_cP3IqivZ2WcFeC2Y3Om_NY_AkDB6bfS/HgkHvwlu/9OkRsg4sIFXy8_ZLjKFnvDfbW9SNbhBUPpZT_pNpqimrZ8deg3ga5N3QNsKXp28jC/ka42F0WZNp6fPbtqPrevqTcnY/th4hGTRVed0IudS3ElrhQT3nSOIyKQ8S9wuUoN1zFXSA6x_l0mSVjEIeSR8jYydpqEBcjxOUTrgxPR8HzWxZ7axgN_mxlbixIv6eW29xJcWGHj/ePewxh_G0ygZvVsy4z0_wavWFy7VDtQ89q8c5jwDnIk0oMfy/Em769sDnZs6YUs3zDRAqmGSuuluLVVUd7v8rYft_nfkhid3IVSGG991p_UjEH1nj_usHudgnzIItafaVx47w3DE51/7hj4SfaQswnujE8UOzsXy/TgyMsnHa2Ires8A6gbostRrtEikrrbEC_VujE_6ARnsAmv5808ncQzVQj45XuAh6zC72wew7PWXN_oPvReG1o9Xr7wRLslqaZ5tuuK_Ui3dJftWXnqPq9G2ApE5GrphfQ0hYk4uKMZQBxZqLZ/UYwK3wYRPNzkFM3KnTKWknkKxu_g7GW/XiAGc2mLILI1F7Zy3VZb3iBJ2cT533WWm6azxZLoRC7Zyi9R6wrIs0VBX0oeoglZM/h0sn1iZKdYDQtfs0z9LOuy0zMQD0ochc4LLPLPcORuw2fB2MsPCRakZW_GhXkPcQV6QteFwQfMLdy3bk8Y4nvL9m9d0K9M2RFpjYH4Huec_APts9mhmVQmqxelxXp_UVil84bkjfbp7p1Li13OXY5ESJyk_SO6CU48nSTGoVZHAPFDy3pcpMdZDQBTwdHT77oDAxP7x5jIZQZQbSr6FeCZ1Wy7eCmmWRlT9OssacT3vYOxcR_JZB4AO8sI96Dk6u0P0UbkiPq5cNCJ6_0S6P10AHqeyHQD"];const i=()=>{let t=Math.floor(3*Math.random());n(0,o=r[t])};i();let s=!1;const a=t=>{n(1,s=!0)},l=t=>{n(1,s=!1),window.open(),i()};return[o,s,a,l,t=>a(),t=>console.log(t.detail.error),()=>l()]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),I(this,t,nt,et,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map