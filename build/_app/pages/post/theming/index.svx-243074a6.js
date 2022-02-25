import{S as Se,i as je,s as Ce,C as fe,w as Pe,x as De,y as Oe,z as Be,A as ze,q as qe,o as Fe,B as Me,T as $e,e as h,t as a,k as _,c as d,a as c,h as s,d as o,m as k,b as G,g as u,J as t}from"../../../chunks/vendor-4e826582.js";import{P as We}from"../../../chunks/post-f0963b8b.js";import"../../../chunks/stores-6bae2da7.js";import"../../../chunks/Progress-83a8291b.js";/* empty css                                      */function Ye(I){let n,f,p,r,i,m,x,H,S,K,L,j,N,Q,C,U,V,q,E,X,F,y,Z,P,ee,te,D,oe,ae,M,T,se,W,b,ne,O,ie,re,B,le,he,Y,z,de,J,g,ce,v,me,ue;return{c(){n=h("p"),f=a("I remade the calendar maker using Attractions, and it looks pretty nice so far. A few things it\u2019s missing are dark mode and grid/layout utilities."),p=_(),r=h("p"),i=a("You can use SASS to override the default styles of components, but it doesn\u2019t quite work. For example, the "),m=h("a"),x=a("Tabs"),H=a(" colors can be modified using the "),S=h("code"),K=a("$main"),L=a(", "),j=h("code"),N=a("$disabled"),Q=a(", and "),C=h("code"),U=a("$off-state"),V=a(" variables, but you can\u2019t make it pure black. When I set it, the final computed style is a medium grey, so I can\u2019t get the active tab to be brighter than the inactive ones using my dark theme."),q=_(),E=h("p"),X=a("There aren\u2019t any column/row/grid components, so I\u2019ve been doing it manually. Maybe I could use some other library. It seems like there\u2019s no margin on a lot of elements, e.g. buttons and form elements."),F=_(),y=h("p"),Z=a("I thought I could use the Table element to display the Events (holidays/birthdays), but the table only accepts and displays text data. I decided to make another function that finds the table and replaces the last column of text with an "),P=h("code"),ee=a("img"),te=a(" element whose "),D=h("code"),oe=a("src"),ae=a(" is the text. This seems to work fine, but maybe I should just have a custom Element that displays the info in a nice container and then stack those items in a flex column. This may make it easier to add click listeners to each event as well."),M=_(),T=h("p"),se=a("There was an issue I was having with the dropzone. The box was resizing to the shape of the inner text, which was very short if the wrong image type was dragged. If you hovered over the edge of the dropzone, the box would show the error and shrink the size. But then your mouse wasn\u2019t hovering anymore, so it would grow to full size again. Then it would show the error and shrink, etc."),W=_(),b=h("p"),ne=a("It turns out it was because I was using "),O=h("code"),ie=a("display: flex"),re=a(" on most of my elements in the form, including the dropzone. I made a wrapper for the dropzone and set it to "),B=h("code"),le=a("display: block"),he=a(" instead which fixed it."),Y=_(),z=h("p"),de=a("Also, there aren\u2019t many options for changing the CSS of the Attractions components other than color. There\u2019s some border radius, but not much size stuff. I\u2019m thinking I may go back to Bulma on future projects."),J=_(),g=h("p"),ce=a("I\u2019ve uploaded the new version to "),v=h("a"),me=a("cmaker.ihtfy.com"),ue=a("."),this.h()},l(e){n=d(e,"P",{});var l=c(n);f=s(l,"I remade the calendar maker using Attractions, and it looks pretty nice so far. A few things it\u2019s missing are dark mode and grid/layout utilities."),l.forEach(o),p=k(e),r=d(e,"P",{});var w=c(r);i=s(w,"You can use SASS to override the default styles of components, but it doesn\u2019t quite work. For example, the "),m=d(w,"A",{href:!0,rel:!0});var pe=c(m);x=s(pe,"Tabs"),pe.forEach(o),H=s(w," colors can be modified using the "),S=d(w,"CODE",{});var ye=c(S);K=s(ye,"$main"),ye.forEach(o),L=s(w,", "),j=d(w,"CODE",{});var be=c(j);N=s(be,"$disabled"),be.forEach(o),Q=s(w,", and "),C=d(w,"CODE",{});var we=c(C);U=s(we,"$off-state"),we.forEach(o),V=s(w," variables, but you can\u2019t make it pure black. When I set it, the final computed style is a medium grey, so I can\u2019t get the active tab to be brighter than the inactive ones using my dark theme."),w.forEach(o),q=k(e),E=d(e,"P",{});var ge=c(E);X=s(ge,"There aren\u2019t any column/row/grid components, so I\u2019ve been doing it manually. Maybe I could use some other library. It seems like there\u2019s no margin on a lot of elements, e.g. buttons and form elements."),ge.forEach(o),F=k(e),y=d(e,"P",{});var $=c(y);Z=s($,"I thought I could use the Table element to display the Events (holidays/birthdays), but the table only accepts and displays text data. I decided to make another function that finds the table and replaces the last column of text with an "),P=d($,"CODE",{});var ve=c(P);ee=s(ve,"img"),ve.forEach(o),te=s($," element whose "),D=d($,"CODE",{});var _e=c(D);oe=s(_e,"src"),_e.forEach(o),ae=s($," is the text. This seems to work fine, but maybe I should just have a custom Element that displays the info in a nice container and then stack those items in a flex column. This may make it easier to add click listeners to each event as well."),$.forEach(o),M=k(e),T=d(e,"P",{});var ke=c(T);se=s(ke,"There was an issue I was having with the dropzone. The box was resizing to the shape of the inner text, which was very short if the wrong image type was dragged. If you hovered over the edge of the dropzone, the box would show the error and shrink the size. But then your mouse wasn\u2019t hovering anymore, so it would grow to full size again. Then it would show the error and shrink, etc."),ke.forEach(o),W=k(e),b=d(e,"P",{});var A=c(b);ne=s(A,"It turns out it was because I was using "),O=d(A,"CODE",{});var Ie=c(O);ie=s(Ie,"display: flex"),Ie.forEach(o),re=s(A," on most of my elements in the form, including the dropzone. I made a wrapper for the dropzone and set it to "),B=d(A,"CODE",{});var xe=c(B);le=s(xe,"display: block"),xe.forEach(o),he=s(A," instead which fixed it."),A.forEach(o),Y=k(e),z=d(e,"P",{});var Ee=c(z);de=s(Ee,"Also, there aren\u2019t many options for changing the CSS of the Attractions components other than color. There\u2019s some border radius, but not much size stuff. I\u2019m thinking I may go back to Bulma on future projects."),Ee.forEach(o),J=k(e),g=d(e,"P",{});var R=c(g);ce=s(R,"I\u2019ve uploaded the new version to "),v=d(R,"A",{href:!0,rel:!0});var Te=c(v);me=s(Te,"cmaker.ihtfy.com"),Te.forEach(o),ue=s(R,"."),R.forEach(o),this.h()},h(){G(m,"href","https://illright.github.io/attractions/docs/components/tabs"),G(m,"rel","nofollow"),G(v,"href","https://cmaker.ihtfy.com/"),G(v,"rel","nofollow")},m(e,l){u(e,n,l),t(n,f),u(e,p,l),u(e,r,l),t(r,i),t(r,m),t(m,x),t(r,H),t(r,S),t(S,K),t(r,L),t(r,j),t(j,N),t(r,Q),t(r,C),t(C,U),t(r,V),u(e,q,l),u(e,E,l),t(E,X),u(e,F,l),u(e,y,l),t(y,Z),t(y,P),t(P,ee),t(y,te),t(y,D),t(D,oe),t(y,ae),u(e,M,l),u(e,T,l),t(T,se),u(e,W,l),u(e,b,l),t(b,ne),t(b,O),t(O,ie),t(b,re),t(b,B),t(B,le),t(b,he),u(e,Y,l),u(e,z,l),t(z,de),u(e,J,l),u(e,g,l),t(g,ce),t(g,v),t(v,me),t(g,ue)},d(e){e&&o(n),e&&o(p),e&&o(r),e&&o(q),e&&o(E),e&&o(F),e&&o(y),e&&o(M),e&&o(T),e&&o(W),e&&o(b),e&&o(Y),e&&o(z),e&&o(J),e&&o(g)}}}function Je(I){let n,f;const p=[I[0],Ae];let r={$$slots:{default:[Ye]},$$scope:{ctx:I}};for(let i=0;i<p.length;i+=1)r=fe(r,p[i]);return n=new We({props:r}),{c(){Pe(n.$$.fragment)},l(i){De(n.$$.fragment,i)},m(i,m){Oe(n,i,m),f=!0},p(i,[m]){const x=m&1?Be(p,[m&1&&ze(i[0]),m&0&&ze(Ae)]):{};m&2&&(x.$$scope={dirty:m,ctx:i}),n.$set(x)},i(i){f||(qe(n.$$.fragment,i),f=!0)},o(i){Fe(n.$$.fragment,i),f=!1},d(i){Me(n,i)}}}const Ae={draft:!1,title:"theming",date:"2022-02-18",coverImage:"theming.jpg",desc:"Remaking the calendar maker",tags:["code","design"]};function Re(I,n,f){return I.$$set=p=>{f(0,n=fe(fe({},n),$e(p)))},n=$e(n),[n]}class Qe extends Se{constructor(n){super();je(this,n,Re,Je,Ce,{})}}export{Qe as default,Ae as metadata};