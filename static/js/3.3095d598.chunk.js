(this["webpackJsonpsamurai-the-first"]=this["webpackJsonpsamurai-the-first"]||[]).push([[3],{296:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2NEuc",dialogsItems:"Dialogs_dialogsItems__Nt8oF",dialog:"Dialogs_dialog__1Lrur",dialogWindow:"Dialogs_dialogWindow__3ZSRO",send:"Dialogs_send__1VngN",active:"Dialogs_active__Wt-Yz",messages:"Dialogs_messages__2us7m",message:"Dialogs_message__3NBPC"}},301:function(e,s,a){"use strict";a.r(s);a(1);var i=a(296),n=a.n(i),t=a(12),o=a(0),c=function(e){return Object(o.jsx)("div",{className:n.a.dialog,children:Object(o.jsx)(t.b,{to:"/dialogs/"+e.id,activeClassName:n.a.active,children:e.name})})},d=function(e){return Object(o.jsx)("div",{className:n.a.message,children:e.message})},l=a(7),g=a(129),r=a(130),m=a(37),j=a(36),u=Object(j.a)(100),b=Object(r.a)({form:"dialogAddMessageForm"})((function(e){var s=e.handleSubmit;return Object(o.jsx)("form",{action:"",onSubmit:s,children:Object(o.jsxs)("div",{className:n.a.send,children:[Object(o.jsx)(g.a,{name:"newMessageBody",component:m.b,placeholder:"Your message",validate:[j.b,u]}),Object(o.jsx)("button",{className:n.a.btn,children:"Send"})]})})})),_=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(o.jsx)(c,{name:e.name,id:e.id},e.name)})),i=s.messages.map((function(e){return Object(o.jsx)(d,{message:e.message},e.id)}));if(!1===e.isAuth)return Object(o.jsx)(l.a,{to:"/login"});return Object(o.jsxs)("div",{className:n.a.dialogs,children:[Object(o.jsx)("div",{className:n.a.dialogsItems,children:a}),Object(o.jsxs)("div",{className:n.a.messages,children:[Object(o.jsx)("div",{className:n.a.dialogWindow,children:i}),Object(o.jsx)(b,{onSubmit:function(s){e.sendMessage(s.newMessageBody),console.log(s.newMessageBody)}})]})]})},O=a(128),f=a(11),h=a(127),x=a(9);s.default=Object(x.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(O.b)(s))}}})),h.a)(_)}}]);
//# sourceMappingURL=3.3095d598.chunk.js.map