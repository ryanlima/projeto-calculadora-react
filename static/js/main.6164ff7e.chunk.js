(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),c=a(5),n=a.n(c),r=(a(17),a(2)),s=a(3),o=a(6),u=a(7),d=a(9),h=a(8),p=a(1),b=a(10),m=(a(18),a(19),function(e){var t="button ";return t+=e.operation?"operation":"",t+=e.double?"double":"",t+=e.triple?"triple":"",i.a.createElement("button",{onClick:function(t){return e.click&&e.click(e.label)},className:t},e.label)}),k=(a(20),function(e){return i.a.createElement("div",{className:"display"},e.value)}),v={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state=Object(s.a)({},v),a.clearMemory=a.clearMemory.bind(Object(p.a)(a)),a.setOperation=a.setOperation.bind(Object(p.a)(a)),a.addDigit=a.addDigit.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"clearMemory",value:function(){this.setState(Object(s.a)({},v))}},{key:"setOperation",value:function(e){if(0===this.state.current)this.setState({operation:e,current:1,clearDisplay:!0});else{var t="="===e,a=this.state.operation,l=Object(r.a)(this.state.values);l[0]=this.calc(l[0],l[1],a),l[1]=0,this.setState({displayValue:l[0],operation:t?null:e,current:t?0:1,clearDisplay:!t,values:l})}}},{key:"addDigit",value:function(e){if("."!==e||!this.state.displayValue.includes(".")){var t=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+e;if(this.setState({displayValue:t,clearDisplay:!1}),"."!==e){var a=this.state.current,l=parseFloat(t),i=Object(r.a)(this.state.values);i[a]=l,this.setState({values:i}),console.log(i)}}}},{key:"calc",value:function(e,t,a){switch(a){case"+":return e+t;case"-":return e-t;case"*":return e*t;case"/":return e+t;default:console.log("deu ruim")}}},{key:"render",value:function(){return i.a.createElement("div",{className:"calculator"},i.a.createElement(k,{value:this.state.displayValue}),i.a.createElement(m,{label:"AC",click:this.clearMemory,triple:!0}),i.a.createElement(m,{label:"/",click:this.setOperation,operation:!0}),i.a.createElement(m,{label:"7",click:this.addDigit}),i.a.createElement(m,{label:"8",click:this.addDigit}),i.a.createElement(m,{label:"9",click:this.addDigit}),i.a.createElement(m,{label:"*",click:this.setOperation,operation:!0}),i.a.createElement(m,{label:"4",click:this.addDigit}),i.a.createElement(m,{label:"5",click:this.addDigit}),i.a.createElement(m,{label:"6",click:this.addDigit}),i.a.createElement(m,{label:"-",click:this.setOperation,operation:!0}),i.a.createElement(m,{label:"1",click:this.addDigit}),i.a.createElement(m,{label:"2",click:this.addDigit}),i.a.createElement(m,{label:"3",click:this.addDigit}),i.a.createElement(m,{label:"+",click:this.setOperation,operation:!0}),i.a.createElement(m,{label:"0",click:this.addDigit,double:!0}),i.a.createElement(m,{label:".",click:this.addDigit}),i.a.createElement(m,{label:"=",click:this.setOperation,operation:!0}))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement("div",null,i.a.createElement("h1",null,"Calculadora"),i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.6164ff7e.chunk.js.map