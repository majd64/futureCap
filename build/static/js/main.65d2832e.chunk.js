(this["webpackJsonpfuture-cap-frontend"]=this["webpackJsonpfuture-cap-frontend"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(0),r=n.n(a),i=n(11),o=n.n(i),s=(n(86),n(35)),l=(n(87),n(23)),d=n(158),u=n(159),j=n(40),b=n.n(j),h=n(12),p=n(148),O=n(153),m=n(67),x=n(156),g=n(160);var f=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),i=n[0],o=n[1],j=Object(h.e)(),f=r.a.useState(null),y=Object(l.a)(f,2),v=y[0],w=y[1],C=function(){w(null)};Object(a.useEffect)((function(){document.body.style="background: linear-gradient(90deg, rgb(46, 186, 198) 0%, rgb(182, 80, 158) 100%);",console.log("fetching"),b.a.get("/coins").then((function(e){o(e.data.coins)})).catch((function(e){}))}),[]);var S=Object(p.a)((function(e){return{inputRoot:{color:"white","& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&.MuiOutlinedInput-input":{color:"white"}},paper:{position:"absolute",width:490,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))(),k=r.a.useState((function(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}})),M=Object(l.a)(k,1)[0],N=r.a.useState(!1),E=Object(l.a)(N,2),T=E[0],A=E[1],F=Object(c.jsxs)("div",{style:M,className:S.paper,children:[Object(c.jsx)("h2",{id:"simple-modal-title",children:"Tip the dev :)"}),Object(c.jsxs)("p",{id:"simple-modal-description",children:["BTC: 1Mqk3gqp9agLV4AtarxzA19GycAuJquWvG ",Object(c.jsx)("br",{}),"ETH: 0x466E7D500ECFE3190E11F61F9c2aa1BD4790c552"]})]});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{open:T,onClose:function(){A(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:F}),Object(c.jsx)(O.a,{className:"ml-4 mt-4",variant:"contained",color:"secondary","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},children:"FutureCap"}),Object(c.jsxs)(m.a,{id:"simple-menu",anchorEl:v,keepMounted:!0,open:Boolean(v),onClose:C,children:[Object(c.jsx)(x.a,{onClick:function(){return window.location.href="https://github.com/majd64/futureCap"},children:"Github"}),Object(c.jsx)(x.a,{onClick:function(){return window.location.href="https://www.youtube.com/channel/UCSI8zjZx3Y-dqCvShs43nyg"},children:"My channel (Eager Money)"}),Object(c.jsx)(x.a,{onClick:function(){A(!0),C()},children:"Tip"})]}),Object(c.jsxs)("div",{class:"home container text-center",style:{color:"white",marginTop:"120px"},children:[Object(c.jsx)("span",{style:{fontSize:"6rem",verticalAlign:"middle",fontWeight:"800"},className:"ml-4 coin-name",children:"FutureCap"}),Object(c.jsx)(u.a,{id:"combo-box-demo",classes:S,options:i,getOptionLabel:function(e){return"".concat(e.name," (").concat(e.symbol.toUpperCase(),")")},onChange:function(e,t){return j.push("/coin/"+t.id)},style:{width:"100%",color:"white"},color:"secondary",renderInput:function(e){return Object(c.jsx)(d.a,Object(s.a)(Object(s.a)({},e),{},{label:"Search for a coin",variant:"outlined"}))}})]})]})},y=n(157),v=n(155),w=n(112),C=n(161);var S=function(e){var t=Object(h.e)(),n=Object(a.useState)(null),r=Object(l.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)(!1),d=Object(l.a)(s,2),u=d[0],j=d[1],m=Object(a.useState)(!0),x=Object(l.a)(m,2),g=x[0],f=x[1],S=Object(a.useState)(0),k=Object(l.a)(S,2),M=k[0],N=k[1];function E(){M<i.phrases.length-1&&(N((function(e){return e+1})),setTimeout(E,1e3))}Object(a.useEffect)((function(){document.body.style="background: #383D51;",i?M>=i.phrases.length&&f(!1):b.a.get("/coins/"+e.match.params.id).then((function(e){o(e.data.coin),console.log(e.data.coin)})).catch((function(e){}))}),[M]);var T=Object(p.a)((function(e){return{root:{width:"50%",background:"linear-gradient(90deg, rgb(46, 186, 198) 0%, rgb(182, 80, 158) 100%)"},justify:"center",button:{margin:e.spacing(1)}}}))();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{variant:"contained",color:"secondary",className:"".concat(T.button," ml-4 mt-4"),onClick:function(){return t.push("/")},children:"Home"}),Object(c.jsxs)("div",{style:{color:"white",marginTop:"70px"},class:"coin container text-center",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{style:{verticalAlign:"middle",height:"180px"},src:i?i.image:""}),Object(c.jsx)("span",{style:{fontSize:"6rem",verticalAlign:"middle",fontWeight:"800"},className:"ml-4 coin-name",children:i?i.name:""})]}),Object(c.jsx)("div",{className:"price mt-4",children:i?Object(c.jsxs)("h1",{className:"text-center",style:{fontSize:"3.5rem",textAlign:"right"},children:["$".concat(i.price)," ",Object(c.jsx)("span",{style:{verticalAlign:"middle",fontSize:"1.5rem",color:i.change<0?"red":"green"},children:"".concat(i.change>0?"+":"").concat(i.change,"%")})]}):null}),Object(c.jsx)("div",{className:"text-center",style:{marginTop:"70px"},children:u?Object(c.jsx)("div",{children:g?Object(c.jsxs)("div",{children:[Object(c.jsx)(y.a,{color:"secondary"}),Object(c.jsx)("h5",{className:"mt-3",style:{fontWeight:"300"},children:i?i.phrases[M]:""})]}):Object(c.jsx)("div",{children:Object(c.jsxs)(v.a,{className:T.root,style:{left:"25%",border:"5px solid white",borderRadius:"5px"},children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(C.a,{primary:"Lower target",secondary:"$".concat(i.lower)})}),Object(c.jsx)(w.a,{children:Object(c.jsx)(C.a,{primary:"Medium target",secondary:"$".concat(i.middle)})}),Object(c.jsx)(w.a,{children:Object(c.jsx)(C.a,{primary:"Upper target",secondary:"$".concat(i.upper)})})]})})}):Object(c.jsx)(O.a,{variant:"contained",className:T.button,onClick:function(){j(!0),setTimeout(E,1500)},style:{background:"linear-gradient(90deg, rgb(46, 186, 198) 0%, rgb(182, 80, 158) 100%)",width:"300px",height:"50px",color:"white",fontWeight:"400"},children:"Generate 2021 price targets"})})]})]})},k=n(30);n(110);var M=function(){return Object(c.jsxs)(k.a,{children:[Object(c.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(c.jsx)(f,Object(s.a)({},e))}}),Object(c.jsx)(h.a,{path:"/coin/:id",exact:!0,render:function(e){return Object(c.jsx)(S,Object(s.a)({},e))}})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root"))},86:function(e,t,n){},87:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.65d2832e.chunk.js.map