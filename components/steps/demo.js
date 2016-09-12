webpackJsonp([35],{8:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},20:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),c=p(e),o=s(3),l=p(o),u=s(5),i=p(u),r=s(4),k=p(r),f=s(1),d=t(f),m=s(2),g=p(m),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,e=a.style,o=a.onClick,l=(0,g["default"])((n={},(0,c["default"])(n,""+s,!0),(0,c["default"])(n,s+"-"+t,!0),(0,c["default"])(n,p,!!p),n));return d.createElement("div",{className:l,style:e,onClick:o})},a}(d.Component);a["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},21:function(n,a,s){"use strict";s(8),s(48)},43:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),c=p(e),o=s(3),l=p(o),u=s(5),i=p(u),r=s(4),k=p(r),f=s(1),d=t(f),m=s(2),g=p(m),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,e=a.children,o=a.style,l=(0,g["default"])((n={},(0,c["default"])(n,""+s,!0),(0,c["default"])(n,s+"-"+t,!0),(0,c["default"])(n,p,!!p),n));return d.createElement("div",{className:l,style:o},e)},a}(d.Component);a["default"]=v,v.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},44:function(n,a,s){"use strict";s(8),s(57)},48:function(n,a){},57:function(n,a){},496:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(9),c=p(e),o=s(3),l=p(o),u=s(5),i=p(u),r=s(4),k=p(r),f=s(1),d=t(f),m=s(1275),g=p(m),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n=this,a=this.props,s=a.current,t=a.direction;return d.createElement(g["default"],(0,c["default"])({},this.props,{direction:t}),this.props.children.map(function(a,t){var p=-1;if(t<n.props.children.length-1){var e=n.props.children[t+1].props.status;"error"===e&&(p=t)}var c=p>-1?"error-tail":"",o=void 0,l=void 0;return a.props.icon?(o=a.props.icon,l="",t>0&&t<=s?o="check-circle":"error"===a.props.status?o="cross-circle":"process"===a.props.status&&(o="check-circle")):(l=t<=s?null:"ellipsis-item",o=t<=s?"check-circle-o":"error"===a.props.status?"cross-circle-o":"ellipsis"),l=c+" "+l,d.cloneElement(a,{key:t,icon:o,className:l})}))},a}(d.Component);a["default"]=v,v.Step=g["default"].Step,v.defaultProps={prefixCls:"am-steps",iconPrefix:"ant",labelPlacement:"vertical",current:0,direction:"vertical"},n.exports=a["default"]},497:function(n,a,s){"use strict";s(8),s(1150)},770:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(44),s(43)),e=t(p),c=(s(21),s(20)),o=t(c),l=(s(497),s(496)),u=t(l),i=s(1),r=t(i),k=s(7);t(k);n.exports={content:[["p","\u9875\u9762\u4e2d\u7b80\u5355\u7684\u7ad6\u76f4\u65b9\u5411\u7684\u6b65\u9aa4\u6761\uff0c",["code","size=small"]]],meta:{order:0,title:"\u9875\u9762\u4e2d\u7684\u6b65\u9aa4\u6761",filename:"components/steps/demo/basic.md",id:"components-steps-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>stepsExample<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5df2\u5b8c\u6210<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fdb\u884c\u4e2d<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5f85\u8fd0\u884c<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>process<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5df2\u5b8c\u6210<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u51fa\u9519<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5f85\u8fd0\u884c<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].Step;return r["default"].createElement("div",{className:"stepsExample"},r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{size:"small",current:3},r["default"].createElement(n,{title:"\u5df2\u5b8c\u6210",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u8fdb\u884c\u4e2d",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}))),r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{size:"small"},r["default"].createElement(n,{status:"process",title:"\u5df2\u5b8c\u6210",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{status:"error",title:"\u51fa\u9519",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}))))}}},771:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(44),s(43)),e=t(p),c=(s(21),s(20)),o=t(c),l=(s(497),s(496)),u=t(l),i=s(1),r=t(i),k=s(7);t(k);n.exports={content:[["p","\u7ed3\u679c\u9875\u4e2d\u7684\u6b65\u9aa4\u6761\uff0c\u6839\u636e\u4e1a\u52a1\u8bbe\u5b9a\u6b65\u9aa4icon."]],meta:{order:1,title:"\u7ed3\u679c\u9875\u9762\u4e2d\u7684\u6b65\u9aa4\u6761",filename:"components/steps/demo/icons.md",id:"components-steps-demo-icons"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>stepsExample<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>finish<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa41<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>process<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa42<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa43<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa41<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa42<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa43<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa41<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa42<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa43<span class="token punctuation" >"</span></span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa44<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].Step;return r["default"].createElement("div",{className:"stepsExample"},r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],null,r["default"].createElement(n,{status:"finish",title:"\u6b65\u9aa41",icon:"pay-circle"}),r["default"].createElement(n,{status:"process",title:"\u6b65\u9aa42",icon:"pay-circle"}),r["default"].createElement(n,{status:"error",title:"\u6b65\u9aa43",icon:"pay-circle"}))),r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{current:1},r["default"].createElement(n,{title:"\u6b65\u9aa41",icon:"pay-circle",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u6b65\u9aa42",icon:"pay-circle",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u6b65\u9aa43",icon:"pay-circle",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}))),r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{current:1},r["default"].createElement(n,{title:"\u6b65\u9aa41",icon:"pay-circle"}),r["default"].createElement(n,{title:"\u6b65\u9aa42",icon:"pay-circle"}),r["default"].createElement(n,{title:"\u6b65\u9aa43",status:"error",icon:"pay-circle"}),r["default"].createElement(n,{title:"\u6b65\u9aa44",icon:"pay-circle"}))))}}},904:function(n,a,s){n.exports={basic:s(770),icons:s(771)}},1150:function(n,a){},1273:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function e(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}function c(n){var a,s,t=n.className,c=n.prefixCls,l=n.style,i=n.tailWidth,k=n.status,f=void 0===k?"wait":k,d=n.iconPrefix,m=n.icon,g=n.wrapperStyle,v=n.adjustMarginRight,y=n.stepLast,h=n.stepNumber,b=n.description,S=n.title,P=e(n,["className","prefixCls","style","tailWidth","status","iconPrefix","icon","wrapperStyle","adjustMarginRight","stepLast","stepNumber","description","title"]),E=(0,r["default"])((a={},p(a,c+"-icon",!0),p(a,d+"icon",!0),p(a,d+"icon-"+m,m),p(a,d+"icon-check",!m&&"finish"===f),p(a,d+"icon-cross",!m&&"error"===f),a)),O=m||"finish"===f||"error"===f?u["default"].createElement("span",{className:E}):u["default"].createElement("span",{className:c+"-icon"},h),x=(0,r["default"])((s={},p(s,c+"-item",!0),p(s,c+"-item-last",y),p(s,c+"-status-"+f,!0),p(s,c+"-custom",m),p(s,t,!!t),s));return u["default"].createElement("div",o({},P,{className:x,style:o({width:i,marginRight:v},l)}),y?"":u["default"].createElement("div",{className:c+"-tail"},u["default"].createElement("i",null)),u["default"].createElement("div",{className:c+"-step"},u["default"].createElement("div",{className:c+"-head",style:{background:g.background||g.backgroundColor}},u["default"].createElement("div",{className:c+"-head-inner"},O)),u["default"].createElement("div",{className:c+"-main"},u["default"].createElement("div",{className:c+"-title",style:{background:g.background||g.backgroundColor}},S),b?u["default"].createElement("div",{className:c+"-description"},b):"")))}var o=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},l=s(1),u=t(l),i=s(2),r=t(i);c.propTypes={className:l.PropTypes.string,prefixCls:l.PropTypes.string,style:l.PropTypes.object,wrapperStyle:l.PropTypes.object,tailWidth:l.PropTypes.oneOfType([l.PropTypes.number,l.PropTypes.string]),status:l.PropTypes.string,iconPrefix:l.PropTypes.string,icon:l.PropTypes.string,adjustMarginRight:l.PropTypes.oneOfType([l.PropTypes.number,l.PropTypes.string]),stepLast:l.PropTypes.bool,stepNumber:l.PropTypes.string,description:l.PropTypes.any,title:l.PropTypes.any},n.exports=c},1274:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n
}}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0});var i=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},r=s(1),k=t(r),f=s(7),d=t(f),m=s(2),g=t(m),v=function(n){function a(s){o(this,a);var t=l(this,n.call(this,s));return t.culcLastStepOffsetWidth=function(){var n=d["default"].findDOMNode(t);n.children.length>0&&(t.culcTimeout=setTimeout(function(){var a=n.lastChild.offsetWidth+1;t.state.lastStepOffsetWidth!==a&&t.setState({lastStepOffsetWidth:a})}))},t.state={lastStepOffsetWidth:0},t}return u(a,n),a.prototype.componentDidMount=function(){this.culcLastStepOffsetWidth()},a.prototype.componentDidUpdate=function(){this.culcLastStepOffsetWidth()},a.prototype.componentWillUnmount=function(){this.culcTimeout&&clearTimeout(this.culcTimeout)},a.prototype.render=function(){var n,a=this,s=this.props,t=s.prefixCls,p=s.style,o=void 0===p?{}:p,l=s.className,u=s.children,r=s.direction,f=s.labelPlacement,d=s.iconPrefix,m=s.status,v=s.size,y=s.current,h=c(s,["prefixCls","style","className","children","direction","labelPlacement","iconPrefix","status","size","current"]),b=u.length-1,S=this.state.lastStepOffsetWidth>0,P=(0,g["default"])((n={},e(n,t,!0),e(n,t+"-"+v,v),e(n,t+"-"+r,!0),e(n,t+"-label-"+f,"horizontal"===r),e(n,t+"-hidden",!S),e(n,l,l),n));return k["default"].createElement("div",i({className:P,style:o},h),k["default"].Children.map(u,function(n,p){var e="vertical"!==r&&p!==b&&S?100/b+"%":null,c="vertical"===r||p===b?null:-(a.state.lastStepOffsetWidth/b+1),l={stepNumber:(p+1).toString(),stepLast:p===b,tailWidth:e,adjustMarginRight:c,prefixCls:t,iconPrefix:d,wrapperStyle:o};return"error"===m&&p===y-1&&(l.className=s.prefixCls+"-next-error"),n.props.status||(p===y?l.status=m:p<y?l.status="finish":l.status="wait"),k["default"].cloneElement(n,l)},this))},a}(k["default"].Component);a["default"]=v,v.propTypes={prefixCls:r.PropTypes.string,iconPrefix:r.PropTypes.string,direction:r.PropTypes.string,labelPlacement:r.PropTypes.string,children:r.PropTypes.any,status:r.PropTypes.string,size:r.PropTypes.string},v.defaultProps={prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",current:0,status:"process",size:""},n.exports=a["default"]},1275:function(n,a,s){"use strict";var t=s(1274);t.Step=s(1273),n.exports=t}});