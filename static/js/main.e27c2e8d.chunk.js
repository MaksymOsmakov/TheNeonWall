(this["webpackJsonpsamurai-the-first"]=this["webpackJsonpsamurai-the-first"]||[]).push([[0],{11:function(e,t,s){e.exports={selectedPage:"Users_selectedPage__2_zVH",pagination_section:"Users_pagination_section__LNkoo",card_wrapper:"Users_card_wrapper__2wW0L",card_ava:"Users_card_ava__ksb9A",avatar:"Users_avatar__3REZI",btn_wrapper:"Users_btn_wrapper__2Ty7p",card_description:"Users_card_description__krsQo"}},14:function(e,t,s){e.exports={wrapper:"Friends_wrapper__3UPDi",avatar:"Friends_avatar__3U3nN",name:"Friends_name__1J920",active:"Friends_active__1rwUB",glow:"Friends_glow__39wXE"}},15:function(e,t,s){e.exports={backgroundImg:"ProfileInfo_backgroundImg__3WFlW",profile:"ProfileInfo_profile__2BSV5",avatar:"ProfileInfo_avatar__2BqnH",description:"ProfileInfo_description__3An29",profileBackImage:"ProfileInfo_profileBackImage__181OG"}},16:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__fflyA",posts:"MyPosts_posts__2tCHX",addWrapper:"MyPosts_addWrapper__CInbJ"}},17:function(e,t,s){e.exports={item:"Post_item__2ExRZ",message:"Post_message__37Ll4",likesWrapper:"Post_likesWrapper__2ke5F",likes:"Post_likes__zxN4F"}},37:function(e,t,s){e.exports={header:"Header_header__1rfte"}},4:function(e,t,s){e.exports={nav:"Nav_nav__3lwy4",fiendsElementsWrapper:"Nav_fiendsElementsWrapper__UO8fL",item:"Nav_item__3prYl",pulse:"Nav_pulse__EHh7u",active:"Nav_active__3rpIX",glow:"Nav_glow__2Rvlt",navItems:"Nav_navItems__3xbUD",friendsElements:"Nav_friendsElements__3IN5S"}},40:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,77)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))},n=s(26),r=s(21),c=s(3),i="UPDATE_NEW_MESSAGE_BODY",o="SEND_MESSAGE",l={messages:[{id:2,message:"low"},{id:1,message:"hi"},{id:3,message:"mid"},{id:4,message:"lol"},{id:5,message:"senior"},{id:6,message:"jun"}],newMessageBody:"",dialogs:[{id:1,name:"Poncho"},{id:2,name:"Rick"},{id:3,name:"Morty"},{id:4,name:"Max"},{id:5,name:"Birdperson"},{id:6,name:"Mr.Poopybutthole"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),{},{newMessageBody:t.body});case o:var s=e.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(r.a)(e.messages),[{id:7,message:s}])});default:return e}},u={posts:[{id:1,message:"PonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoomPonchoBoom",likesCount:12},{id:2,message:"RickAss",likesCount:19}],newPostText:"it-kamasutra"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s={id:3,message:e.newPostText,likesCount:0},a=Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[s]),newPostText:""});return a;case"UPDATE-NEW-POST-TEXT":return Object(c.a)(Object(c.a)({},e),{},{newPostText:t.newText});default:return e}},p={friends:[{id:1,name:"Octopus Man",avatar:"https://rickandmortyapi.com/api/character/avatar/254.jpeg"},{id:2,name:"Amish Cyborg",avatar:"https://rickandmortyapi.com/api/character/avatar/16.jpeg"},{id:3,name:"Baby Wizard",avatar:"https://rickandmortyapi.com/api/character/avatar/31.jpeg"},{id:4,name:"M. Queen",avatar:"https://rickandmortyapi.com/api/character/avatar/533.jpeg"}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return e},g="FOLLOW",b="UNFOLLOW",h="SET_USERS",_="SET_CURRENT_PAGE",O="SET_TOTAL_USERS_COUNT",v={users:[],pageSize:5,totalUsersCount:21,currentPage:3},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case b:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case h:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case _:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case O:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.count});default:return e}},x=Object(n.a)({dialogsPage:d,profilePage:j,sidePage:m,usersPage:f}),N=Object(n.b)(x);window.store=N;var P=N,w=s(1),y=s.n(w),k=s(20),C=s.n(k),E=(s(49),s(50),s(37)),S=s.n(E),T=s(0);var U=function(){return Object(T.jsx)("header",{className:S.a.header,children:Object(T.jsx)("h1",{children:"T H E \xa0\xa0\xa0\xa0N E O N \xa0\xa0\xa0\xa0W A L L"})})},I=s(10),B=s(7),A=s(4),M=s.n(A),W=s(14),D=s.n(W),L=function(e){return Object(T.jsxs)("div",{className:D.a.wrapper,children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{alt:"avatar",className:D.a.avatar,src:e.avatar})}),Object(T.jsx)("div",{children:Object(T.jsx)(B.b,{to:"/dialogs/friend/"+e.id,className:D.a.name,activeClassName:D.a.active,children:e.name})})]})},F=function(e){var t=e.sidePage.friends.map((function(e){return Object(T.jsx)(L,{name:e.name,avatar:e.avatar,id:e.id})}));return Object(T.jsxs)("nav",{className:M.a.nav,children:[Object(T.jsxs)("div",{className:M.a.navItems,children:[Object(T.jsx)("div",{className:M.a.item,children:Object(T.jsx)(B.b,{activeClassName:M.a.active,to:"/profile",children:"Profile"})}),Object(T.jsx)("div",{className:M.a.item,children:Object(T.jsx)(B.b,{activeClassName:M.a.active,to:"/dialogs",children:"Messages"})}),Object(T.jsx)("div",{className:M.a.item,children:Object(T.jsx)(B.b,{activeClassName:M.a.active,to:"/users",children:"Users"})}),Object(T.jsx)("div",{className:M.a.item,children:Object(T.jsx)(B.b,{activeClassName:M.a.active,to:"/news",children:"News"})}),Object(T.jsx)("div",{className:M.a.item,children:Object(T.jsx)(B.b,{activeClassName:M.a.active,to:"/music",children:"Music"})}),Object(T.jsx)("div",{className:M.a.item,children:Object(T.jsx)(B.b,{activeClassName:M.a.active,to:"/settings",children:"Settings"})})]}),Object(T.jsxs)("div",{className:M.a.fiendsElementsWrapper,children:[Object(T.jsx)("div",{children:Object(T.jsx)("h2",{children:"Friends"})}),Object(T.jsx)("div",{className:M.a.friendsElements,children:t})]})]})},R=Object(I.b)((function(e){return{sidePage:e.sidePage}}))(F),z=s(40),G=s.n(z),Y=s(15),q=s.n(Y),H=function(e){return Object(T.jsxs)("div",{className:q.a.profile,children:[Object(T.jsx)("img",{className:q.a.backgroundImg,alt:"img",src:"https://www.teahub.io/photos/full/32-324376_dual-monitor-wallpaper-rick-and-morty.jpg"}),Object(T.jsx)("img",{className:q.a.avatar,alt:"avatar",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKacOtpxn6W75Zqndg3yA_mg8xKcPtnnApg&usqp=CAU"}),Object(T.jsx)("div",{className:q.a.description,children:Object(T.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})]})},X=s(16),Z=s.n(X),J=s(17),K=s.n(J);var V=function(e){return Object(T.jsxs)("div",{className:K.a.item,children:[Object(T.jsx)("img",{alt:"avatar",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKacOtpxn6W75Zqndg3yA_mg8xKcPtnnApg&usqp=CAU"}),Object(T.jsx)("p",{className:K.a.message,children:e.message}),Object(T.jsx)("div",{className:K.a.likesWrapper,children:Object(T.jsxs)("span",{className:K.a.likes,children:["Like: ",e.like]})})]})};var Q=function(e){var t=e.posts.map((function(e){return Object(T.jsx)(V,{message:e.message,like:e.likesCount})})),s=y.a.createRef();return Object(T.jsxs)("div",{className:Z.a.postsBlock,children:[Object(T.jsxs)("div",{className:Z.a.addWrapper,children:[Object(T.jsx)("textarea",{ref:s,onChange:function(){var t=s.current.value;e.updateNewPostText(t)},value:e.newPostText}),Object(T.jsx)("button",{onClick:function(){e.addPost()},className:Z.a.btn,children:"Add Post"})]}),Object(T.jsx)("div",{className:Z.a.posts,children:t})]})},$=Object(I.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t);e(s)},addPost:function(){e({type:"ADD-POST"})}}}))(Q);var ee=function(e){return Object(T.jsxs)("div",{className:G.a.profile,children:[Object(T.jsx)(H,{}),Object(T.jsx)($,{store:e.store})]})},te=s(2),se=function(e){return Object(T.jsx)("div",{children:Object(T.jsx)("h1",{children:"news"})})},ae=function(){return Object(T.jsx)("div",{children:Object(T.jsx)("h1",{children:"Music"})})},ne=function(){return Object(T.jsx)("div",{children:Object(T.jsx)("h1",{children:"setting"})})},re=s(9),ce=s.n(re),ie=function(e){return Object(T.jsx)("div",{className:ce.a.dialog,children:Object(T.jsx)(B.b,{to:"/dialogs/"+e.id,activeClassName:ce.a.active,children:e.name})})},oe=function(e){return Object(T.jsx)("div",{className:ce.a.message,children:e.message})},le=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(T.jsx)(ie,{name:e.name,id:e.id},e.name)})),a=t.messages.map((function(e){return Object(T.jsx)(oe,{message:e.message},e.id)})),n=t.newMessageBody;return Object(T.jsxs)("div",{className:ce.a.dialogs,children:[Object(T.jsx)("div",{className:ce.a.dialogsItems,children:s}),Object(T.jsxs)("div",{className:ce.a.messages,children:[Object(T.jsx)("div",{className:ce.a.dialogWindow,children:a}),Object(T.jsxs)("div",{className:ce.a.send,children:[Object(T.jsx)("textarea",{placeholder:"Your message",onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},value:n}),Object(T.jsx)("button",{onClick:function(){e.sendMessage()},className:ce.a.btn,children:"Send"})]})]})]})},de=Object(I.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:"UPDATE_NEW_MESSAGE_BODY",body:e}}(t))},sendMessage:function(){e({type:"SEND_MESSAGE"})}}}))(le),ue=s(41),je=s(42),pe=s(44),me=s(43),ge=s(25),be=s.p+"static/media/avatarIsNull.80e4c874.png",he=s(11),_e=s.n(he),Oe=function(e){Object(pe.a)(s,e);var t=Object(me.a)(s);function s(){var e;Object(ue.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),ge.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.setUsers(t.data.items)}))},e}return Object(je.a)(s,[{key:"componentDidMount",value:function(){var e=this;ge.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalUsersCount/this.props.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:_e.a.pagination_section,children:s.map((function(t){return Object(T.jsx)("span",{className:e.props.currentPage===t&&_e.a.selectedPage,onClick:function(s){e.onPageChanged(t)},children:t})}))}),this.props.users.map((function(t){return Object(T.jsxs)("div",{className:_e.a.card_wrapper,children:[Object(T.jsxs)("div",{className:_e.a.card_ava,children:[Object(T.jsx)("img",{className:_e.a.avatar,src:null!=t.photos.small?t.photos.small:be,alt:"ava"}),Object(T.jsx)("div",{className:_e.a.btn_wrapper,children:t.followed?Object(T.jsx)("button",{title:"You are observed this user",onClick:function(){e.props.unfollow(t.id)},children:"Unfollow"}):Object(T.jsx)("button",{title:"You are not observed this user",onClick:function(){e.props.follow(t.id)},children:"Follow"})})]}),Object(T.jsxs)("div",{className:_e.a.card_description,children:[Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:t.name}),Object(T.jsx)("li",{children:t.status})]}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:"u.location.city"}),Object(T.jsx)("li",{children:"u.location.country"})]})]})]},t.id)}))]})}}]),s}(y.a.Component),ve=Object(I.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",userId:e}}(t))},unfollow:function(t){e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){e(function(e){return{type:h,users:e}}(t))},setCurrentPage:function(t){e({type:_,currentPage:t})},setTotalUsersCount:function(t){e({type:O,count:t})}}}))(Oe);var fe=function(){return Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(U,{}),Object(T.jsx)(R,{}),Object(T.jsxs)("div",{className:"content",children:[Object(T.jsx)(te.a,{path:"/dialogs",render:function(){return Object(T.jsx)(de,{})}}),Object(T.jsx)(te.a,{path:"/profile",render:function(){return Object(T.jsx)(ee,{})}}),Object(T.jsx)(te.a,{path:"/users",render:function(){return Object(T.jsx)(ve,{})}}),Object(T.jsx)(te.a,{path:"/news",render:function(){return Object(T.jsx)(se,{})}}),Object(T.jsx)(te.a,{path:"/music",render:function(){return Object(T.jsx)(ae,{})}}),Object(T.jsx)(te.a,{path:"/settings",render:function(){return Object(T.jsx)(ne,{})}})]})]})};C.a.render(Object(T.jsx)(y.a.StrictMode,{children:Object(T.jsx)(B.a,{children:Object(T.jsx)(I.a,{store:P,children:Object(T.jsx)(fe,{})})})}),document.getElementById("root")),a()},9:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2NEuc",dialogsItems:"Dialogs_dialogsItems__Nt8oF",dialog:"Dialogs_dialog__1Lrur",dialogWindow:"Dialogs_dialogWindow__3ZSRO",send:"Dialogs_send__1VngN",active:"Dialogs_active__Wt-Yz",glow:"Dialogs_glow__38LY8",messages:"Dialogs_messages__2us7m",message:"Dialogs_message__3NBPC"}}},[[76,1,2]]]);
//# sourceMappingURL=main.e27c2e8d.chunk.js.map