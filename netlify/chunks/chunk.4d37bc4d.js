function F(){}function _e(e,n){for(const t in n)e[t]=n[t];return e}function G(e){return e()}function L(){return Object.create(null)}function $(e){e.forEach(G)}function R(e){return typeof e=="function"}function he(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}let E;function me(e,n){return E||(E=document.createElement("a")),E.href=n,e===E.href}function V(e){return Object.keys(e).length===0}function pe(e){const n={};for(const t in e)t[0]!=="$"&&(n[t]=e[t]);return n}let A=!1;function X(){A=!0}function Y(){A=!1}function Z(e,n,t,o){for(;e<n;){const l=e+(n-e>>1);t(l)<=o?e=l+1:n=l}return e}function U(e){if(e.hydrate_init)return;e.hydrate_init=!0;let n=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let r=0;r<n.length;r++){const u=n[r];u.claim_order!==void 0&&i.push(u)}n=i}const t=new Int32Array(n.length+1),o=new Int32Array(n.length);t[0]=-1;let l=0;for(let i=0;i<n.length;i++){const r=n[i].claim_order,u=(l>0&&n[t[l]].claim_order<=r?l+1:Z(1,l,d=>n[t[d]].claim_order,r))-1;o[i]=t[u]+1;const _=u+1;t[_]=i,l=Math.max(_,l)}const a=[],c=[];let s=n.length-1;for(let i=t[l]+1;i!=0;i=o[i-1]){for(a.push(n[i-1]);s>=i;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);a.reverse(),c.sort((i,r)=>i.claim_order-r.claim_order);for(let i=0,r=0;i<c.length;i++){for(;r<a.length&&c[i].claim_order>=a[r].claim_order;)r++;const u=r<a.length?a[r]:null;e.insertBefore(c[i],u)}}function ee(e,n){if(A){for(U(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;n!==e.actual_end_child?(n.claim_order!==void 0||n.parentNode!==e)&&e.insertBefore(n,e.actual_end_child):e.actual_end_child=n.nextSibling}else(n.parentNode!==e||n.nextSibling!==null)&&e.appendChild(n)}function ye(e,n,t){A&&!t?ee(e,n):(n.parentNode!==e||n.nextSibling!=t)&&e.insertBefore(n,t||null)}function ne(e){e.parentNode.removeChild(e)}function te(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function ge(){return D(" ")}function xe(){return D("")}function we(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function ie(e){return Array.from(e.childNodes)}function ce(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function J(e,n,t,o,l=!1){ce(e);const a=(()=>{for(let c=e.claim_info.last_index;c<e.length;c++){const s=e[c];if(n(s)){const i=t(s);return i===void 0?e.splice(c,1):e[c]=i,l||(e.claim_info.last_index=c),s}}for(let c=e.claim_info.last_index-1;c>=0;c--){const s=e[c];if(n(s)){const i=t(s);return i===void 0?e.splice(c,1):e[c]=i,l?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=c,s}}return o()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function le(e,n,t,o){return J(e,l=>l.nodeName===n,l=>{const a=[];for(let c=0;c<l.attributes.length;c++){const s=l.attributes[c];t[s.name]||a.push(s.name)}a.forEach(c=>l.removeAttribute(c))},()=>o(n))}function $e(e,n,t){return le(e,n,t,te)}function re(e,n){return J(e,t=>t.nodeType===3,t=>{const o=""+n;if(t.data.startsWith(o)){if(t.data.length!==o.length)return t.splitText(o.length)}else t.data=o},()=>D(n),!0)}function be(e){return re(e," ")}function ke(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}let z;function w(e){z=e}const x=[],P=[],v=[],W=[],oe=Promise.resolve();let T=!1;function se(){T||(T=!0,oe.then(K))}function O(e){v.push(e)}const B=new Set;let S=0;function K(){const e=z;do{for(;S<x.length;){const n=x[S];S++,w(n),ae(n.$$)}for(w(null),x.length=0,S=0;P.length;)P.pop()();for(let n=0;n<v.length;n+=1){const t=v[n];B.has(t)||(B.add(t),t())}v.length=0}while(x.length);for(;W.length;)W.pop()();T=!1,B.clear(),w(e)}function ae(e){if(e.fragment!==null){e.update(),$(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(O)}}const j=new Set;let g;function Ee(){g={r:0,c:[],p:g}}function Se(){g.r||$(g.c),g=g.p}function Q(e,n){e&&e.i&&(j.delete(e),e.i(n))}function ve(e,n,t,o){if(e&&e.o){if(j.has(e))return;j.add(e),g.c.push(()=>{j.delete(e),o&&(t&&e.d(1),o())}),e.o(n)}}function je(e,n){e.d(1),n.delete(e.key)}function Ae(e,n,t,o,l,a,c,s,i,r,u,_){let d=e.length,m=a.length,h=d;const N={};for(;h--;)N[e[h].key]=h;const b=[],C=new Map,M=new Map;for(h=m;h--;){const f=_(l,a,h),p=t(f);let y=c.get(p);y?o&&y.p(f,n):(y=r(p,f),y.c()),C.set(p,b[h]=y),p in N&&M.set(p,Math.abs(h-N[p]))}const H=new Set,I=new Set;function q(f){Q(f,1),f.m(s,u),c.set(f.key,f),u=f.first,m--}for(;d&&m;){const f=b[m-1],p=e[d-1],y=f.key,k=p.key;f===p?(u=f.first,d--,m--):C.has(k)?!c.has(y)||H.has(y)?q(f):I.has(k)?d--:M.get(y)>M.get(k)?(I.add(y),q(f)):(H.add(k),d--):(i(p,c),d--)}for(;d--;){const f=e[d];C.has(f.key)||i(f,c)}for(;m;)q(b[m-1]);return b}function Ne(e,n){const t={},o={},l={$$scope:1};let a=e.length;for(;a--;){const c=e[a],s=n[a];if(s){for(const i in c)i in s||(o[i]=1);for(const i in s)l[i]||(t[i]=s[i],l[i]=1);e[a]=s}else for(const i in c)l[i]=1}for(const c in o)c in t||(t[c]=void 0);return t}function Ce(e){return typeof e=="object"&&e!==null?e:{}}function Me(e){e&&e.c()}function qe(e,n){e&&e.l(n)}function fe(e,n,t,o){const{fragment:l,on_mount:a,on_destroy:c,after_update:s}=e.$$;l&&l.m(n,t),o||O(()=>{const i=a.map(G).filter(R);c?c.push(...i):$(i),e.$$.on_mount=[]}),s.forEach(O)}function ue(e,n){const t=e.$$;t.fragment!==null&&($(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function de(e,n){e.$$.dirty[0]===-1&&(x.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Be(e,n,t,o,l,a,c,s=[-1]){const i=z;w(e);const r=e.$$={fragment:null,ctx:null,props:a,update:F,not_equal:l,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:L(),dirty:s,skip_bound:!1,root:n.target||i.$$.root};c&&c(r.root);let u=!1;if(r.ctx=t?t(e,n.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return r.ctx&&l(r.ctx[_],r.ctx[_]=h)&&(!r.skip_bound&&r.bound[_]&&r.bound[_](h),u&&de(e,_)),d}):[],r.update(),u=!0,$(r.before_update),r.fragment=o?o(r.ctx):!1,n.target){if(n.hydrate){X();const _=ie(n.target);r.fragment&&r.fragment.l(_),_.forEach(ne)}else r.fragment&&r.fragment.c();n.intro&&Q(e.$$.fragment),fe(e,n.target,n.anchor,n.customElement),Y(),K()}w(i)}class Te{$destroy(){ue(this,1),this.$destroy=F}$on(n,t){const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(t),()=>{const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}$set(n){this.$$set&&!V(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{me as A,ee as B,ke as C,Ae as D,je as E,Te as S,qe as a,ye as b,Me as c,Ce as d,xe as e,Se as f,Ne as g,Q as h,Be as i,ne as j,ue as k,_e as l,fe as m,pe as n,Ee as o,te as p,$e as q,ie as r,he as s,ve as t,F as u,ge as v,D as w,be as x,re as y,we as z};
