(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3:function(e,t,r){Promise.resolve().then(r.bind(r,7192))},7192:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=r(7437),n=r(2265),a=r(6316),i=r(7742),o=r(3167),u=r(1367);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:c=!1,...l}=e,f=c?a.g7:"button";return(0,s.jsx)(f,{className:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.m6)((0,o.W)(t))}(d({variant:n,size:i,className:r})),ref:t,...l})});function l(e){let{cardObj:t,id:r,handleClick:n}=e,a=t.status?" flipped "+t.status:"";return(0,s.jsx)(c,{className:"btn-primary 2xl:w-[200px] 2xl:h-[200px]"+a,onClick:()=>n(r),children:t.status?(0,s.jsx)("img",{className:"rounded-md",src:t.image,width:500,height:500,alt:"Picture of Charlie"}):""})}c.displayName="Button";var f=function(){let[e,t]=(0,n.useState)([]),[r,a]=(0,n.useState)(-1),[i,o]=(0,n.useState)(!1);function u(s){!0===i||"matched"===e[s].status||(-1===r?(e[s].status=""===e[s].status?"flippedC":"",t([...e]),a(s)):s==r||(e[s].id==e[r].id?(e[r].status="matched",e[s].status="matched flippedC",t([...e]),a(-1)):(e[s].status="different flippedC",e[r].status="different",t([...e]),o(!0),setTimeout(()=>{e[r].status="",e[s].status="",t([...e]),a(-1),o(!1)},1e3))))}return(0,n.useEffect)(()=>{t(function(){for(var e=[],t=0;t<8;t++)e.push({id:t,image:"/img/charlie-"+t+".jpg",status:""}),e.push({id:t,image:"/img/charlie-"+t+".jpg",status:""});return e.sort(()=>.5-Math.random())}())},[]),(0,s.jsx)("div",{className:"grid 2xl:grid-cols-4 grid-flow-row gap-5",children:e.map((e,t)=>(0,s.jsx)(l,{cardObj:e,id:t,handleClick:u},t))})}}},function(e){e.O(0,[104,971,69,744],function(){return e(e.s=3)}),_N_E=e.O()}]);