(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(285)},125:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),i=(a(125),a(16)),s=a(17),c=a(19),u=a(18),d=a(20),m=a(61),h=a(98),p=a.n(h),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).sketch=r.a.createRef(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){p.a.post("http://ced9be81.ngrok.io/updateUI",{foo:this.sketch.current.toDataURL()})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("text",null,this.props.add),r.a.createElement(m.SketchField,{ref:this.sketch,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"Field",width:"375px",height:"667px",tool:m.Tools.Pencil,lineColor:this.props.attributes,lineWidth:this.props.lineWidth,backgroundColor:"255",imageFormat:"jpeg"}))}}]),t}(n.Component),v=a(119),f=a.n(v),w=a(44),b=a(99),E=a(5),y=a.n(E),S=a(35),C=a(106),k=a.n(C),L=a(101),O=a.n(L),M=a(103),j=a.n(M),x=a(104),R=a.n(x),N=a(64),P=a.n(N),B=a(60),I=a.n(B),_=a(63),q=a.n(_),D=a(62),T=a.n(D),W=a(105),H=a.n(W),A=a(107),F=a.n(A),z=a(108),G=a.n(z),U=a(45),V=a.n(U),J=a(46),Y=a.n(J),Z=a(24),$=a.n(Z),K=a(111),Q=a.n(K),X=a(109),ee=a.n(X),te=a(110),ae=a.n(te),ne=a(47),re=a.n(ne),oe=a(30),le=a.n(oe),ie=a(100),se=a.n(ie),ce=a(31),ue=a.n(ce),de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,o=this.state.open;return r.a.createElement("div",{className:a.root},r.a.createElement(O.a,null),r.a.createElement(j.a,{position:"fixed",className:y()(a.appBar,Object(w.a)({},a.appBarShift,o))},r.a.createElement(R.a,{disableGutters:!o},r.a.createElement(T.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:y()(a.menuButton,o&&a.hide)},r.a.createElement(H.a,null)),r.a.createElement(I.a,{variant:"h6",color:"inherit",noWrap:!0},"SketchyAI"))),r.a.createElement(k.a,{className:a.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(T.a,{onClick:this.handleDrawerClose},"ltr"===n.direction?r.a.createElement(F.a,null):r.a.createElement(G.a,null))),r.a.createElement(q.a,null),r.a.createElement(P.a,null,r.a.createElement(V.a,{key:"Colors"},r.a.createElement(Y.a,null,r.a.createElement(ee.a,null)),r.a.createElement($.a,{primary:"Colors"})),r.a.createElement(ae.a,{className:a.gridList,style:{position:"relative",left:"10%"},cols:3.5},r.a.createElement(re.a,null,r.a.createElement(ue.a,{className:a.button,style:{position:"relative",right:"50%"},onClick:function(){return e.props.changeColor("red")}},r.a.createElement(le.a,{className:a.iconHover,color:"secondary",style:{position:"relative",left:"45%"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}))),r.a.createElement($.a,{primary:"Red",style:{position:"relative",right:"6%",marginTop:"47%"}}))),r.a.createElement(re.a,null,r.a.createElement(ue.a,{className:a.button,style:{position:"relative",right:"50%"},onClick:function(){return e.props.changeColor("blue")}},r.a.createElement(le.a,{className:a.iconHover,color:"primary",style:{position:"relative",left:"45%",alignItems:"center"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}))),r.a.createElement($.a,{primary:"Blue",style:{position:"relative",right:"6%",marginTop:"45%"}}))),r.a.createElement(re.a,null,r.a.createElement(ue.a,{className:a.button,style:{position:"relative",right:"50%",alignItems:"center"},onClick:function(){return e.props.changeColor("black")}},r.a.createElement(le.a,{className:a.iconHover,color:"disabled",style:{position:"relative",left:"45%"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}))),r.a.createElement($.a,{primary:"Black",style:{position:"relative",right:"6%",marginTop:"40%"}}))))),r.a.createElement(q.a,null),r.a.createElement(P.a,null,r.a.createElement(V.a,{button:!0,key:"Eraser",onClick:function(){return e.props.eraser()}},r.a.createElement(Y.a,null,r.a.createElement(le.a,null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"#000000",d:"M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z"})))),r.a.createElement($.a,{primary:"Eraser"})),r.a.createElement(V.a,{button:!0,key:"Download Code"},r.a.createElement(Y.a,null," ",r.a.createElement(Q.a,null)),r.a.createElement($.a,{primary:"Download Code"})))))}}]),t}(r.a.Component),me=Object(S.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(280,"px)"),marginLeft:280,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:280,flexShrink:0},drawerPaper:{width:280},drawerHeader:Object(b.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-280},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},iconHover:{"&:hover":{color:se.a[800]}}}},{withTheme:!0})(de),he=a(112),pe=a.n(he),ge=a(113),ve=a.n(ge),fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,loggedIn:null,loading:!1,error:null,initialTab:null,recoverPasswordSuccess:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onLogin",value:function(){console.log("__onLogin__"),console.log("email: "+document.querySelector("#email").value),console.log("password: "+document.querySelector("#password").value);var e=document.querySelector("#email").value,t=document.querySelector("#password").value;e&&t?this.onLoginSuccess("form"):this.setState({error:!0})}},{key:"onRegister",value:function(){console.log("__onRegister__"),console.log("login: "+document.querySelector("#login").value),console.log("email: "+document.querySelector("#email").value),console.log("password: "+document.querySelector("#password").value);var e=document.querySelector("#login").value,t=document.querySelector("#email").value,a=document.querySelector("#password").value;e&&t&&a?this.onLoginSuccess("form"):this.setState({error:!0})}},{key:"onRecoverPassword",value:function(){console.log("__onFotgottenPassword__"),console.log("email: "+document.querySelector("#email").value),document.querySelector("#email").value?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"componentDidMount",value:function(){this.openModal("login")}},{key:"render",value:function(){var e=this.state.loggedIn?r.a.createElement("div",null,r.a.createElement("p",null,"You are signed in with: ",this.state.loggedIn)):r.a.createElement("div",null,r.a.createElement("p",null,"You are signed out")),t=this.state.loading;return r.a.createElement("div",null,r.a.createElement(ve.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:t,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this)},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"New password has been sent to your mailbox!"}:null,recoverPasswordAnchor:{label:"Forgot your password?"},loginBtn:{label:"Sign in"},registerBtn:{label:"Sign up"},recoverPasswordBtn:{label:"Send new password"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Password",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Password"}],registerInputs:[{containerClass:"RML-form-group",label:"Nickname",type:"text",inputClass:"RML-form-control",id:"login",name:"login",placeholder:"Nickname"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Password",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Password"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]},separator:{label:"or"},providers:{}}),e)}}]),t}(r.a.Component),we=a(118),be=a.n(we),Ee=a(115),ye=a.n(Ee),Se=a(116),Ce=a.n(Se),ke=a(117),Le=a.n(ke),Oe=a(114),Me=a.n(Oe),je=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a.handleChangeIndex=function(e){a.setState({value:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},l=[{color:"primary",className:a.fab,icon:r.a.createElement(ye.a,null)},{color:"secondary",className:a.fab,icon:r.a.createElement(Ce.a,null)},{color:"inherit",className:y()(a.fab,a.fabGreen),icon:r.a.createElement(Le.a,null)}];return r.a.createElement("div",null,l.map(function(t,a){return r.a.createElement(be.a,{key:t.color,in:e.state.value===a,timeout:o,style:{transitionDelay:"".concat(e.state.value===a?o.exit:0,"ms")},unmountOnExit:!0},r.a.createElement(ue.a,{variant:"fab",className:t.className,color:t.color},t.icon))}))}}]),t}(r.a.Component),xe=Object(S.withStyles)(function(e){return{fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit},fabGreen:{color:e.palette.common.white,backgroundColor:Me.a[500]}}},{withTheme:!0})(je),Re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={linecolor:"blue",lineWidth:4,add:0},a.changeColor=function(e){a.setState({linecolor:e,lineWidth:4})},a.eraser=function(){a.setState({linecolor:"white",lineWidth:20})},a.handle_this=function(){var e=0;e=0===a.state.add?1:0,a.setState({linecolor:a.state.linecolor,lineWidth:a.state.lineWidth,add:e})},a.componentDidMount=function(){document.body.addEventListener("click",this.handle_this)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(fe,null),r.a.createElement(pe.a,{backgroundColor:"#343D46"},r.a.createElement(f.a,{container:!0,spacing:24},r.a.createElement(me,{changeColor:this.changeColor,eraser:this.eraser}),r.a.createElement(g,{attributes:this.state.linecolor,lineWidth:this.state.lineWidth,add:this.state.add}))),r.a.createElement(xe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.997f5d74.chunk.js.map