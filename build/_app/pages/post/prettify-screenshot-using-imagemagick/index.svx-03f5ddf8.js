import{S as Tl,i as Cl,s as Al,C as Io,w as xl,x as Hl,y as Ll,z as Ml,A as tl,q as Ol,o as jl,B as Rl,U as sl,e as s,t as l,k as u,c as o,a as n,h as p,d as a,m as f,b as c,a1 as ol,g as i,F as t,H as Dl}from"../../../chunks/vendor-a3554607.js";import{P as Bl}from"../../../chunks/post-1875198a.js";import"../../../chunks/stores-5109c37e.js";import"../../../chunks/Progress-912bc64e.js";import"../../../chunks/theme-4e4001f1.js";/* empty css                                      */function ql(fe){let d,w,C,A,h,_,x,he,Pt,Tt,Ze,Je,de,Ct,At,q,Ke,me,xt,Ht,E,Qe,ke,Lt,Mt,Ve,be,Ot,jt,ea,ve,Rt,Dt,aa,we,Bt,qt,ta,_e,St,Gt,sa,oa,Ee,$t,Aa,S,ye,Ft,xa,H,Nt,G,Yt,Ut,Ha,$,ge,zt,La,Ie,Xt,Ma,I,Pe,na,Wt,Zt,Jt,F,la,Kt,Qt,N,Vt,es,L,pa,as,ts,Y,ss,os,Oa,Te,ns,ja,U,Ce,ls,Ra,z,Ae,ps,Da,xe,rs,Ba,X,ll='<code class="language-bash">convert source.png -bordercolor white -border <span class="token number">10</span> result.png</code>',qa,P,is,ra,cs,us,W,fs,hs,Sa,M,ds,ia,ms,ks,Ga,Z,He,bs,$a,Le,vs,Fa,J,pl='<code class="language-bash">convert source.png -bordercolor white -border <span class="token number">4</span> result.png</code>',Na,Me,ws,Ya,K,Oe,_s,Ua,je,Es,za,Q,rl=`<code class="language-bash">convert source.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>
+swap -background none -layers merge +repage result.png<span class="token punctuation">;</span> <span class="token punctuation"></span></code>`,Xa,m,ys,ca,gs,Is,ua,Ps,Ts,fa,Cs,As,ha,xs,Hs,da,Ls,Ms,ma,Os,js,Wa,V,Re,Rs,Za,De,Ds,Ja,ee,il=`<code class="language-bash"><span class="token comment"># rounded corners</span>
convert /tmp/image.png <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>
        -draw <span class="token string">'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0'</span> <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png</code>`,Ka,b,Bs,ka,qs,Ss,ba,Gs,$s,va,Fs,Ns,wa,Ys,Us,ae,zs,Qa,te,Be,Xs,Va,O,Ws,_a,Zs,Js,et,se,cl='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span></code>',at,k,Ks,Ea,Qs,Vs,ya,eo,ao,ga,to,so,Ia,oo,no,oe,lo,po,tt,ne,ul=`<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>

flameshot gui --raw <span class="token operator">></span> /tmp/image.png</code>`,st,j,ro,Pa,io,co,ot,le,fl=`<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>

flameshot gui --raw <span class="token operator">></span> /tmp/image.png

<span class="token comment"># rounded corners</span>
convert /tmp/image.png <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>
        -draw <span class="token string">'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0'</span> <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png</code>`,nt,R,uo,Ta,fo,ho,lt,pe,hl=`<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>

flameshot gui --raw <span class="token operator">></span> /tmp/image.png

<span class="token comment"># rounded corners</span>
convert /tmp/image.png <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>
        -draw <span class="token string">'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0'</span> <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png

<span class="token comment"># shadow</span>
convert /tmp/image.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>
+swap -background none -layers merge +repage /tmp/image.png<span class="token punctuation">;</span> <span class="token punctuation"></span></code>`,pt,qe,mo,rt,re,dl=`<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>

flameshot gui --raw <span class="token operator">></span> /tmp/image.png

<span class="token comment"># rounded corners</span>
convert /tmp/image.png <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>
        -draw <span class="token string">'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0'</span> <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png

<span class="token comment"># shadow</span>
convert /tmp/image.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>
+swap -background none -layers merge +repage /tmp/image.png<span class="token punctuation">;</span> <span class="token punctuation"></span>

<span class="token comment"># white backdrop</span>
convert /tmp/image.png -bordercolor white -border <span class="token number">10</span> /tmp/image.png</code>`,it,Se,ko,ct,ie,ml=`<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>

flameshot gui --raw <span class="token operator">></span> /tmp/image.png

<span class="token comment"># rounded corners</span>
convert /tmp/image.png <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>
        -draw <span class="token string">'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0'</span> <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>
     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png

<span class="token comment"># shadow</span>
convert /tmp/image.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>
+swap -background none -layers merge +repage /tmp/image.png<span class="token punctuation">;</span> <span class="token punctuation"></span>

<span class="token comment"># white backdrop</span>
convert /tmp/image.png -bordercolor white -border <span class="token number">10</span> /tmp/image.png

<span class="token comment"># copy to clipboard</span>
xclip -selection clipboard -i /tmp/image.png -t image/png</code>`,ut,Ge,bo,ft,$e,Fe,Po,ht,Ne,vo,dt,Ye,Ue,To,mt,ce,ze,wo,kt,D,_o,ue,Eo,yo;return{c(){d=s("h1"),w=s("a"),C=l("Table of Contents"),A=u(),h=s("ul"),_=s("li"),x=s("p"),he=s("a"),Pt=l("Introduction"),Tt=u(),Ze=s("li"),Je=s("p"),de=s("a"),Ct=l("Prerequisite"),At=u(),q=s("li"),Ke=s("p"),me=s("a"),xt=l("Making The Script"),Ht=u(),E=s("ul"),Qe=s("li"),ke=s("a"),Lt=l("Backdrop"),Mt=u(),Ve=s("li"),be=s("a"),Ot=l("Border"),jt=u(),ea=s("li"),ve=s("a"),Rt=l("Shadow"),Dt=u(),aa=s("li"),we=s("a"),Bt=l("Rounded Corner"),qt=u(),ta=s("li"),_e=s("a"),St=l("Combining Them All"),Gt=u(),sa=s("li"),oa=s("p"),Ee=s("a"),$t=l("Conclusion"),Aa=u(),S=s("h1"),ye=s("a"),Ft=l("Introduction"),xa=u(),H=s("p"),Nt=l("Let\u2019s make our screenshot prettier by using a software called "),G=s("a"),Yt=l("Imagemagick"),Ut=l(". In this post, we will add some fancy effects like backdrop, shadow, border, and rounded corner with a simple script."),Ha=u(),$=s("h1"),ge=s("a"),zt=l("Prerequisite"),La=u(),Ie=s("p"),Xt=l("Before we make the script, there are a few things that you\u2019ll need to prepare."),Ma=u(),I=s("ul"),Pe=s("li"),na=s("strong"),Wt=l("Imagemagick"),Zt=l(" - obviously"),Jt=u(),F=s("li"),la=s("strong"),Kt=l("Any screenshot software"),Qt=l(" - I use "),N=s("a"),Vt=l("flameshot"),es=u(),L=s("li"),pa=s("strong"),as=l("Clipboard"),ts=l(" - I use "),Y=s("a"),ss=l("xclip"),os=l(" (optional)"),Oa=u(),Te=s("p"),ns=l("After having all of that, let\u2019s make the script."),ja=u(),U=s("h1"),Ce=s("a"),ls=l("Making The Script"),Ra=u(),z=s("h2"),Ae=s("a"),ps=l("Backdrop"),Da=u(),xe=s("p"),rs=l("Backdrop is actually just a really thicc border. Here\u2019s how to do that on imagemagick."),Ba=u(),X=s("pre"),qa=u(),P=s("p"),is=l("You can adjust the color by changing the "),ra=s("code"),cs=l("bordercolor"),us=l(" value. I use white because it looks nice to me. You can use HEX, RGB, and RGBA format. For more references, go to "),W=s("a"),fs=l("their website"),hs=l("."),Sa=u(),M=s("p"),ds=l("To adjust the thickness of it, you change the "),ia=s("code"),ms=l("border"),ks=l(" value. I use 10 here because it\u2019s not too big and it\u2019s not too small for me."),Ga=u(),Z=s("h2"),He=s("a"),bs=l("Border"),$a=u(),Le=s("p"),vs=l("Previously, we made a thicc border as a backdrop, this time we make a thin border before the shadow"),Fa=u(),J=s("pre"),Na=u(),Me=s("p"),ws=l("It\u2019s basically the same, just with a different value."),Ya=u(),K=s("h2"),Oe=s("a"),_s=l("Shadow"),Ua=u(),je=s("p"),Es=l("To give you screenshot a shadow is quite simple. Here\u2019s how to do it."),za=u(),Q=s("pre"),Xa=u(),m=s("p"),ys=l("To change the shadow color, adjust the first "),ca=s("code"),gs=l("background"),Is=l(" value. I use black because black shadow is the only one that is acceptable to me. The "),ua=s("code"),Ps=l("40"),Ts=l(" here is the shadow opacity, you can change it to whatever you like. The shadow radius here is "),fa=s("code"),Cs=l("5"),As=l(". This will add to your backdrop thickness. If you have "),ha=s("code"),xs=l("10"),Hs=l(" of backdrop and you have "),da=s("code"),Ls=l("5"),Ms=l(" of border radius then you\u2019ll end up with "),ma=s("code"),Os=l("15"),js=l(" of backdrop."),Wa=u(),V=s("h2"),Re=s("a"),Rs=l("Rounded Corner"),Za=u(),De=s("p"),Ds=l("It\u2019s quite a lengthy one, but don\u2019t worry. The only thing we\u2019d change is the border radius."),Ja=u(),ee=s("pre"),Ka=u(),b=s("p"),Bs=l("The border radius here is "),ka=s("code"),qs=l("5"),Ss=l(". Change every "),ba=s("code"),Gs=l("5"),$s=l(" to whatever you want like "),va=s("code"),Fs=l("10"),Ns=l(" for example but "),wa=s("code"),Ys=l("5"),Us=l(" is the sweet spot for me. For more technical explanation and details you can refer to "),ae=s("a"),zs=l("their website"),Qa=u(),te=s("h2"),Be=s("a"),Xs=l("Combining Them All"),Va=u(),O=s("p"),Ws=l("Those are all the parts that we need. Let\u2019s combine them together. Make a file called whatever you want and make it executable by using "),_a=s("code"),Zs=l("chmod +x filename"),Js=l(" and edit the file."),et=u(),se=s("pre"),at=u(),k=s("p"),Ks=l("I use "),Ea=s("code"),Qs=l("dash"),Vs=l(" for my script, but "),ya=s("code"),eo=l("bash"),ao=l(" or "),ga=s("code"),to=l("zsh"),so=l(" will do just fine. I don\u2019t know if it\u2019ll work with "),Ia=s("code"),oo=l("fish"),no=l(" though, I suppose it\u2019ll work just fine. Add your screenshot program to take the image that we will be using. I\u2019m using "),oe=s("a"),lo=l("Flameshot"),po=l(" so it will look like this."),tt=u(),ne=s("pre"),st=u(),j=s("p"),ro=l("I store the image on "),Pa=s("code"),io=l("/tmp"),co=l(" directory because I will copy it to my clipboard and won\u2019t be using the original image."),ot=u(),le=s("pre"),nt=u(),R=s("p"),uo=l("The first effect I apply is the rounded corner and store the result in "),Ta=s("code"),fo=l("/tmp/image.png"),ho=l("."),lt=u(),pe=s("pre"),pt=u(),qe=s("p"),mo=l("Next one is the shadow. I don\u2019t use the small border because it looks weird on a smaller screenshot. You can use it if you like."),rt=u(),re=s("pre"),it=u(),Se=s("p"),ko=l("The last effect I apply is white backdrop. Next step is optional, but if you want to you can add it as well."),ct=u(),ie=s("pre"),ut=u(),Ge=s("p"),bo=l("I added the last line to copy the result into my clipboard so I can easily paste it anywhere and don\u2019t have to delete the screenshot when I no longer need it. Here\u2019s the result."),ft=u(),$e=s("p"),Fe=s("img"),ht=u(),Ne=s("p"),vo=l("Here\u2019s another version"),dt=u(),Ye=s("p"),Ue=s("img"),mt=u(),ce=s("h1"),ze=s("a"),wo=l("Conclusion"),kt=u(),D=s("p"),_o=l("Imagemagick is a powerful CLI tools to manipulate an image. It can do so much more, if you\u2019re interested on that then you can go to "),ue=s("a"),Eo=l("their website"),yo=l(" for some advanced guide. That\u2019s all for this post, thanks for reading and have a nice day \u30C4"),this.h()},l(e){d=o(e,"H1",{id:!0});var r=n(d);w=o(r,"A",{href:!0});var Co=n(w);C=p(Co,"Table of Contents"),Co.forEach(a),r.forEach(a),A=f(e),h=o(e,"UL",{});var B=n(h);_=o(B,"LI",{});var Ao=n(_);x=o(Ao,"P",{});var xo=n(x);he=o(xo,"A",{href:!0});var Ho=n(he);Pt=p(Ho,"Introduction"),Ho.forEach(a),xo.forEach(a),Ao.forEach(a),Tt=f(B),Ze=o(B,"LI",{});var Lo=n(Ze);Je=o(Lo,"P",{});var Mo=n(Je);de=o(Mo,"A",{href:!0});var Oo=n(de);Ct=p(Oo,"Prerequisite"),Oo.forEach(a),Mo.forEach(a),Lo.forEach(a),At=f(B),q=o(B,"LI",{});var bt=n(q);Ke=o(bt,"P",{});var jo=n(Ke);me=o(jo,"A",{href:!0});var Ro=n(me);xt=p(Ro,"Making The Script"),Ro.forEach(a),jo.forEach(a),Ht=f(bt),E=o(bt,"UL",{});var T=n(E);Qe=o(T,"LI",{});var Do=n(Qe);ke=o(Do,"A",{href:!0});var Bo=n(ke);Lt=p(Bo,"Backdrop"),Bo.forEach(a),Do.forEach(a),Mt=f(T),Ve=o(T,"LI",{});var qo=n(Ve);be=o(qo,"A",{href:!0});var So=n(be);Ot=p(So,"Border"),So.forEach(a),qo.forEach(a),jt=f(T),ea=o(T,"LI",{});var Go=n(ea);ve=o(Go,"A",{href:!0});var $o=n(ve);Rt=p($o,"Shadow"),$o.forEach(a),Go.forEach(a),Dt=f(T),aa=o(T,"LI",{});var Fo=n(aa);we=o(Fo,"A",{href:!0});var No=n(we);Bt=p(No,"Rounded Corner"),No.forEach(a),Fo.forEach(a),qt=f(T),ta=o(T,"LI",{});var Yo=n(ta);_e=o(Yo,"A",{href:!0});var Uo=n(_e);St=p(Uo,"Combining Them All"),Uo.forEach(a),Yo.forEach(a),T.forEach(a),bt.forEach(a),Gt=f(B),sa=o(B,"LI",{});var zo=n(sa);oa=o(zo,"P",{});var Xo=n(oa);Ee=o(Xo,"A",{href:!0});var Wo=n(Ee);$t=p(Wo,"Conclusion"),Wo.forEach(a),Xo.forEach(a),zo.forEach(a),B.forEach(a),Aa=f(e),S=o(e,"H1",{id:!0});var Zo=n(S);ye=o(Zo,"A",{href:!0});var Jo=n(ye);Ft=p(Jo,"Introduction"),Jo.forEach(a),Zo.forEach(a),xa=f(e),H=o(e,"P",{});var vt=n(H);Nt=p(vt,"Let\u2019s make our screenshot prettier by using a software called "),G=o(vt,"A",{href:!0,rel:!0});var Ko=n(G);Yt=p(Ko,"Imagemagick"),Ko.forEach(a),Ut=p(vt,". In this post, we will add some fancy effects like backdrop, shadow, border, and rounded corner with a simple script."),vt.forEach(a),Ha=f(e),$=o(e,"H1",{id:!0});var Qo=n($);ge=o(Qo,"A",{href:!0});var Vo=n(ge);zt=p(Vo,"Prerequisite"),Vo.forEach(a),Qo.forEach(a),La=f(e),Ie=o(e,"P",{});var en=n(Ie);Xt=p(en,"Before we make the script, there are a few things that you\u2019ll need to prepare."),en.forEach(a),Ma=f(e),I=o(e,"UL",{});var Xe=n(I);Pe=o(Xe,"LI",{});var go=n(Pe);na=o(go,"STRONG",{});var an=n(na);Wt=p(an,"Imagemagick"),an.forEach(a),Zt=p(go," - obviously"),go.forEach(a),Jt=f(Xe),F=o(Xe,"LI",{});var wt=n(F);la=o(wt,"STRONG",{});var tn=n(la);Kt=p(tn,"Any screenshot software"),tn.forEach(a),Qt=p(wt," - I use "),N=o(wt,"A",{href:!0,rel:!0});var sn=n(N);Vt=p(sn,"flameshot"),sn.forEach(a),wt.forEach(a),es=f(Xe),L=o(Xe,"LI",{});var Ca=n(L);pa=o(Ca,"STRONG",{});var on=n(pa);as=p(on,"Clipboard"),on.forEach(a),ts=p(Ca," - I use "),Y=o(Ca,"A",{href:!0,rel:!0});var nn=n(Y);ss=p(nn,"xclip"),nn.forEach(a),os=p(Ca," (optional)"),Ca.forEach(a),Xe.forEach(a),Oa=f(e),Te=o(e,"P",{});var ln=n(Te);ns=p(ln,"After having all of that, let\u2019s make the script."),ln.forEach(a),ja=f(e),U=o(e,"H1",{id:!0});var pn=n(U);Ce=o(pn,"A",{href:!0});var rn=n(Ce);ls=p(rn,"Making The Script"),rn.forEach(a),pn.forEach(a),Ra=f(e),z=o(e,"H2",{id:!0});var cn=n(z);Ae=o(cn,"A",{href:!0});var un=n(Ae);ps=p(un,"Backdrop"),un.forEach(a),cn.forEach(a),Da=f(e),xe=o(e,"P",{});var fn=n(xe);rs=p(fn,"Backdrop is actually just a really thicc border. Here\u2019s how to do that on imagemagick."),fn.forEach(a),Ba=f(e),X=o(e,"PRE",{class:!0});var kl=n(X);kl.forEach(a),qa=f(e),P=o(e,"P",{});var We=n(P);is=p(We,"You can adjust the color by changing the "),ra=o(We,"CODE",{});var hn=n(ra);cs=p(hn,"bordercolor"),hn.forEach(a),us=p(We," value. I use white because it looks nice to me. You can use HEX, RGB, and RGBA format. For more references, go to "),W=o(We,"A",{href:!0,rel:!0});var dn=n(W);fs=p(dn,"their website"),dn.forEach(a),hs=p(We,"."),We.forEach(a),Sa=f(e),M=o(e,"P",{});var _t=n(M);ds=p(_t,"To adjust the thickness of it, you change the "),ia=o(_t,"CODE",{});var mn=n(ia);ms=p(mn,"border"),mn.forEach(a),ks=p(_t," value. I use 10 here because it\u2019s not too big and it\u2019s not too small for me."),_t.forEach(a),Ga=f(e),Z=o(e,"H2",{id:!0});var kn=n(Z);He=o(kn,"A",{href:!0});var bn=n(He);bs=p(bn,"Border"),bn.forEach(a),kn.forEach(a),$a=f(e),Le=o(e,"P",{});var vn=n(Le);vs=p(vn,"Previously, we made a thicc border as a backdrop, this time we make a thin border before the shadow"),vn.forEach(a),Fa=f(e),J=o(e,"PRE",{class:!0});var bl=n(J);bl.forEach(a),Na=f(e),Me=o(e,"P",{});var wn=n(Me);ws=p(wn,"It\u2019s basically the same, just with a different value."),wn.forEach(a),Ya=f(e),K=o(e,"H2",{id:!0});var _n=n(K);Oe=o(_n,"A",{href:!0});var En=n(Oe);_s=p(En,"Shadow"),En.forEach(a),_n.forEach(a),Ua=f(e),je=o(e,"P",{});var yn=n(je);Es=p(yn,"To give you screenshot a shadow is quite simple. Here\u2019s how to do it."),yn.forEach(a),za=f(e),Q=o(e,"PRE",{class:!0});var vl=n(Q);vl.forEach(a),Xa=f(e),m=o(e,"P",{});var v=n(m);ys=p(v,"To change the shadow color, adjust the first "),ca=o(v,"CODE",{});var gn=n(ca);gs=p(gn,"background"),gn.forEach(a),Is=p(v," value. I use black because black shadow is the only one that is acceptable to me. The "),ua=o(v,"CODE",{});var In=n(ua);Ps=p(In,"40"),In.forEach(a),Ts=p(v," here is the shadow opacity, you can change it to whatever you like. The shadow radius here is "),fa=o(v,"CODE",{});var Pn=n(fa);Cs=p(Pn,"5"),Pn.forEach(a),As=p(v,". This will add to your backdrop thickness. If you have "),ha=o(v,"CODE",{});var Tn=n(ha);xs=p(Tn,"10"),Tn.forEach(a),Hs=p(v," of backdrop and you have "),da=o(v,"CODE",{});var Cn=n(da);Ls=p(Cn,"5"),Cn.forEach(a),Ms=p(v," of border radius then you\u2019ll end up with "),ma=o(v,"CODE",{});var An=n(ma);Os=p(An,"15"),An.forEach(a),js=p(v," of backdrop."),v.forEach(a),Wa=f(e),V=o(e,"H2",{id:!0});var xn=n(V);Re=o(xn,"A",{href:!0});var Hn=n(Re);Rs=p(Hn,"Rounded Corner"),Hn.forEach(a),xn.forEach(a),Za=f(e),De=o(e,"P",{});var Ln=n(De);Ds=p(Ln,"It\u2019s quite a lengthy one, but don\u2019t worry. The only thing we\u2019d change is the border radius."),Ln.forEach(a),Ja=f(e),ee=o(e,"PRE",{class:!0});var wl=n(ee);wl.forEach(a),Ka=f(e),b=o(e,"P",{});var g=n(b);Bs=p(g,"The border radius here is "),ka=o(g,"CODE",{});var Mn=n(ka);qs=p(Mn,"5"),Mn.forEach(a),Ss=p(g,". Change every "),ba=o(g,"CODE",{});var On=n(ba);Gs=p(On,"5"),On.forEach(a),$s=p(g," to whatever you want like "),va=o(g,"CODE",{});var jn=n(va);Fs=p(jn,"10"),jn.forEach(a),Ns=p(g," for example but "),wa=o(g,"CODE",{});var Rn=n(wa);Ys=p(Rn,"5"),Rn.forEach(a),Us=p(g," is the sweet spot for me. For more technical explanation and details you can refer to "),ae=o(g,"A",{href:!0,rel:!0});var Dn=n(ae);zs=p(Dn,"their website"),Dn.forEach(a),g.forEach(a),Qa=f(e),te=o(e,"H2",{id:!0});var Bn=n(te);Be=o(Bn,"A",{href:!0});var qn=n(Be);Xs=p(qn,"Combining Them All"),qn.forEach(a),Bn.forEach(a),Va=f(e),O=o(e,"P",{});var Et=n(O);Ws=p(Et,"Those are all the parts that we need. Let\u2019s combine them together. Make a file called whatever you want and make it executable by using "),_a=o(Et,"CODE",{});var Sn=n(_a);Zs=p(Sn,"chmod +x filename"),Sn.forEach(a),Js=p(Et," and edit the file."),Et.forEach(a),et=f(e),se=o(e,"PRE",{class:!0});var _l=n(se);_l.forEach(a),at=f(e),k=o(e,"P",{});var y=n(k);Ks=p(y,"I use "),Ea=o(y,"CODE",{});var Gn=n(Ea);Qs=p(Gn,"dash"),Gn.forEach(a),Vs=p(y," for my script, but "),ya=o(y,"CODE",{});var $n=n(ya);eo=p($n,"bash"),$n.forEach(a),ao=p(y," or "),ga=o(y,"CODE",{});var Fn=n(ga);to=p(Fn,"zsh"),Fn.forEach(a),so=p(y," will do just fine. I don\u2019t know if it\u2019ll work with "),Ia=o(y,"CODE",{});var Nn=n(Ia);oo=p(Nn,"fish"),Nn.forEach(a),no=p(y," though, I suppose it\u2019ll work just fine. Add your screenshot program to take the image that we will be using. I\u2019m using "),oe=o(y,"A",{href:!0,rel:!0});var Yn=n(oe);lo=p(Yn,"Flameshot"),Yn.forEach(a),po=p(y," so it will look like this."),y.forEach(a),tt=f(e),ne=o(e,"PRE",{class:!0});var El=n(ne);El.forEach(a),st=f(e),j=o(e,"P",{});var yt=n(j);ro=p(yt,"I store the image on "),Pa=o(yt,"CODE",{});var Un=n(Pa);io=p(Un,"/tmp"),Un.forEach(a),co=p(yt," directory because I will copy it to my clipboard and won\u2019t be using the original image."),yt.forEach(a),ot=f(e),le=o(e,"PRE",{class:!0});var yl=n(le);yl.forEach(a),nt=f(e),R=o(e,"P",{});var gt=n(R);uo=p(gt,"The first effect I apply is the rounded corner and store the result in "),Ta=o(gt,"CODE",{});var zn=n(Ta);fo=p(zn,"/tmp/image.png"),zn.forEach(a),ho=p(gt,"."),gt.forEach(a),lt=f(e),pe=o(e,"PRE",{class:!0});var gl=n(pe);gl.forEach(a),pt=f(e),qe=o(e,"P",{});var Xn=n(qe);mo=p(Xn,"Next one is the shadow. I don\u2019t use the small border because it looks weird on a smaller screenshot. You can use it if you like."),Xn.forEach(a),rt=f(e),re=o(e,"PRE",{class:!0});var Il=n(re);Il.forEach(a),it=f(e),Se=o(e,"P",{});var Wn=n(Se);ko=p(Wn,"The last effect I apply is white backdrop. Next step is optional, but if you want to you can add it as well."),Wn.forEach(a),ct=f(e),ie=o(e,"PRE",{class:!0});var Pl=n(ie);Pl.forEach(a),ut=f(e),Ge=o(e,"P",{});var Zn=n(Ge);bo=p(Zn,"I added the last line to copy the result into my clipboard so I can easily paste it anywhere and don\u2019t have to delete the screenshot when I no longer need it. Here\u2019s the result."),Zn.forEach(a),ft=f(e),$e=o(e,"P",{});var Jn=n($e);Fe=o(Jn,"IMG",{src:!0,alt:!0}),Jn.forEach(a),ht=f(e),Ne=o(e,"P",{});var Kn=n(Ne);vo=p(Kn,"Here\u2019s another version"),Kn.forEach(a),dt=f(e),Ye=o(e,"P",{});var Qn=n(Ye);Ue=o(Qn,"IMG",{src:!0,alt:!0}),Qn.forEach(a),mt=f(e),ce=o(e,"H1",{id:!0});var Vn=n(ce);ze=o(Vn,"A",{href:!0});var el=n(ze);wo=p(el,"Conclusion"),el.forEach(a),Vn.forEach(a),kt=f(e),D=o(e,"P",{});var It=n(D);_o=p(It,"Imagemagick is a powerful CLI tools to manipulate an image. It can do so much more, if you\u2019re interested on that then you can go to "),ue=o(It,"A",{href:!0,rel:!0});var al=n(ue);Eo=p(al,"their website"),al.forEach(a),yo=p(It," for some advanced guide. That\u2019s all for this post, thanks for reading and have a nice day \u30C4"),It.forEach(a),this.h()},h(){c(w,"href","#table-of-contents"),c(d,"id","table-of-contents"),c(he,"href","#introduction"),c(de,"href","#prerequisite"),c(me,"href","#making-the-script"),c(ke,"href","#backdrop"),c(be,"href","#border"),c(ve,"href","#shadow"),c(we,"href","#rounded-corner"),c(_e,"href","#combining-them-all"),c(Ee,"href","#conclusion"),c(ye,"href","#introduction"),c(S,"id","introduction"),c(G,"href","https://imagemagick.org"),c(G,"rel","nofollow"),c(ge,"href","#prerequisite"),c($,"id","prerequisite"),c(N,"href","https://flameshot.js.org/"),c(N,"rel","nofollow"),c(Y,"href","https://github.com/astrand/xclip"),c(Y,"rel","nofollow"),c(Ce,"href","#making-the-script"),c(U,"id","making-the-script"),c(Ae,"href","#backdrop"),c(z,"id","backdrop"),c(X,"class","language-bash"),c(W,"href","https://imagemagick.org/script/color.php"),c(W,"rel","nofollow"),c(He,"href","#border"),c(Z,"id","border"),c(J,"class","language-bash"),c(Oe,"href","#shadow"),c(K,"id","shadow"),c(Q,"class","language-bash"),c(Re,"href","#rounded-corner"),c(V,"id","rounded-corner"),c(ee,"class","language-bash"),c(ae,"href","http://www.imagemagick.org/Usage/thumbnails/#rounded"),c(ae,"rel","nofollow"),c(Be,"href","#combining-them-all"),c(te,"id","combining-them-all"),c(se,"class","language-bash"),c(oe,"href","https://flameshot.js.org/"),c(oe,"rel","nofollow"),c(ne,"class","language-bash"),c(le,"class","language-bash"),c(pe,"class","language-bash"),c(re,"class","language-bash"),c(ie,"class","language-bash"),ol(Fe.src,Po="/assets/post/prettify-screenshot-using-imagemagick/rounded.png")||c(Fe,"src",Po),c(Fe,"alt","rounded"),ol(Ue.src,To="/assets/post/prettify-screenshot-using-imagemagick/square.png")||c(Ue,"src",To),c(Ue,"alt","square"),c(ze,"href","#conclusion"),c(ce,"id","conclusion"),c(ue,"href","https://www.imagemagick.org/"),c(ue,"rel","nofollow")},m(e,r){i(e,d,r),t(d,w),t(w,C),i(e,A,r),i(e,h,r),t(h,_),t(_,x),t(x,he),t(he,Pt),t(h,Tt),t(h,Ze),t(Ze,Je),t(Je,de),t(de,Ct),t(h,At),t(h,q),t(q,Ke),t(Ke,me),t(me,xt),t(q,Ht),t(q,E),t(E,Qe),t(Qe,ke),t(ke,Lt),t(E,Mt),t(E,Ve),t(Ve,be),t(be,Ot),t(E,jt),t(E,ea),t(ea,ve),t(ve,Rt),t(E,Dt),t(E,aa),t(aa,we),t(we,Bt),t(E,qt),t(E,ta),t(ta,_e),t(_e,St),t(h,Gt),t(h,sa),t(sa,oa),t(oa,Ee),t(Ee,$t),i(e,Aa,r),i(e,S,r),t(S,ye),t(ye,Ft),i(e,xa,r),i(e,H,r),t(H,Nt),t(H,G),t(G,Yt),t(H,Ut),i(e,Ha,r),i(e,$,r),t($,ge),t(ge,zt),i(e,La,r),i(e,Ie,r),t(Ie,Xt),i(e,Ma,r),i(e,I,r),t(I,Pe),t(Pe,na),t(na,Wt),t(Pe,Zt),t(I,Jt),t(I,F),t(F,la),t(la,Kt),t(F,Qt),t(F,N),t(N,Vt),t(I,es),t(I,L),t(L,pa),t(pa,as),t(L,ts),t(L,Y),t(Y,ss),t(L,os),i(e,Oa,r),i(e,Te,r),t(Te,ns),i(e,ja,r),i(e,U,r),t(U,Ce),t(Ce,ls),i(e,Ra,r),i(e,z,r),t(z,Ae),t(Ae,ps),i(e,Da,r),i(e,xe,r),t(xe,rs),i(e,Ba,r),i(e,X,r),X.innerHTML=ll,i(e,qa,r),i(e,P,r),t(P,is),t(P,ra),t(ra,cs),t(P,us),t(P,W),t(W,fs),t(P,hs),i(e,Sa,r),i(e,M,r),t(M,ds),t(M,ia),t(ia,ms),t(M,ks),i(e,Ga,r),i(e,Z,r),t(Z,He),t(He,bs),i(e,$a,r),i(e,Le,r),t(Le,vs),i(e,Fa,r),i(e,J,r),J.innerHTML=pl,i(e,Na,r),i(e,Me,r),t(Me,ws),i(e,Ya,r),i(e,K,r),t(K,Oe),t(Oe,_s),i(e,Ua,r),i(e,je,r),t(je,Es),i(e,za,r),i(e,Q,r),Q.innerHTML=rl,i(e,Xa,r),i(e,m,r),t(m,ys),t(m,ca),t(ca,gs),t(m,Is),t(m,ua),t(ua,Ps),t(m,Ts),t(m,fa),t(fa,Cs),t(m,As),t(m,ha),t(ha,xs),t(m,Hs),t(m,da),t(da,Ls),t(m,Ms),t(m,ma),t(ma,Os),t(m,js),i(e,Wa,r),i(e,V,r),t(V,Re),t(Re,Rs),i(e,Za,r),i(e,De,r),t(De,Ds),i(e,Ja,r),i(e,ee,r),ee.innerHTML=il,i(e,Ka,r),i(e,b,r),t(b,Bs),t(b,ka),t(ka,qs),t(b,Ss),t(b,ba),t(ba,Gs),t(b,$s),t(b,va),t(va,Fs),t(b,Ns),t(b,wa),t(wa,Ys),t(b,Us),t(b,ae),t(ae,zs),i(e,Qa,r),i(e,te,r),t(te,Be),t(Be,Xs),i(e,Va,r),i(e,O,r),t(O,Ws),t(O,_a),t(_a,Zs),t(O,Js),i(e,et,r),i(e,se,r),se.innerHTML=cl,i(e,at,r),i(e,k,r),t(k,Ks),t(k,Ea),t(Ea,Qs),t(k,Vs),t(k,ya),t(ya,eo),t(k,ao),t(k,ga),t(ga,to),t(k,so),t(k,Ia),t(Ia,oo),t(k,no),t(k,oe),t(oe,lo),t(k,po),i(e,tt,r),i(e,ne,r),ne.innerHTML=ul,i(e,st,r),i(e,j,r),t(j,ro),t(j,Pa),t(Pa,io),t(j,co),i(e,ot,r),i(e,le,r),le.innerHTML=fl,i(e,nt,r),i(e,R,r),t(R,uo),t(R,Ta),t(Ta,fo),t(R,ho),i(e,lt,r),i(e,pe,r),pe.innerHTML=hl,i(e,pt,r),i(e,qe,r),t(qe,mo),i(e,rt,r),i(e,re,r),re.innerHTML=dl,i(e,it,r),i(e,Se,r),t(Se,ko),i(e,ct,r),i(e,ie,r),ie.innerHTML=ml,i(e,ut,r),i(e,Ge,r),t(Ge,bo),i(e,ft,r),i(e,$e,r),t($e,Fe),i(e,ht,r),i(e,Ne,r),t(Ne,vo),i(e,dt,r),i(e,Ye,r),t(Ye,Ue),i(e,mt,r),i(e,ce,r),t(ce,ze),t(ze,wo),i(e,kt,r),i(e,D,r),t(D,_o),t(D,ue),t(ue,Eo),t(D,yo)},p:Dl,d(e){e&&a(d),e&&a(A),e&&a(h),e&&a(Aa),e&&a(S),e&&a(xa),e&&a(H),e&&a(Ha),e&&a($),e&&a(La),e&&a(Ie),e&&a(Ma),e&&a(I),e&&a(Oa),e&&a(Te),e&&a(ja),e&&a(U),e&&a(Ra),e&&a(z),e&&a(Da),e&&a(xe),e&&a(Ba),e&&a(X),e&&a(qa),e&&a(P),e&&a(Sa),e&&a(M),e&&a(Ga),e&&a(Z),e&&a($a),e&&a(Le),e&&a(Fa),e&&a(J),e&&a(Na),e&&a(Me),e&&a(Ya),e&&a(K),e&&a(Ua),e&&a(je),e&&a(za),e&&a(Q),e&&a(Xa),e&&a(m),e&&a(Wa),e&&a(V),e&&a(Za),e&&a(De),e&&a(Ja),e&&a(ee),e&&a(Ka),e&&a(b),e&&a(Qa),e&&a(te),e&&a(Va),e&&a(O),e&&a(et),e&&a(se),e&&a(at),e&&a(k),e&&a(tt),e&&a(ne),e&&a(st),e&&a(j),e&&a(ot),e&&a(le),e&&a(nt),e&&a(R),e&&a(lt),e&&a(pe),e&&a(pt),e&&a(qe),e&&a(rt),e&&a(re),e&&a(it),e&&a(Se),e&&a(ct),e&&a(ie),e&&a(ut),e&&a(Ge),e&&a(ft),e&&a($e),e&&a(ht),e&&a(Ne),e&&a(dt),e&&a(Ye),e&&a(mt),e&&a(ce),e&&a(kt),e&&a(D)}}}function Sl(fe){let d,w;const C=[fe[0],nl];let A={$$slots:{default:[ql]},$$scope:{ctx:fe}};for(let h=0;h<C.length;h+=1)A=Io(A,C[h]);return d=new Bl({props:A}),{c(){xl(d.$$.fragment)},l(h){Hl(d.$$.fragment,h)},m(h,_){Ll(d,h,_),w=!0},p(h,[_]){const x=_&1?Ml(C,[_&1&&tl(h[0]),_&0&&tl(nl)]):{};_&2&&(x.$$scope={dirty:_,ctx:h}),d.$set(x)},i(h){w||(Ol(d.$$.fragment,h),w=!0)},o(h){jl(d.$$.fragment,h),w=!1},d(h){Rl(d,h)}}}const nl={draft:!1,title:"Prettify your screenshot using imagemagick",date:"2020-08-06T00:00:00.000Z",desc:"Wanna make your screenshot a bit more fancy? Say no more, Imagemagick got you covered",tags:["linux"]};function Gl(fe,d,w){return fe.$$set=C=>{w(0,d=Io(Io({},d),sl(C)))},d=sl(d),[d]}class Xl extends Tl{constructor(d){super();Cl(this,d,Gl,Sl,Al,{})}}export{Xl as default,nl as metadata};
