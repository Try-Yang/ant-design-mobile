webpackJsonp([22],{8:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(9),o=p(e),c=s(1),l=t(c);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return l.createElement("i",(0,o["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},24:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(35),e=t(p),o=s(34),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,l=(0,c["default"])(n);!(t=(o=l.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){p=!0,e=u}finally{try{!t&&l["return"]&&l["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,e["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},26:function(n,a,s){"use strict";s(40)},27:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(p){a.indexOf(p)!==-1?s[p]=n[p]:t[p]=n[p]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},34:function(n,a,s){n.exports={"default":s(36),__esModule:!0}},35:function(n,a,s){n.exports={"default":s(37),__esModule:!0}},36:function(n,a,s){s(28),s(22),n.exports=s(38)},37:function(n,a,s){s(28),s(22),n.exports=s(39)},38:function(n,a,s){var t=s(47),p=s(53);n.exports=s(15).getIterator=function(n){var a=p(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},39:function(n,a,s){var t=s(63),p=s(25)("iterator"),e=s(50);n.exports=s(15).isIterable=function(n){var a=Object(n);return void 0!==a[p]||"@@iterator"in a||e.hasOwnProperty(t(a))}},40:function(n,a){},42:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&O(n.props.children)?v.cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(O(n)&&(n=n.split("").join(" ")),v.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var c=s(9),l=p(c),u=s(6),i=p(u),r=s(24),k=p(r),m=s(3),d=p(m),f=s(5),g=p(f),h=s(4),y=p(h),b=s(1),v=t(b),x=s(2),T=p(x),E=s(19),w=p(E),j=s(27),_=p(j),R=s(55),C=p(R),M=/^[\u4e00-\u9fa5]{2}$/,O=M.test.bind(M),U=function(n){function a(){(0,d["default"])(this,a);for(var s=arguments.length,t=Array(s),p=0;p<s;p++)t[p]=arguments[p];var e=(0,g["default"])(this,n.call.apply(n,[this].concat(t)));return e.onClick=function(){e.props.onClick(e)},e}return(0,y["default"])(a,n),a.prototype.render=function(){var n,a=(0,_["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),s=(0,k["default"])(a,2),t=s[0],p=t.children,e=t.className,c=t.prefixCls,u=t.type,r=t.size,m=t.inline,d=t.disabled,f=t.htmlType,g=t.icon,h=t.loading,y=t.touchFeedback,b=s[1],x=(0,T["default"])((n={},(0,i["default"])(n,e,e),(0,i["default"])(n,c,!0),(0,i["default"])(n,c+"-primary","primary"===u),(0,i["default"])(n,c+"-ghost","ghost"===u),(0,i["default"])(n,c+"-warning","warning"===u),(0,i["default"])(n,c+"-small","small"===r&&m),(0,i["default"])(n,c+"-loading",h),(0,i["default"])(n,c+"-inline",m),(0,i["default"])(n,c+"-disabled",d),(0,i["default"])(n,c+"-touchFeedback",y),n)),E=h?"loading":g,j=v.Children.map(p,o);return v.createElement("button",(0,l["default"])({},b,{type:f||"button",className:x,disabled:d,onClick:this.onClick}),E?v.createElement(w["default"],{type:E}):null,j)},a}(v.Component);U.propTypes={prefixCls:b.PropTypes.string,size:b.PropTypes.oneOf(["large","small"]),htmlType:b.PropTypes.oneOf(["submit","button","reset"]),icon:b.PropTypes.bool},U.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,C["default"])(U),n.exports=a["default"]},49:function(n,a,s){"use strict";s(8),s(26),s(66)},55:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=u.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},render:function(){return u.createElement(n,(0,c["default"])({},this.props,{touchFeedback:this.state.touchFeedback,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}))}});return a}Object.defineProperty(a,"__esModule",{value:!0});var o=s(9),c=p(o);a["default"]=e;var l=s(1),u=t(l);n.exports=a["default"]},66:function(n,a){},190:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var o=s(6),c=p(o),l=s(3),u=p(l),i=s(5),r=p(i),k=s(4),m=p(k),d=s(1),f=t(d),g=s(42),h=p(g),y=s(2),b=p(y),v=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.imgUrl,p=a.title,e=a.message,o=a.buttonText,l=a.buttonClick,u=a.buttonType,i=a.className,r=(0,b["default"])((n={},(0,c["default"])(n,""+s,!0),(0,c["default"])(n,i,i),n));return f.createElement("div",{className:r},f.createElement("div",{className:s+"-pic",style:{backgroundImage:"url("+t+")"}}),""!==p?f.createElement("div",{className:s+"-title"},p):null,""!==e?f.createElement("div",{className:s+"-message"},e):null,""!==o?f.createElement("div",{className:s+"-button"},f.createElement(h["default"],{type:u,onClick:l},o)):null)},a}(f.Component);a["default"]=v,v.defaultProps={prefixCls:"am-result",imgUrl:"",title:"",message:"",buttonText:"",buttonType:"",buttonClick:e},n.exports=a["default"]},191:function(n,a,s){"use strict";s(8),s(49),s(1148)},749:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:4,title:"\u64cd\u4f5c\u5931\u8d25",filename:"components/result/demo/blank.md",id:"components-result-demo-blank"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png",title:"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c",message:"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"})};return c["default"].createElement(n,null)}}},750:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:3,title:"\u7b49\u5f85\u5904\u7406",filename:"components/result/demo/busy.md",id:"components-result-demo-busy"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7b49\u5f85\u5904\u7406<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png",title:"\u7b49\u5f85\u5904\u7406",message:"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"})};return c["default"].createElement(n,null)}}},751:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:2,title:"\u652f\u4ed8\u5931\u8d25",filename:"components/result/demo/fail.md",id:"components-result-demo-fail"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u652f\u4ed8\u5931\u8d25<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u70b9\u51fb\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png",title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3",buttonText:"\u70b9\u51fb\u91cd\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return c["default"].createElement(n,null)}}},752:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:5,title:"\u65ad\u7ebf",filename:"components/result/demo/offline.md",id:"components-result-demo-offline"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >brief</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5237\u65b0<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png",title:"\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5",brief:"\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5",buttonText:"\u5237\u65b0",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return c["default"].createElement(n,null)}}},753:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:6,title:"\u5176\u4ed6\u81ea\u5b9a\u4e49\u6837\u5f0f",filename:"components/result/demo/other.md",id:"components-result-demo-other"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>other<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u4e3a\u7a7a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u793a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7f51\u7edc\u4e0d\u7ed9\u529b<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement("div",{className:"other"},c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png",title:"\u5185\u5bb9\u4e3a\u7a7a",message:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonText:"\u91cd\u65b0\u5c1d\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png",title:"\u8b66\u793a",message:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonText:"\u91cd\u65b0\u52a0\u8f7d",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png",title:"\u7f51\u7edc\u4e0d\u7ed9\u529b",message:"\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5",buttonText:"\u91cd\u65b0\u5c1d\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}))};return c["default"].createElement(n,null)},style:".other .am-result {\n  border-bottom: 8px solid #e9e9e9;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.other</span> <span class="token class" >.am-result</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-bottom</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px solid <span class="token hexcode" >#e9e9e9</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},754:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:0,title:"\u652f\u4ed8\u6210\u529f",filename:"components/result/demo/success.md",id:"components-result-demo-success"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u652f\u4ed8\u6210\u529f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'0.72rem\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#000\'</span><span class="token punctuation" >,</span> lineHeight<span class="token punctuation" >:</span> <span class="token number" >1</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token number" >998.00</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>del</span><span class="token punctuation" >></span></span><span class="token number" >1098</span>\u5143<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>del</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n  <span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png",title:"\u652f\u4ed8\u6210\u529f",message:c["default"].createElement("div",null,c["default"].createElement("div",{style:{fontSize:"0.72rem",color:"#000",lineHeight:1}},"998.00"),c["default"].createElement("del",null,"1098\u5143"))})};return c["default"].createElement(n,null)}}},755:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(191),s(190)),e=t(p),o=s(1),c=t(o),l=s(7);t(l);n.exports={content:[],meta:{order:1,title:"\u9a8c\u8bc1\u6210\u529f",filename:"components/result/demo/verify.md",id:"components-result-demo-verify"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9a8c\u8bc1\u6210\u529f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png",title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"})};return c["default"].createElement(n,null)}}},899:function(n,a,s){n.exports={blank:s(749),busy:s(750),fail:s(751),offline:s(752),other:s(753),success:s(754),verify:s(755)}},1148:function(n,a){}});