var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function l(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let d;function h(t){d=t}const p=[],m=[],$=[],g=[],b=Promise.resolve();let y=!1;function _(t){$.push(t)}let x=!1;const v=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),k(e.$$)}for(p.length=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];v.has(e)||(v.add(e),e())}$.length=0}while(p.length);for(;g.length;)g.pop()();y=!1,x=!1,v.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const A=new Set;function E(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(c,u,s,i,f,l,p=[-1]){const m=d;h(c);const $=u.props||{},g=c.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:p,skip_bound:!1};let b=!1;if(g.ctx=s?s(c,$,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&E(c,t)),e}):[],g.update(),b=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(A.delete(y),y.i(x))),function(t,n,c){const{fragment:u,on_mount:a,on_destroy:s,after_update:i}=t.$$;u&&u.m(n,c),_(()=>{const n=a.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(_)}(c,u.target,u.anchor),w()}var y,x;h(m)}function I(e){let n,o,r,c;return{c(){n=s("main"),o=s("p"),r=i(e[0]),c=i(e[1]),f(o,"class","text-writer svelte-1mrvf5p"),f(n,"class","svelte-1mrvf5p")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(o,r),u(o,c)},p(t,[e]){1&e&&l(r,t[0]),2&e&&l(c,t[1])},i:t,o:t,d(t){t&&a(n)}}}const N="oh. shoot. well, hmm.";function O(t,e,n){const o=t=>new Promise(e=>setTimeout(e,t));let r="",c="❚";return(async()=>{let t=()=>n(1,c=" "===c?"❚":" ");for(;;){if(r===N)return void setInterval(t,400);if("."===r.charAt(r.length-1)){let e=setInterval(t,400);await o(1e3),clearInterval(e),n(1,c="❚")}n(0,r+=N.charAt(r.length)),await o(100*Math.random()+20)}})(),[r,c]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,O,I,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
