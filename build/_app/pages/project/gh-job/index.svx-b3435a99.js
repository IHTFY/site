import{S as Y,i as z,s as B,C as $,w as F,x as N,y as O,z as R,A as T,q as U,o as Z,B as D,U as q,e as v,t as u,k as G,c as g,a as y,h as c,d as o,m as E,b as L,g as m,F as n}from"../../../chunks/vendor-a3554607.js";import{P as M}from"../../../chunks/project-9e8bca68.js";import"../../../chunks/stores-5109c37e.js";import"../../../chunks/github-a76e40b1.js";import"../../../chunks/Progress-da00dd34.js";/* empty css                                      */function Q(h){let t,i,l,p,a,s,d,f,k,x,I,_,S,w,b,P;return{c(){t=v("p"),i=v("strong"),l=u("GH Job"),p=u(" is a simple app that I made when I was trying out Svelte-Kit. It gets its data from Github Job API and display it using a simple card."),a=G(),s=v("p"),d=u("You can read more about my thoughts about this app and Svelte-Kit in general "),f=v("a"),k=u("here"),x=u("."),I=G(),_=v("p"),S=u("It can filter the result by the title, location, and whether if it\u2019s a full-time job or not. It also has dark mode."),w=G(),b=v("p"),P=u("It\u2019s pretty basic since I only made this for an experimental purpose."),this.h()},l(e){t=g(e,"P",{});var r=y(t);i=g(r,"STRONG",{});var J=y(i);l=c(J,"GH Job"),J.forEach(o),p=c(r," is a simple app that I made when I was trying out Svelte-Kit. It gets its data from Github Job API and display it using a simple card."),r.forEach(o),a=E(e),s=g(e,"P",{});var j=y(s);d=c(j,"You can read more about my thoughts about this app and Svelte-Kit in general "),f=g(j,"A",{href:!0});var K=y(f);k=c(K,"here"),K.forEach(o),x=c(j,"."),j.forEach(o),I=E(e),_=g(e,"P",{});var A=y(_);S=c(A,"It can filter the result by the title, location, and whether if it\u2019s a full-time job or not. It also has dark mode."),A.forEach(o),w=E(e),b=g(e,"P",{});var H=y(b);P=c(H,"It\u2019s pretty basic since I only made this for an experimental purpose."),H.forEach(o),this.h()},h(){L(f,"href","/post/444")},m(e,r){m(e,t,r),n(t,i),n(i,l),n(t,p),m(e,a,r),m(e,s,r),n(s,d),n(s,f),n(f,k),n(s,x),m(e,I,r),m(e,_,r),n(_,S),m(e,w,r),m(e,b,r),n(b,P)},d(e){e&&o(t),e&&o(a),e&&o(s),e&&o(I),e&&o(_),e&&o(w),e&&o(b)}}}function V(h){let t,i;const l=[h[0],C];let p={$$slots:{default:[Q]},$$scope:{ctx:h}};for(let a=0;a<l.length;a+=1)p=$(p,l[a]);return t=new M({props:p}),{c(){F(t.$$.fragment)},l(a){N(t.$$.fragment,a)},m(a,s){O(t,a,s),i=!0},p(a,[s]){const d=s&1?R(l,[s&1&&T(a[0]),s&0&&T(C)]):{};s&2&&(d.$$scope={dirty:s,ctx:a}),t.$set(d)},i(a){i||(U(t.$$.fragment,a),i=!0)},o(a){Z(t.$$.fragment,a),i=!1},d(a){D(t,a)}}}const C={title:"GH Jobs",date:"2021-02-13T00:00:00.000Z",desc:"Simple app that I made when trying out Svelte-Kit which uses Github Job API",demo:"https://gh-job.vercel.app",source:"https://github.com/elianiva/gh-job",layout:"project",type:"personal",stack:[["Svelte-Kit","https://svelte.dev"],["Typescript","https://typescriptlang.org"],["Snowpack","https://www.snowpack.dev"]]};function W(h,t,i){return h.$$set=l=>{i(0,t=$($({},t),q(l)))},t=q(t),[t]}class it extends Y{constructor(t){super();z(this,t,W,V,B,{})}}export{it as default,C as metadata};