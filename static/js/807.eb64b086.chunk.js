"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[807],{7807:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,a,o,s,c,u,d,l,p,m,x=t(6916),h=function(n){return n.contact.items},f=function(n){return n.filter},b=function(n){return n.contact.isLoading},g=function(n){return n.contact.error},j=(0,x.P1)([h,f],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),Z=t(9434),w=t(168),y=t(5867),v=y.ZP.h1(r||(r=(0,w.Z)(["\ndisplay: block;\nmargin-top: 0px;\nmargin-bottom: ",";\ntext-align: start;\n"])),(function(n){return n.theme.spacing(10)})),P=t(184),k=function(n){var e=n.title;return(0,P.jsx)(v,{children:e})},C=t(5705),q=y.ZP.button(i||(i=(0,w.Z)(["\nwidth: 100px;\ndisplay: block;\npadding: ",";\ntext-align: center;\nfont-size: 18px;\nborder: 1px solid ",";\nborder-radius: 5px;\nbox-shadow: rgb(169, 158, 158) 0px 2px 5px 0px;\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.border})),L=(0,y.ZP)(C.l0)(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap:  ",";\n  margin-top: ",";\n  padding:  ",";\n  max-width: 400px;\n  border: 3px solid ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.black})),z=(0,y.ZP)(C.gN)(o||(o=(0,w.Z)(["\n  padding: ",";\n  font: inherit;\n"])),(function(n){return n.theme.spacing(1)})),_=y.ZP.label(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom:  ",";\n  gap:  ",";\n  font-weight: normal;\n  text-align: start;\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)})),F=(0,y.ZP)(C.Bc)(c||(c=(0,w.Z)(["\ncolor: ",";\n"])),(function(n){return n.theme.colors.red})),N=t(6727),A=t(1437),I=N.Ry().shape({name:N.Z_().min(2,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:N.Z_().min(10,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").max(14,"Too Long!").required("Required")}),B=function(){var n=(0,Z.v9)(h),e=(0,Z.I0)();return(0,P.jsx)("div",{children:(0,P.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:I,onSubmit:function(t,r){var i;i=t,n.some((function(n){return i.name.toLowerCase().trim()===n.name.toLowerCase()}))?alert("".concat(i.name," is already in contacts")):e((0,A.uK)(i)),r.resetForm()},children:(0,P.jsxs)(L,{children:[(0,P.jsxs)(_,{children:["Name",(0,P.jsx)(z,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,P.jsx)(F,{name:"name",component:"span"})]}),(0,P.jsxs)(_,{children:["Number",(0,P.jsx)(z,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,P.jsx)(F,{name:"number",component:"span"})]}),(0,P.jsx)(q,{type:"submit",children:"Submit"})]})})})},J=t(2634),M=y.ZP.li(u||(u=(0,w.Z)(["\nwidth: 500px;\ndisplay: flex;\njustify-content: space-between;\nmargin-top: 15px;\nmargin-left: 20px;\nfont-weight: normal;\nfont-size: 22px;\n"]))),R=y.ZP.button(d||(d=(0,w.Z)(["\nwidth: 100px;\ndisplay: block;\npadding: ",";\ntext-align: center;\nfont-size: 18px;\nborder: 1px solid ",";\nborder-radius: 5px;\nbox-shadow: rgb(169, 158, 158) 0px 2px 5px 0px;\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.border})),S=function(){var n=(0,Z.v9)(j),e=(0,Z.I0)();return(0,P.jsx)("ul",{children:n.map((function(n){return(0,P.jsxs)(M,{children:[n.name,":  ",n.number,(0,P.jsx)(R,{type:"button",onClick:function(){return t=n.id,e((0,A.GK)(t));var t},children:"Delete"})]},n.id)}))})},E=y.ZP.form(l||(l=(0,w.Z)(["\n/* padding:   ","; */\n"])),(function(n){return n.theme.spacing(4)})),K=y.ZP.label(p||(p=(0,w.Z)(["\ndisplay: flex;\nflex-direction: column;\nfont-weight: normal;\nfont-size: 22px;\n"]))),D=y.ZP.input(m||(m=(0,w.Z)(["\nwidth: 350px;\nheight: 30px;\nborder: 3px solid ",";"])),(function(n){return n.theme.colors.darkblue})),G=t(6895),T=(0,t(9829).x0)(),V=function(){var n=(0,Z.v9)(f),e=(0,Z.I0)();return(0,P.jsx)(E,{children:(0,P.jsxs)(K,{children:["Find contacts by name",(0,P.jsx)(D,{value:n,id:T,onChange:function(n){return e((0,G.M)(n.target.value))}})]})})},H=t(2791);function O(){var n=(0,Z.v9)(g),e=(0,Z.v9)(b),t=(0,Z.I0)();return(0,H.useEffect)((function(){t((0,A.yF)())}),[t]),(0,P.jsxs)("div",{children:[e&&(0,P.jsx)("p",{children:"...isLoading"}),n&&(0,P.jsx)("p",{children:"Error"}),(0,P.jsx)(k,{title:"Phonebook"}),(0,P.jsx)(B,{}),(0,P.jsx)(J.q,{children:"Contacts"}),(0,P.jsx)(V,{}),(0,P.jsx)(S,{})]})}}}]);
//# sourceMappingURL=807.eb64b086.chunk.js.map