import{S as I,i as N,s as O,W as k,e as h,t as A,k as P,c as m,a as E,h as T,d as f,m as j,b as g,g as q,J as d,Y as w,Z as C,_ as V,q as J,o as L}from"./vendor-4e826582.js";function W(l){let t,s,o,_,i,c,v,r,u,p;const D=l[3].default,a=k(D,l,l[2],null);return{c(){t=h("section"),s=h("div"),o=h("span"),_=A("UPDATE"),i=P(),c=h("span"),v=A(l[0]),r=P(),u=h("div"),a&&a.c(),this.h()},l(e){t=m(e,"SECTION",{class:!0});var n=E(t);s=m(n,"DIV",{class:!0});var y=E(s);o=m(y,"SPAN",{class:!0});var S=E(o);_=T(S,"UPDATE"),S.forEach(f),i=j(y),c=m(y,"SPAN",{class:!0});var U=E(c);v=T(U,l[0]),U.forEach(f),y.forEach(f),r=j(n),u=m(n,"DIV",{class:!0});var b=E(u);a&&a.l(b),b.forEach(f),n.forEach(f),this.h()},h(){g(o,"class","update__title svelte-1t7np6d"),g(c,"class","update__date svelte-1t7np6d"),g(s,"class","update__header svelte-1t7np6d"),g(u,"class","update__content svelte-1t7np6d"),g(t,"class","update svelte-1t7np6d")},m(e,n){q(e,t,n),d(t,s),d(s,o),d(o,_),d(s,i),d(s,c),d(c,v),d(t,r),d(t,u),a&&a.m(u,null),p=!0},p(e,[n]){a&&a.p&&(!p||n&4)&&w(a,D,e,e[2],p?V(D,e[2],n,null):C(e[2]),null)},i(e){p||(J(a,e),p=!0)},o(e){L(a,e),p=!1},d(e){e&&f(t),a&&a.d(e)}}}function Y(l,t,s){let{$$slots:o={},$$scope:_}=t,{date:i=""}=t;const v=new Date(i+"T00:00").toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"long",day:"numeric"});return l.$$set=r=>{"date"in r&&s(1,i=r.date),"$$scope"in r&&s(2,_=r.$$scope)},[v,i,_,o]}class z extends I{constructor(t){super();N(this,t,Y,W,O,{date:1})}}export{z as U};