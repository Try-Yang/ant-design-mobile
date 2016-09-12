webpackJsonp([41],{8:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},20:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),c=p(e),o=s(3),l=p(o),u=s(5),i=p(u),k=s(4),r=p(k),d=s(1),m=t(d),g=s(2),f=p(g),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,e=a.style,o=a.onClick,l=(0,f["default"])((n={},(0,c["default"])(n,""+s,!0),(0,c["default"])(n,s+"-"+t,!0),(0,c["default"])(n,p,!!p),n));return m.createElement("div",{className:l,style:e,onClick:o})},a}(m.Component);a["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},21:function(n,a,s){"use strict";s(8),s(48)},48:function(n,a){},664:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(811),s(810)),e=t(p),c=(s(21),s(20)),o=t(c),l=s(1),u=t(l),i=s(7);t(i);n.exports={content:[["p","\u57fa\u672c\u7684\u6d3b\u52a8\u6307\u793a\u5668\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ActivityIndicator<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u65e0\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >animating</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u5e26\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n              <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b63\u5728\u52a0\u8f7d...<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example</span> <span class="token attr-name" >white"</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>white<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>white<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u53f7<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n              <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toast-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n              <span class="token attr-name" >toast</span>\n              <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b63\u5728\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"App",render:function(){return u["default"].createElement("div",null,u["default"].createElement("div",{className:"loading-container"},u["default"].createElement(o["default"],{size:"lg"}),u["default"].createElement("div",{className:"loading-example"},u["default"].createElement("p",{className:"title"},"icon\u65e0\u6587\u6848"),u["default"].createElement(e["default"],{animating:!0})),u["default"].createElement(o["default"],{size:"lg"}),u["default"].createElement("div",{className:"loading-example"},u["default"].createElement("p",{className:"title"},"icon\u5e26\u6587\u6848"),u["default"].createElement(e["default"],{text:"\u6b63\u5728\u52a0\u8f7d..."})),u["default"].createElement(o["default"],{size:"lg"}),u["default"].createElement("div",{className:"loading-example white"},u["default"].createElement("p",{className:"title"},"white"),u["default"].createElement(e["default"],{color:"white"})),u["default"].createElement(o["default"],{size:"lg"}),u["default"].createElement("div",{className:"loading-example"},u["default"].createElement("p",{className:"title"},"\u5927\u53f7"),u["default"].createElement(e["default"],{size:"large"})),u["default"].createElement(o["default"],{size:"lg"}),u["default"].createElement(o["default"],{size:"lg"}),u["default"].createElement("div",{className:"toast-example"},u["default"].createElement("p",{className:"title"},"Toast"),u["default"].createElement(e["default"],{toast:!0,text:"\u6b63\u5728\u52a0\u8f7d"}))))}});return u["default"].createElement(n,null)},style:".loading-example {\n  display: flex;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.loading-example.white {\n  color: #fff;\n  background-color: #2B2F42;\n}\n.loading-example .title {\n  margin-right: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.loading-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example.white</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n  <span class="token property" >background-color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#2B2F42</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},810:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),c=p(e),o=s(3),l=p(o),u=s(5),i=p(u),k=s(4),r=p(k),d=s(1),m=t(d),g=s(2),f=p(g),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.prefixCls,p=s.className,e=s.animating,o=s.toast,l=s.size,u=s.color,i=s.text,k=(0,f["default"])((n={},(0,c["default"])(n,""+t,!0),(0,c["default"])(n,t+"-lg","large"===l),(0,c["default"])(n,t+"-sm","small"===l),(0,c["default"])(n,p,!!p),(0,c["default"])(n,t+"-toast",!!o),n)),r=(0,f["default"])((a={},(0,c["default"])(a,t+"-spinner",!0),(0,c["default"])(a,t+"-spinner-lg",!!o||"large"===l),(0,c["default"])(a,t+"-spinner-white",!!o||"white"===u),a));return e?o?m.createElement("div",{className:k},m.createElement("div",{className:t+"-content"},m.createElement("span",{className:r}),i&&m.createElement("span",{className:t+"-toast"},i))):m.createElement("div",{className:k},m.createElement("span",{className:r}),i&&m.createElement("span",{className:t+"-tip"},i)):null},a}(m.Component);a["default"]=v,v.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",color:"gray",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},811:function(n,a,s){"use strict";s(8),s(1137)},874:function(n,a,s){n.exports={basic:s(664)}},1137:function(n,a){}});