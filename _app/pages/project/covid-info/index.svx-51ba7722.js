import{S as D,i as T,s as J,W as z,e as v,t as $,k as j,c as g,a as I,h as y,d as u,m as w,b,g as S,F as p,Y as B,Z as F,_ as G,q as E,o as P,C as x,w as U,x as q,y as O,z as K,A as R,B as Y,U as V}from"../../../chunks/vendor-f73903c8.js";import{P as L}from"../../../chunks/project-8c4fc727.js";import"../../../chunks/stores-233b7d65.js";import"../../../chunks/github-0f711f6e.js";import"../../../chunks/Progress-59f48294.js";/* empty css                                      */function W(c){let e,a,n,i,t,s,d,_,f,m;const o=c[3].default,r=z(o,c,c[2],null);return{c(){e=v("section"),a=v("div"),n=v("span"),i=$("UPDATE"),t=j(),s=v("span"),d=$(c[0]),_=j(),f=v("div"),r&&r.c(),this.h()},l(l){e=g(l,"SECTION",{class:!0});var h=I(e);a=g(h,"DIV",{class:!0});var k=I(a);n=g(k,"SPAN",{class:!0});var A=I(n);i=y(A,"UPDATE"),A.forEach(u),t=w(k),s=g(k,"SPAN",{class:!0});var C=I(s);d=y(C,c[0]),C.forEach(u),k.forEach(u),_=w(h),f=g(h,"DIV",{class:!0});var N=I(f);r&&r.l(N),N.forEach(u),h.forEach(u),this.h()},h(){b(n,"class","update__title svelte-1t7np6d"),b(s,"class","update__date svelte-1t7np6d"),b(a,"class","update__header svelte-1t7np6d"),b(f,"class","update__content svelte-1t7np6d"),b(e,"class","update svelte-1t7np6d")},m(l,h){S(l,e,h),p(e,a),p(a,n),p(n,i),p(a,t),p(a,s),p(s,d),p(e,_),p(e,f),r&&r.m(f,null),m=!0},p(l,[h]){r&&r.p&&(!m||h&4)&&B(r,o,l,l[2],m?G(o,l[2],h,null):F(l[2]),null)},i(l){m||(E(r,l),m=!0)},o(l){P(r,l),m=!1},d(l){l&&u(e),r&&r.d(l)}}}function H(c,e,a){let{$$slots:n={},$$scope:i}=e,{date:t=""}=e;const d=new Date(t).toLocaleDateString("en-UK",{weekday:"short",year:"numeric",month:"long",day:"numeric"});return c.$$set=_=>{"date"in _&&a(1,t=_.date),"$$scope"in _&&a(2,i=_.$$scope)},[d,t,i,n]}class M extends D{constructor(e){super();T(this,e,H,W,J,{date:1})}}function Q(c){let e,a,n,i;return{c(){e=v("p"),a=$("I\u2019ve made a remake using NextJS. I didn\u2019t choose Svelte because I want to explore more stuff about NextJS and I\u2019ve done quite a bit of Svelte recently, so doing something different is nice. You can check it out "),n=v("a"),i=$("here"),this.h()},l(t){e=g(t,"P",{});var s=I(e);a=y(s,"I\u2019ve made a remake using NextJS. I didn\u2019t choose Svelte because I want to explore more stuff about NextJS and I\u2019ve done quite a bit of Svelte recently, so doing something different is nice. You can check it out "),n=g(s,"A",{href:!0,rel:!0});var d=I(n);i=y(d,"here"),d.forEach(u),s.forEach(u),this.h()},h(){b(n,"href","https://elianiva.my.id/project/covid-info-v2"),b(n,"rel","nofollow")},m(t,s){S(t,e,s),p(e,a),p(e,n),p(n,i)},d(t){t&&u(e)}}}function X(c){let e,a,n,i,t,s,d,_,f,m;return f=new M({props:{date:"2021-03-01",$$slots:{default:[Q]},$$scope:{ctx:c}}}),{c(){e=v("p"),a=v("strong"),n=$("Covid Info"),i=$(" is the first React app I made that uses a third party API as its data source. This app is also kinda buggy because when I made it, I don\u2019t really care about any other feature except the homepage that shows current covid data."),t=j(),s=v("p"),d=$("I\u2019m planning on remaking this if I got time for it using Svelte."),_=j(),U(f.$$.fragment)},l(o){e=g(o,"P",{});var r=I(e);a=g(r,"STRONG",{});var l=I(a);n=y(l,"Covid Info"),l.forEach(u),i=y(r," is the first React app I made that uses a third party API as its data source. This app is also kinda buggy because when I made it, I don\u2019t really care about any other feature except the homepage that shows current covid data."),r.forEach(u),t=w(o),s=g(o,"P",{});var h=I(s);d=y(h,"I\u2019m planning on remaking this if I got time for it using Svelte."),h.forEach(u),_=w(o),q(f.$$.fragment,o)},m(o,r){S(o,e,r),p(e,a),p(a,n),p(e,i),S(o,t,r),S(o,s,r),p(s,d),S(o,_,r),O(f,o,r),m=!0},p(o,r){const l={};r&2&&(l.$$scope={dirty:r,ctx:o}),f.$set(l)},i(o){m||(E(f.$$.fragment,o),m=!0)},o(o){P(f.$$.fragment,o),m=!1},d(o){o&&u(e),o&&u(t),o&&u(s),o&&u(_),Y(f,o)}}}function ee(c){let e,a;const n=[c[0],Z];let i={$$slots:{default:[X]},$$scope:{ctx:c}};for(let t=0;t<n.length;t+=1)i=x(i,n[t]);return e=new L({props:i}),{c(){U(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){O(e,t,s),a=!0},p(t,[s]){const d=s&1?K(n,[s&1&&R(t[0]),s&0&&R(Z)]):{};s&2&&(d.$$scope={dirty:s,ctx:t}),e.$set(d)},i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){P(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}const Z={title:"Covid Info",date:"2020-04-22T00:00:00.000Z",desc:"A simple app to get current covid data.",demo:"https://covid-info.now.sh",source:"https://github.com/elianiva/covid-info",layout:"project",type:"personal",stack:[["ReactJS","https://reactjs.org"],["ChartJS","https://chartjs.org"]]};function te(c,e,a){return c.$$set=n=>{a(0,e=x(x({},e),V(n)))},e=V(e),[e]}class ie extends D{constructor(e){super();T(this,e,te,ee,J,{})}}export{ie as default,Z as metadata};
