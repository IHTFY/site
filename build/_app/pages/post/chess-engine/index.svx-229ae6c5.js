import{S as K,i as L,s as R,C as q,w as V,x as X,y as Y,z as Z,A as U,q as ee,o as ae,B as te,U as G,e as h,t as u,k as g,c,a as p,h as f,d as t,m as w,g as s,F as y}from"../../../chunks/vendor-f73903c8.js";import{P as ne}from"../../../chunks/post-68c71ca3.js";import"../../../chunks/stores-233b7d65.js";import"../../../chunks/Progress-9db5e1e4.js";/* empty css                                      */function oe(I){let a,r,l,d,n,i,m,E,P,v,M,z,_,D,j,b,S,T,k,B,$,x,C;return{c(){a=h("p"),r=u("I started making a chess engine a while ago. I only got as far as making random moves."),l=g(),d=h("p"),n=u("Today, I added a basic evaluation function that simply counts the material imbalance. Then it uses mini-max with alpha beta pruning at a depth of 3. It\u2019s still very dumb, and you can win fast with a short tactic."),i=g(),m=h("p"),E=u("I know many chess engines use different evaluation formulas for he midgame and endgame, such as giving greater preference to long range pieces (bishops and rooks). I don\u2019t plan on outperforming stockfish, but I\u2019d like to make an engine that I can\u2019t beat. My online rating is around 1800."),P=g(),v=h("p"),M=u("I learned chess from my dad when I was around 7 years old. He always beat me, and I was never very good, but I always enjoyed the game. My best friend Taylor and I wound play. We nearly alternated wins each game."),z=g(),_=h("p"),D=u("I picked the game up again in the summer of 2020. My blitz rating started at 1400 and dropped to 650. It was a steady climb to 1650 over the course of 9 months. The next 3-6 months, I climbed to around 1750. I mostly do puzzles now since I find them relaxing. I also watch videos - mostly Daniel Naroditsky."),j=g(),b=h("p"),S=u("My reintroduction came after watching the Penguinz0/xQc 6 move checkmate. I watched the remainder of pogchamps, then found Danya\u2019s channel. I definitely recommend it to anyone interested in how to become a better chess player."),T=g(),k=h("p"),B=u("I realized there were so many heuristics I had never considered. I had always worked on pure calculation when I was younger. But it makes sense to slowly expand your pieces, keeping everything defended along the way."),$=g(),x=h("p"),C=u("I had never even thought about playing positionally. I never put rooks on open files without the intention of traveling down the file on the next move. Similarly, I never thought to place my bishops on long diagonals where they may one day have reign across the whole board.")},l(e){a=c(e,"P",{});var o=p(a);r=f(o,"I started making a chess engine a while ago. I only got as far as making random moves."),o.forEach(t),l=w(e),d=c(e,"P",{});var H=p(d);n=f(H,"Today, I added a basic evaluation function that simply counts the material imbalance. Then it uses mini-max with alpha beta pruning at a depth of 3. It\u2019s still very dumb, and you can win fast with a short tactic."),H.forEach(t),i=w(e),m=c(e,"P",{});var N=p(m);E=f(N,"I know many chess engines use different evaluation formulas for he midgame and endgame, such as giving greater preference to long range pieces (bishops and rooks). I don\u2019t plan on outperforming stockfish, but I\u2019d like to make an engine that I can\u2019t beat. My online rating is around 1800."),N.forEach(t),P=w(e),v=c(e,"P",{});var O=p(v);M=f(O,"I learned chess from my dad when I was around 7 years old. He always beat me, and I was never very good, but I always enjoyed the game. My best friend Taylor and I wound play. We nearly alternated wins each game."),O.forEach(t),z=w(e),_=c(e,"P",{});var Q=p(_);D=f(Q,"I picked the game up again in the summer of 2020. My blitz rating started at 1400 and dropped to 650. It was a steady climb to 1650 over the course of 9 months. The next 3-6 months, I climbed to around 1750. I mostly do puzzles now since I find them relaxing. I also watch videos - mostly Daniel Naroditsky."),Q.forEach(t),j=w(e),b=c(e,"P",{});var W=p(b);S=f(W,"My reintroduction came after watching the Penguinz0/xQc 6 move checkmate. I watched the remainder of pogchamps, then found Danya\u2019s channel. I definitely recommend it to anyone interested in how to become a better chess player."),W.forEach(t),T=w(e),k=c(e,"P",{});var A=p(k);B=f(A,"I realized there were so many heuristics I had never considered. I had always worked on pure calculation when I was younger. But it makes sense to slowly expand your pieces, keeping everything defended along the way."),A.forEach(t),$=w(e),x=c(e,"P",{});var F=p(x);C=f(F,"I had never even thought about playing positionally. I never put rooks on open files without the intention of traveling down the file on the next move. Similarly, I never thought to place my bishops on long diagonals where they may one day have reign across the whole board."),F.forEach(t)},m(e,o){s(e,a,o),y(a,r),s(e,l,o),s(e,d,o),y(d,n),s(e,i,o),s(e,m,o),y(m,E),s(e,P,o),s(e,v,o),y(v,M),s(e,z,o),s(e,_,o),y(_,D),s(e,j,o),s(e,b,o),y(b,S),s(e,T,o),s(e,k,o),y(k,B),s(e,$,o),s(e,x,o),y(x,C)},d(e){e&&t(a),e&&t(l),e&&t(d),e&&t(i),e&&t(m),e&&t(P),e&&t(v),e&&t(z),e&&t(_),e&&t(j),e&&t(b),e&&t(T),e&&t(k),e&&t($),e&&t(x)}}}function se(I){let a,r;const l=[I[0],J];let d={$$slots:{default:[oe]},$$scope:{ctx:I}};for(let n=0;n<l.length;n+=1)d=q(d,l[n]);return a=new ne({props:d}),{c(){V(a.$$.fragment)},l(n){X(a.$$.fragment,n)},m(n,i){Y(a,n,i),r=!0},p(n,[i]){const m=i&1?Z(l,[i&1&&U(n[0]),i&0&&U(J)]):{};i&2&&(m.$$scope={dirty:i,ctx:n}),a.$set(m)},i(n){r||(ee(a.$$.fragment,n),r=!0)},o(n){ae(a.$$.fragment,n),r=!1},d(n){te(a,n)}}}const J={draft:!1,title:"chess engine",date:"2022-01-16",coverImage:"image_editor_output_image-1492837878-1642284155420.jpg",desc:"TODO",tags:["todo"]};function ie(I,a,r){return I.$$set=l=>{r(0,a=q(q({},a),G(l)))},a=G(a),[a]}class ue extends K{constructor(a){super();L(this,a,ie,se,R,{})}}export{ue as default,J as metadata};
