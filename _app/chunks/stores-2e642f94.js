import{a0 as i}from"./vendor-f73903c8.js";var o={siteName:"IHTFY",siteUrl:"https://blog.ihtfy.com/",github:"https://github.com/IHTFY/",twitter:"https://twitter.com/@ihtfy/",instagram:"https://www.instagram.com/ihtfy/",youtube:"https://www.youtube.com/user/ihopethisfindsyou",tiktok:"https://www.tiktok.com/@ihtfy",email:"site@ihtfy.com",desc:"IHTFY's personal website",keywords:["personal","website","blog","article"]};const s=()=>{const t=i("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},a={subscribe(t){return s().page.subscribe(t)}},n={subscribe(t){return s().navigating.subscribe(t)}};export{o as d,n,a as p};
