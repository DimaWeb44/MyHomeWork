(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),s=n.n(c),i=(n(95),n(74)),o=n.n(i),l=n(33),j=n(13),u=n(1);var d=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},b=n(26),h=n.n(b);var x=function(e){return Object(u.jsxs)("div",{className:h.a.message,children:[Object(u.jsx)("img",{src:e.avatar,alt:"avatar",className:h.a.avatar}),Object(u.jsx)("div",{className:h.a.corner}),Object(u.jsxs)("div",{className:h.a.content,children:[Object(u.jsx)("div",{className:h.a.message_name,children:Object(u.jsx)("span",{children:e.name})}),Object(u.jsx)("div",{className:h.a.message_text,children:e.message}),Object(u.jsx)("div",{className:h.a.message_time,children:Object(u.jsx)("span",{children:e.time})})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",O="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",p="22:00";var f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(x,{avatar:m,name:_,message:O,time:p}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},g=n(9),v=n(148),C=n(151),k=n(79),y=n.n(k);var N=function(e){return Object(u.jsxs)(v.a,{container:!0,spacing:1,columns:1,children:[Object(u.jsx)(v.a,{style:{padding:"15px"},children:e.affair.name}),Object(u.jsxs)(v.a,{style:{padding:"15px"},color:"high"===e.affair.priority?"blue":"low"===e.affair.priority?"green":"\npurple",children:[" ",e.affair.priority]}),Object(u.jsx)(C.a,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:Object(u.jsx)(y.a,{})})]})},S=n(150);var w=function(e){var t=e.data.map((function(t){return Object(u.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)(v.a,{children:[Object(u.jsxs)(v.a,{spacing:3,children:[" ",t," "]}),Object(u.jsxs)(v.a,{spacing:4,children:[Object(u.jsx)(S.a,{color:"inherit",variant:"all"===e.filter?"contained":"outlined",onClick:function(){return e.setFilter("all")},children:"All"}),Object(u.jsx)(S.a,{variant:"high"===e.filter?"contained":"outlined",color:"primary",onClick:function(){return e.setFilter("high")},children:"High"}),Object(u.jsx)(S.a,{variant:"middle"===e.filter?"contained":"outlined",color:"secondary",onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(u.jsx)(S.a,{variant:"low"===e.filter?"contained":"outlined",color:"success",onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},H=n(152),T=n(153),A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(r.useState)(A),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(H.a,{children:Object(u.jsx)(v.a,{container:!0,spacing:2,style:{padding:"25px"},children:Object(u.jsx)(T.a,{elevation:6,style:{padding:"15px"},children:Object(u.jsx)(w,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})})})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},I=n(15),M=n(145),P=n(144),E=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onKeyPress,i=e.onBlur;return Object(u.jsx)(H.a,{children:Object(u.jsxs)(v.a,{container:!0,spacing:2,style:{padding:"25px"},children:[Object(u.jsx)(M.a,{variant:"outlined",label:"Type value",value:t,onChange:n,helperText:a,error:!!a,onKeyPress:s,onBlur:i}),Object(u.jsx)(v.a,{children:Object(u.jsx)(C.a,{onClick:r,color:"primary",onBlur:i,children:Object(u.jsx)(P.a,{fontSize:"large"})})}),Object(u.jsx)(v.a,{children:c})]})})},F=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(g.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(null),l=Object(g.a)(o,2),j=l[0],d=l[1],b=function(){""!==s.trim()?(n(s),i(""),alert("Hello ".concat(s,"!"))):d("Title is required")},h=t.length;return Object(u.jsx)(E,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:b,error:j,totalUsers:h,onKeyPress:function(e){d(null),"Enter"===e.key&&b()},onBlur:function(){return d(null)}})},W=n(147);var J=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(F,{users:n,addUserCallback:function(e){a([].concat(Object(I.a)(n),[{_id:Object(W.a)(),name:e}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},K=n(36),U=n(37),q=n(65),Y=n.n(q),D=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]);"".concat(Y.a.error," ").concat(i||""),"".concat(Y.a.errorInput," ").concat(s);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(M.a,{value:Object(K.a)({},o).value,variant:"filled",label:"Type value",helperText:c,error:!!c,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},margin:"dense"})})},G=n(66),L=n.n(G),R=n(67),X=n.n(R),Z=function(e){var t=e.red,n=e.className,r=Object(U.a)(e,["red","className"]),a="".concat(t?X.a.red:X.a.default," ").concat(n);return Object(u.jsx)("button",Object(K.a)({className:a},r))},z=n(68),Q=n.n(z),V=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(K.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(u.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var $=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(g.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:L.a.column,children:[Object(u.jsx)(D,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(D,{className:L.a.blue}),Object(u.jsx)(Z,{children:"default"}),Object(u.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(Z,{disabled:!0,children:"disabled"}),Object(u.jsx)(V,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(V,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ee=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),Object(u.jsx)(B,{}),Object(u.jsx)(J,{}),Object(u.jsx)($,{})]})};var te=function(){return Object(u.jsx)("div",{children:"JuniorPlus"})};var ne=function(){return Object(u.jsx)("div",{children:"Junior"})},re="/pre-junior",ae="/junior",ce="/junior-plus";var se=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{path:"/",element:function(){return Object(u.jsx)(j.a,{to:re})}}),Object(u.jsx)(j.b,{path:re,element:Object(u.jsx)(ee,{})}),Object(u.jsx)(j.b,{path:ae,element:Object(u.jsx)(ne,{})}),Object(u.jsx)(j.b,{path:ce,element:Object(u.jsx)(te,{})}),"// add routes",Object(u.jsx)(j.b,{element:function(){return Object(u.jsx)(d,{})}})]})})},ie=n(27),oe=n.n(ie);var le=function(){return Object(u.jsxs)("div",{className:oe.a.hamburger_menu,children:[Object(u.jsx)("input",{id:oe.a.menu__toggle,type:"checkbox"}),Object(u.jsx)("label",{className:oe.a.menu__btn,htmlFor:oe.a.menu__toggle,children:Object(u.jsx)("span",{})}),Object(u.jsxs)("div",{className:oe.a.menu__box,children:[Object(u.jsx)(l.b,{to:re,className:oe.a.menu__item,children:"  PreJunior"}),Object(u.jsx)(l.b,{to:ae,className:oe.a.menu__item,children:"  Junior"}),Object(u.jsx)(l.b,{to:ce,className:oe.a.menu__item,children:"  JuniorPlus"})]})]})};var je=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(le,{}),Object(u.jsx)(se,{})]})})};var ue=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(je,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,n){e.exports={message:"Message_message__1sOL0",avatar:"Message_avatar__1arun",content:"Message_content__2_kOF",corner:"Message_corner__6ZHWg",message_name:"Message_message_name__2DjE3",message_text:"Message_message_text__3_oI4",message_time:"Message_message_time__WteIh"}},27:function(e,t,n){e.exports={nav:"Header_nav__3r3xr",item:"Header_item__3ttJq",active:"Header_active__1y-CI",hamburger_menu:"Header_hamburger_menu__1HlsH",menu__toggle:"Header_menu__toggle__3eSKB",menu__btn:"Header_menu__btn__31YAw",menu__box:"Header_menu__box__3CvaH",menu__item:"Header_menu__item__2Vgwy"}},65:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__MkTes",errorInput:"SuperInputText_errorInput__hg_iu",error:"SuperInputText_error__BdFgB"}},66:function(e,t,n){e.exports={blue:"HW4_blue__2WtYy",column:"HW4_column__3DTxC",testSpanError:"HW4_testSpanError__3BdXM"}},67:function(e,t,n){e.exports={default:"SuperButton_default__1581i",red:"SuperButton_red__1QGuA"}},68:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__37Mkv",spanClassName:"SuperCheckbox_spanClassName__2R8j7"}},74:function(e,t,n){e.exports={App:"App_App__14c_9"}},95:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.c48b6057.chunk.js.map