(this.webpackJsonpchrome=this.webpackJsonpchrome||[]).push([[0],{265:function(e,t,n){e.exports=n(532)},270:function(e,t,n){},271:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},272:function(e,t,n){},274:function(e,t,n){},295:function(e,t){},297:function(e,t){},308:function(e,t){},310:function(e,t){},337:function(e,t){},339:function(e,t){},340:function(e,t){},346:function(e,t){},348:function(e,t){},366:function(e,t){},369:function(e,t){},385:function(e,t){},388:function(e,t){},421:function(e,t,n){},422:function(e,t,n){},532:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),s=(n(270),n(29)),i=n(30),l=n(32),d=n(31),u=(n(271),n(272),n(273),n(10)),h=n.n(u),p=n(26),m=n(55),f=(n(274),n(536)),y=n(156),b=n(56),v=n.n(b),k=n(57),g=function(e,t){return new Promise((function(n,a){v.a.post(k.baseURL+"holder/add",e,{headers:{Authorization:"Bearer ".concat(t)}}).then(function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},E=function(e){return new Promise((function(t,n){v.a.get(k.baseURL+"holder",{headers:{Authorization:"Bearer ".concat(e)}}).then(function(){var e=Object(p.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},w=function(e,t){return new Promise((function(n,a){v.a.delete(k.baseURL+"holder/"+e,{headers:{Authorization:"Bearer ".concat(t)}}).then(function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},j=n(538),O=n(167),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={secret:"",unlocked:!1,error:!1},e.handleSecret=function(t){e.setState({secret:t.target.value})},e.handleSubmit=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.handleLoader(!0),a=new O(e.state.secret),t.next=4,a.decrypt(e.props.data.body);case 4:(r=t.sent)?(e.setState({unlocked:r}),e.props.handleLoader(!1)):e.setState({error:"bad key"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDelete=function(){e.props.handleLoader(!0),w(e.props.data._id,e.props.token).then(function(e){this.props.updateHolder(this.props.token),this.props.handleLoader(!1)}.bind(Object(m.a)(e)))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"holder"},r.a.createElement("div",{className:"heading-holder"},this.props.data.title),r.a.createElement("center",null,!this.props.data.encrypt&&r.a.createElement("div",{className:"body-holder"},this.props.data.body),this.state.unlocked&&r.a.createElement("div",{className:"body-holder"},this.state.unlocked),this.props.data.encrypt&&!this.state.unlocked&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{onChange:this.handleSecret,style:{width:"60%"},placeholder:"Enter the secret"}),r.a.createElement(y.a,{onClick:this.handleSubmit,type:"primary"},"submit"),r.a.createElement("br",null)),this.state.error&&r.a.createElement("b",{style:{color:"red"}},this.state.error),r.a.createElement("br",null),(this.state.unlocked||!this.props.data.encrypt)&&r.a.createElement(j.a,{onClick:function(){return e.handleDelete()},style:{color:"red",cursor:"pointer"}})),r.a.createElement("div",{className:"footer-holder"},this.props.data.createdAt))}}]),n}(a.Component),F=n(539),S=(n(421),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.updateHolder=function(t){e.props.handleLoader(!0),E(e.props.token).then((function(t){e.setState({data:t.data.holder}),e.props.handleLoader(!1)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.handleLoader(!0),E(this.props.token).then((function(t){e.setState({data:t.data.holder}),e.props.handleLoader(!1)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("div",{className:"home-body",style:{width:"100%"}},this.state.data.length>0?this.state.data.map((function(t){return r.a.createElement(L,{handleLoader:e.props.handleLoader,updateHolder:e.updateHolder,data:t,token:e.props.token})})):r.a.createElement("b",null," No Holders yet ")),r.a.createElement("div",{className:"home-footer"},r.a.createElement("button",{onClick:function(){return e.props.addHolder(!0)}},r.a.createElement(F.a,null))))}}]),n}(a.Component)),C=n(534),x=n(537),T=(n(422),n(167)),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={encrypt:!1},e.onFinish=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.handleLoader(!0);case 2:if(console.log("Success:",n),1!=n.encrypt){t.next=12;break}return a=new T(n.key),t.next=7,a.encrypt(n.body);case 7:r=t.sent,n.body=r,g(n,e.props.token).then(function(e){console.log(e),this.props.addHolder(!1),this.props.handleLoader(!1)}.bind(Object(m.a)(e))),t.next=13;break;case 12:g(n,e.props.token).then(function(e){console.log(e),this.props.addHolder(!1),this.props.handleLoader(!1)}.bind(Object(m.a)(e)));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onFinishFailed=function(e){console.log("Failed:",e)},e.onChange=function(t){1==t.encrypt&&e.setState({encrypt:!0}),0==t.encrypt&&e.setState({encrypt:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"addholderBody"},r.a.createElement("h6",{style:{fontSize:"16px"}},"Add holder"),r.a.createElement("hr",null),r.a.createElement(C.a,{name:"basic",initialValues:{encrypt:!1},onFinish:this.onFinish,onValuesChange:this.onChange,onFinishFailed:this.onFinishFailed},r.a.createElement(C.a.Item,{name:"title",rules:[{required:!0,message:"Please enter the title"}]},r.a.createElement(f.a,{placeholder:"Title"})),r.a.createElement(C.a.Item,{name:"body",rules:[{required:!0,message:"Please enter body"}]},r.a.createElement(f.a,{placeholder:"Body"})),r.a.createElement("b",{style:{fontSize:"10px",color:"red"}},"For sensitive data we recommend you to save data in encrypted format."),r.a.createElement(C.a.Item,{name:"encrypt",valuePropName:"checked"},r.a.createElement(x.a,null,"Encrypt")),this.state.encrypt&&r.a.createElement(C.a.Item,{name:"key",rules:[{required:!0,message:"Please enter body"}]},r.a.createElement(f.a,{placeholder:"Encryption Key"})),r.a.createElement(C.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit"),"\xa0",r.a.createElement(y.a,{onClick:function(){return e.props.addHolder(!1)},type:"primary"},"Cancel"))))}}]),n}(a.Component),P=n(254),A=n(535),I=function(e){return new Promise((function(t,n){v()({method:"post",data:e,url:k.baseURL+"auth/signup"}).then(function(){var e=Object(p.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},N=function(e){return new Promise((function(t,n){v()({method:"post",data:e,url:k.baseURL+"auth/signin"}).then(function(){var e=Object(p.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFinish=function(){var t=Object(p.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Success:",n),I(n).then((function(t){console.log(t),chrome.storage.sync.set({token:t.data.token},(function(){console.log("Settings saved")})),e.props.handleToken(t.data.token)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onFinishFailed=function(e){console.log("Failed:",e)},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(C.a,{name:"basic",initialValues:{remember:!0},onFinish:this.onFinish,onValuesChange:this.onChange,onFinishFailed:this.onFinishFailed},r.a.createElement(C.a.Item,{name:"name",rules:[{required:!0,message:"Please enter name"}]},r.a.createElement(f.a,{placeholder:"Name"})),r.a.createElement(C.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"Please enter emai;l"}]},r.a.createElement(f.a,{placeholder:"Email"})),r.a.createElement(C.a.Item,{name:"password",rules:[{required:!0,message:"Please enter password"}]},r.a.createElement(f.a.Password,{placeholder:"Password"})),r.a.createElement(C.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),n}(a.Component),B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={token:"hello"},e.onFinish=function(){var t=Object(p.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Success:",n),t.next=3,N(n).then((function(t){console.log(t),chrome.storage.sync.set({token:t.data.token},(function(){console.log("Settings saved")})),e.props.handleToken(t.data.token)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onFinishFailed=function(e){console.log("Failed:",e)},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(C.a,{name:"basic",initialValues:{remember:!0},onFinish:this.onFinish,onValuesChange:this.onChange,onFinishFailed:this.onFinishFailed},r.a.createElement(C.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"Please enter emai;l"}]},r.a.createElement(f.a,{placeholder:"Email"})),r.a.createElement(C.a.Item,{name:"password",rules:[{required:!0,message:"Please enter password"}]},r.a.createElement(f.a.Password,{placeholder:"Password"})),r.a.createElement(C.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),n}(a.Component),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={key:"login",noTitleKey:"login"},e.onTabChange=function(t,n){console.log(t,n),e.setState(Object(P.a)({},n,t))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t={login:r.a.createElement("div",null,r.a.createElement(B,{handleLoader:this.props.handleLoader,handleToken:this.props.handleToken})),register:r.a.createElement(q,{handleLoader:this.props.handleLoader,handleToken:this.props.handleToken})};return r.a.createElement("div",null,r.a.createElement(A.a,{style:{width:"100%"},tabList:[{key:"login",tab:"Login"},{key:"register",tab:"Register"}],activeTabKey:this.state.noTitleKey,onTabChange:function(t){e.onTabChange(t,"noTitleKey")}},t[this.state.noTitleKey]))}}]),n}(r.a.Component),K=n(533);var U=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(K.a,{tip:"Loading..."}))},V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={token:!1,addHolder:!1,loader:!1},e.addHolder=function(t){e.setState({addHolder:t})},e.handleToken=function(t){e.setState({token:t})},e.handleLoader=function(t){e.setState({loader:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){chrome.storage.sync.get(["token"],function(e){e&&this.setState({token:e.token})}.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",{className:"application-body"},this.state.loader&&r.a.createElement(U,null),this.state.token&&!this.state.addHolder&&r.a.createElement(S,{handleLoader:this.handleLoader,addHolder:this.addHolder,token:this.state.token}),this.state.addHolder&&r.a.createElement(H,{handleLoader:this.handleLoader,addHolder:this.addHolder,token:this.state.token}),!this.state.token&&r.a.createElement(R,{handleLoader:this.handleLoader,handleToken:this.handleToken}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t){t.baseURL="http://52.66.184.246:8000/api/v1/"}},[[265,1,2]]]);
//# sourceMappingURL=main.cb37a6a7.chunk.js.map