(this["webpackJsonpani-quotes"]=this["webpackJsonpani-quotes"]||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(11),r=n.n(a),i=(n(25),n(8)),o=n(4),l=n(0),d=function(e){var t=e.toggle;return Object(l.jsxs)("nav",{className:"fixed flex items-center justify-between w-full h-16 text-gray-900 shadow-sm md:justify-evenly bg-foreground ",role:"navigation",children:[Object(l.jsxs)(o.c,{to:"/",className:"pl-8",children:[Object(l.jsx)("span",{className:"text-4xl font-black text-white",style:{letterSpacing:"-0.2em"},children:"A"}),Object(l.jsx)("span",{className:"text-4xl font-black text-blue",children:"Q"})]}),Object(l.jsx)("div",{className:"px-4 cursor-pointer md:hidden",onClick:t,children:Object(l.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),Object(l.jsxs)("div",{className:"hidden pr-8 font-semibold md:block",children:[Object(l.jsx)(o.c,{to:"/",className:"p-4 hover:text-white",children:"Home"}),Object(l.jsx)(o.c,{to:"/authors",className:"p-4 hover:text-white",children:"Authors"}),Object(l.jsx)(o.c,{to:"/topics",className:"p-4 hover:text-white",children:"Topics"}),Object(l.jsx)(o.c,{to:"/quote_of_the_day",className:"p-4 hover:text-white",children:"Quote Of The Day"})]}),Object(l.jsx)("div",{className:"hidden md:block"})]})},u=n(2);function j(e){return e[(t=0,n=e.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];var t,n}function h(e,t){return e.reduce((function(e,n){return(Array.isArray(t(n))?t(n):[t(n)]).map((function(t){e[t]||(e[t]=[]),e[t].push(n)})),e}),{})}var x=function(e){var t=e.image,n=e.title,s=e.content;return Object(l.jsx)("div",{className:"flex flex-col p-3 break-inside",children:Object(l.jsxs)("div",{className:"flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg bg-foreground",children:[Object(l.jsx)("div",{className:"bg-cover h-96",style:{backgroundImage:"url(".concat(t,")")}}),Object(l.jsxs)("div",{className:"flex flex-col flex-1 p-4",children:[Object(l.jsx)("div",{className:"flex-1 mb-2 text-xl text-gray-900",children:Object(l.jsxs)("p",{children:['"',s,'"']})}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("img",{className:"object-cover w-8 h-8 mr-2 rounded-full",src:t}),Object(l.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900",children:n})]})]})]})})};var b=function(e){var t=e.quotes,n=Object(s.useState)(j(t)),c=Object(i.a)(n,2),a=c[0],r=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"flex flex-col items-center h-screen bg-background",children:[Object(l.jsxs)("h1",{className:"mt-32 mb-2 text-4xl font-bold text-center text-white lg:text-7xl md:text-5xl sm:text-4xl",children:[Object(l.jsx)("span",{className:"text-white",children:"Ani"}),Object(l.jsx)("span",{className:"text-blue",children:"Quotes"})]}),Object(l.jsxs)("button",{className:"flex items-center px-3 py-2 my-4 text-lg text-white rounded-md bg-green lg:text-xl md:text-xl sm:text-xl bg-french-blue hover:bg-star-command-blue",onClick:function(){return r(j(t))},children:["Randomize the Quote ",Object(l.jsx)("i",{className:"ml-2.5 fas fa-random"})]}),Object(l.jsx)(x,{image:a.author.image,title:a.author.name,content:a.text})]})})};var m=function(e){var t=e.quotes;return Object(l.jsx)("div",{className:"mx-5 masonry before:box-inherit after:box-inherit",children:t.map((function(e){return Object(l.jsx)(x,{image:e.author.image,title:e.author.name,content:e.text})}))})};var f=function(){return Object(l.jsx)("div",{children:"Loading..."})},g=function(e){var t=e.quotes;return e.isLoading?Object(l.jsx)(f,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{quotes:t}),Object(l.jsx)(m,{quotes:t})]})},O={Death:{icon:"skull-crossbones",image:n.p+"static/media/death.6766dd21.png"},Motivational:{icon:"fire",image:n.p+"static/media/motivational.080c72a4.png"},Love:{icon:"heart",image:n.p+"static/media/love.692a75f3.png"}},p=function(e){var t=e.quotes;if(e.isLoading)return Object(l.jsx)(f,{});var n=h(t,(function(e){return e.topics}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pt-20 mx-32",children:Object(l.jsx)("h1",{className:"text-3xl font-black uppercase",children:"Topics"})}),Object(l.jsx)("div",{className:"grid mx-32 bg-background",children:Object(l.jsx)("div",{className:"flex flex-wrap items-center",children:Object.keys(O).map((function(e){return Object(l.jsxs)("button",{className:"flex flex-col items-center justify-center m-4 text-white w-80 h-80 hover:underline",style:{backgroundImage:"linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(".concat(O[e].image,")"),backgroundSize:"cover"},children:[Object(l.jsx)("i",{className:" fas fa-".concat(O[e].icon," fa-5x"),children:" "}),Object(l.jsx)("p",{className:"text-2xl",children:e})]})}))})}),Object(l.jsx)("div",{className:"mx-32",children:Object.keys(n).sort().map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"text-5xl font-black",children:e}),Object(l.jsx)("div",{children:n[e].map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"py-4 text-2xl font-normal",children:['"',e.text,'" - ',e.author.name]})})}))})]})}))})]})},v=n(18),w=(n(32),function(e){var t=e.quotes;if(e.isLoading)return Object(l.jsx)(f,{});var n=h(t,(function(e){return e.author.name}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pt-20 mx-32",children:Object(l.jsx)("h1",{className:"text-3xl font-black uppercase",children:"Authors"})}),Object(l.jsx)("div",{className:"flex flex-row flex-wrap justify-center",children:Object.keys(n).sort().map((function(e,t){console.log("HERE",n[e]);var s=n[e][0].author;return Object(l.jsx)("button",{className:"flex text-4xl",children:Object(l.jsx)(v.a,{content:s.name,children:Object(l.jsx)("img",{className:"m-4 rounded-lg w-60",src:s.image})})},t)}))})]})}),y=["January","February","March","April","May","June","July","August","September","October","November","December"];var N=function(e){var t=e.quotes,n=e.isLoading,c=Object(s.useState)(new Date),a=Object(i.a)(c,2),r=a[0],o=a[1],d=Object(s.useState)(j(t)),u=Object(i.a)(d,2),h=u[0],b=u[1];return Object(s.useEffect)((function(){var e=setInterval((function(){o(new Date),b(j(t))}),k(r)/10);return function(){clearInterval(e)}}),[]),n?Object(l.jsx)(f,{}):(console.log(k(r)),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen bg-background",children:[Object(l.jsx)("h1",{className:"font-black uppercase text-9xl",children:"Quote Of The Day"}),Object(l.jsxs)("p",{children:[y[r.getMonth()]," ",r.getDate()+q(r.getDate())]})]}),Object(l.jsxs)("div",{children:[" ",r.getSeconds()," "]}),Object(l.jsx)(x,{image:h.author.image,title:h.author.name,content:h.text})]}))};function k(e){return 86400-60*e.getHours()*60-60*e.getMinutes()-e.getSeconds()}function q(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}var I=function(){return Object(l.jsx)("div",{className:"flex items-center justify-center h-16 text-white bg-black",children:Object(l.jsx)("p",{children:"Copyright \xa9 2021 AniQuotes All rights reserved."})})},L=function(e){var t=e.isOpen,n=e.toggle;return Object(l.jsxs)("div",{className:t?"grid grid-rows-4 text-center items-center bg-yellow-500":"hidden",onClick:n,children:[Object(l.jsx)(o.c,{to:"/",className:"p-4",children:"Home"}),Object(l.jsx)(o.c,{to:"/authors",className:"p-4",children:"Authors"}),Object(l.jsx)(o.c,{to:"/topics",className:"p-4",children:"Topics"}),Object(l.jsx)(o.c,{to:"/quote_of_the_day",className:"p-4",children:"Quote Of the Day"})]})},S={496:[{text:"People die if they are killed...",topics:["Death"]}],2754:[{text:"Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",topics:["Leadership"]}],12064:[{text:"You stupid, idiotic, blockhead, mongrel. Or that\u2019s what I\u2019d normally say.",topics:["Love"]}],12295:[{text:"I'm a dragon, You're a tiger. And for centuries, only dragons and tigers have been considered equals. So it doesn't matter that you're not here with me right now, because I'll transcend space and time so I can always be with you. And my feelings for you will never ever change.",topics:["Love"]}],12305:[{text:"I don't want to get so caught up in searching for what I can't see, that I lose sight of what I can.",topics:["Future"]}],55131:[{text:"The best way to tame a mystery is with another mystery.",topics:["Motivational"]}],55133:[{text:"I find myself hard to understand sometimes",topics:["Life"]}],67065:[{text:"If wishes could be granted, if desires could be fulfilled, then I wouldn\u2019t wish or desire for anything after all. The things you\u2019re handed on a silver platter are never genuine, and never everlasting. And that is why I\u2019ll always keep searching.",topics:["Patience"]}]},A={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n        query ($id_in: [Int]) {\n          Page (page: 1) {\n            pageInfo {\n              total\n              currentPage\n              lastPage\n              hasNextPage\n              perPage\n            }\n            characters (id_in: $id_in) {\n              id\n              image {\n                large\n              }\n              name {\n                full\n              }\n            }\n          }\n        }\n      ",variables:{id_in:Object.keys(S)}})};var M=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(i.a)(a,2),j=r[0],h=r[1],x=Object(s.useState)([]),b=Object(i.a)(x,2),m=b[0],f=b[1],O=function(){h(!j)};return Object(s.useEffect)((function(){fetch("https://graphql.anilist.co",A).then((function(e){return e.json()})).then((function(e){var t=[];Object.entries(S).forEach((function(n){var s=Object(i.a)(n,2),c=s[0],a=s[1],r=e.data.Page.characters.find((function(e){return e.id===parseInt(c)}));a.map((function(e){return t.push(Object.assign(e,{author:{image:r.image.large,name:r.name.full}}))}))})),f(t),c(!1)}));var e=function(){window.innerWidth>768&&j&&(h(!1),console.log("i resized"))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(l.jsxs)(o.b,{basename:"/",children:[Object(l.jsx)(d,{toggle:O}),Object(l.jsx)(L,{isOpen:j,toggle:O}),Object(l.jsx)(u.a,{path:"/",exact:!0,component:function(){return Object(l.jsx)(g,{quotes:m,isLoading:n})}}),Object(l.jsx)(u.a,{path:"/authors",component:function(){return Object(l.jsx)(w,{quotes:m,isLoading:n})}}),Object(l.jsx)(u.a,{path:"/topics",component:function(){return Object(l.jsx)(p,{quotes:m,isLoading:n})}}),Object(l.jsx)(u.a,{path:"/quote_of_the_day",component:function(){return Object(l.jsx)(N,{quotes:m,isLoading:n})}}),Object(l.jsx)(I,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(M,{})})}),document.getElementById("root")),T()}},[[33,1,2]]]);
//# sourceMappingURL=main.4f7f3932.chunk.js.map