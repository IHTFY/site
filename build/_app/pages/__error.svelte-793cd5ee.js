import{S as A,i as R,s as q,k as j,e as f,X as H,d as i,m as w,c as m,a as b,b as v,g as p,H as k,t as S,h as g,F as u,j as L}from"../chunks/vendor-a3554607.js";function N(c){let e,l;return{c(){e=f("span"),l=S("Something went wrong."),this.h()},l(t){e=m(t,"SPAN",{class:!0});var s=b(e);l=g(s,"Something went wrong."),s.forEach(i),this.h()},h(){v(e,"class","err__msg svelte-3jlyod")},m(t,s){p(t,e,s),u(e,l)},p:k,d(t){t&&i(e)}}}function P(c){let e,l,t,s,_,r,a,n,d;return{c(){e=f("h1"),l=S(c[0]),t=j(),s=f("span"),_=S(`Sorry, you might have entered the wrong URL.
      `),r=f("br"),a=S(`
      Wanna go back
      `),n=f("a"),d=S("home?"),this.h()},l(o){e=m(o,"H1",{class:!0});var h=b(e);l=g(h,c[0]),h.forEach(i),t=w(o),s=m(o,"SPAN",{class:!0});var y=b(s);_=g(y,`Sorry, you might have entered the wrong URL.
      `),r=m(y,"BR",{}),a=g(y,`
      Wanna go back
      `),n=m(y,"A",{class:!0,href:!0});var E=b(n);d=g(E,"home?"),E.forEach(i),y.forEach(i),this.h()},h(){v(e,"class","err__status svelte-3jlyod"),v(n,"class","err__url svelte-3jlyod"),v(n,"href","/"),v(s,"class","err__msg svelte-3jlyod")},m(o,h){p(o,e,h),u(e,l),p(o,t,h),p(o,s,h),u(s,_),u(s,r),u(s,a),u(s,n),u(n,d)},p(o,h){h&1&&L(l,o[0])},d(o){o&&i(e),o&&i(t),o&&i(s)}}}function U(c){let e,l,t;document.title=e=""+(c[0]+" | Elianiva's Site");function s(a,n){return a[0]===404?P:N}let _=s(c),r=_(c);return{c(){l=j(),t=f("div"),r.c(),this.h()},l(a){H('[data-svelte="svelte-1np0euz"]',document.head).forEach(i),l=w(a),t=m(a,"DIV",{class:!0});var d=b(t);r.l(d),d.forEach(i),this.h()},h(){v(t,"class","err svelte-3jlyod")},m(a,n){p(a,l,n),p(a,t,n),r.m(t,null)},p(a,[n]){n&1&&e!==(e=""+(a[0]+" | Elianiva's Site"))&&(document.title=e),_===(_=s(a))&&r?r.p(a,n):(r.d(1),r=_(a),r&&(r.c(),r.m(t,null)))},i:k,o:k,d(a){a&&i(l),a&&i(t),r.d()}}}function W(c,e,l){let{status:t=404}=e;return c.$$set=s=>{"status"in s&&l(0,t=s.status)},[t]}class B extends A{constructor(e){super();R(this,e,W,U,q,{status:0})}}export{B as default};
