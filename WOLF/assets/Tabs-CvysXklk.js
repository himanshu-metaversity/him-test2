import{k as ye,_ as re,W as Ce,b as f,X as le,g as Be,a as Te,s as I,B as Pe,h as Me,p as Ee,i as L,e as ze,x as te,o as $e}from"./App-_Muo2KxM.js";import{j as b,r as c}from"./index-CLajQCFY.js";import"./ResetPasswordDailog-DENbGFi4.js";let R;function Re(){if(R)return R;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),R="reverse",e.scrollLeft>0?R="default":(e.scrollLeft=1,e.scrollLeft===0&&(R="negative")),document.body.removeChild(e),R}function me(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Re()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}const _e=ye(b.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Ue=ye(b.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Ve(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Oe(e,t,r,a={},i=()=>{}){const{ease:d=Ve,duration:p=300}=a;let m=null;const S=t[e];let g=!1;const M=()=>{g=!0},D=W=>{if(g){i(new Error("Animation cancelled"));return}m===null&&(m=W);const N=Math.min(1,(W-m)/p);if(t[e]=d(N)*(r-S)+S,N>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(D)};return S===r?(i(new Error("Element already at target position")),M):(requestAnimationFrame(D),M)}const qe=["onChange"],Ge={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Je(e){const{onChange:t}=e,r=re(e,qe),a=c.useRef(),i=c.useRef(null),d=()=>{a.current=i.current.offsetHeight-i.current.clientHeight};return c.useEffect(()=>{const p=le(()=>{const S=a.current;d(),S!==a.current&&t(a.current)}),m=Ce(i.current);return m.addEventListener("resize",p),()=>{p.clear(),m.removeEventListener("resize",p)}},[t]),c.useEffect(()=>{d(),t(a.current)},[t]),b.jsx("div",f({style:Ge,ref:i},r))}function Qe(e){return Te("MuiTabScrollButton",e)}const Ze=Be("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);var Se,ve;const et=["className","direction","orientation","disabled"],tt=e=>{const{classes:t,orientation:r,disabled:a}=e;return ze({root:["root",r,a&&"disabled"]},Qe,t)},ot=I(Pe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>f({width:40,flexShrink:0,opacity:.8,[`&.${Ze.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),lt=c.forwardRef(function(t,r){const a=Me({props:t,name:"MuiTabScrollButton"}),{className:i,direction:d}=a,p=re(a,et),S=Ee().direction==="rtl",g=f({isRtl:S},a),M=tt(g);return b.jsx(ot,f({component:"div",className:L(M.root,i),ref:r,role:null,ownerState:g,tabIndex:null},p,{children:d==="left"?Se||(Se=b.jsx(_e,{fontSize:"small"})):ve||(ve=b.jsx(Ue,{fontSize:"small"}))}))});function rt(e){return Te("MuiTabs",e)}const oe=Be("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),nt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],xe=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,ge=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,V=(e,t,r)=>{let a=!1,i=r(e,t);for(;i;){if(i===e.firstChild){if(a)return;a=!0}const d=i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||d)i=r(e,i);else{i.focus();return}}},st=e=>{const{vertical:t,fixed:r,hideScrollbar:a,scrollableX:i,scrollableY:d,centered:p,scrollButtonsHideMobile:m,classes:S}=e;return ze({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",a&&"hideScrollbar",i&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",m&&"scrollButtonsHideMobile"],scrollableX:[i&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},rt,S)},it=I("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${oe.scrollButtons}`]:t.scrollButtons},{[`& .${oe.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>f({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${oe.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),at=I("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>f({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),ct=I("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>f({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),dt=I("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>f({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),ut=I(Je,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),we={},pt=c.forwardRef(function(t,r){const a=Me({props:t,name:"MuiTabs"}),i=Ee(),d=i.direction==="rtl",{"aria-label":p,"aria-labelledby":m,action:S,centered:g=!1,children:M,className:D,component:W="div",allowScrollButtonsMobile:N=!1,indicatorColor:Le="primary",onChange:Ie,orientation:w="horizontal",ScrollButtonComponent:ne=lt,scrollButtons:F="auto",selectionFollowsFocus:We,TabIndicatorProps:O={},TabScrollButtonProps:K={},textColor:se="primary",value:Y,variant:q="standard",visibleScrollbar:G=!1}=a,Ne=re(a,nt),y=q==="scrollable",h=w==="vertical",A=h?"scrollTop":"scrollLeft",P=h?"top":"left",$=h?"bottom":"right",J=h?"clientHeight":"clientWidth",k=h?"height":"width",j=f({},a,{component:W,allowScrollButtonsMobile:N,indicatorColor:Le,orientation:w,vertical:h,scrollButtons:F,textColor:se,variant:q,visibleScrollbar:G,fixed:!y,hideScrollbar:y&&!G,scrollableX:y&&!h,scrollableY:y&&h,centered:g&&!y,scrollButtonsHideMobile:!N}),C=st(j),[ie,Ae]=c.useState(!1),[B,ae]=c.useState(we),[E,ke]=c.useState({start:!1,end:!1}),[ce,je]=c.useState({overflow:"hidden",scrollbarWidth:0}),de=new Map,x=c.useRef(null),H=c.useRef(null),ue=()=>{const o=x.current;let l;if(o){const s=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:me(o,i.direction),scrollWidth:o.scrollWidth,top:s.top,bottom:s.bottom,left:s.left,right:s.right}}let n;if(o&&Y!==!1){const s=H.current.children;if(s.length>0){const u=s[de.get(Y)];n=u?u.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:n}},X=te(()=>{const{tabsMeta:o,tabMeta:l}=ue();let n=0,s;if(h)s="top",l&&o&&(n=l.top-o.top+o.scrollTop);else if(s=d?"right":"left",l&&o){const v=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;n=(d?-1:1)*(l[s]-o[s]+v)}const u={[s]:n,[k]:l?l[k]:0};if(isNaN(B[s])||isNaN(B[k]))ae(u);else{const v=Math.abs(B[s]-u[s]),z=Math.abs(B[k]-u[k]);(v>=1||z>=1)&&ae(u)}}),Q=(o,{animation:l=!0}={})=>{l?Oe(A,x.current,o,{duration:i.transitions.duration.standard}):x.current[A]=o},fe=o=>{let l=x.current[A];h?l+=o:(l+=o*(d?-1:1),l*=d&&Re()==="reverse"?-1:1),Q(l)},be=()=>{const o=x.current[J];let l=0;const n=Array.from(H.current.children);for(let s=0;s<n.length;s+=1){const u=n[s];if(l+u[J]>o){s===0&&(l=o);break}l+=u[J]}return l},He=()=>{fe(-1*be())},Xe=()=>{fe(be())},De=c.useCallback(o=>{je({overflow:null,scrollbarWidth:o})},[]),Fe=()=>{const o={};o.scrollbarSizeListener=y?b.jsx(ut,{onChange:De,className:L(C.scrollableX,C.hideScrollbar)}):null;const l=E.start||E.end,n=y&&(F==="auto"&&l||F===!0);return o.scrollButtonStart=n?b.jsx(ne,f({orientation:w,direction:d?"right":"left",onClick:He,disabled:!E.start},K,{className:L(C.scrollButtons,K.className)})):null,o.scrollButtonEnd=n?b.jsx(ne,f({orientation:w,direction:d?"left":"right",onClick:Xe,disabled:!E.end},K,{className:L(C.scrollButtons,K.className)})):null,o},he=te(o=>{const{tabsMeta:l,tabMeta:n}=ue();if(!(!n||!l)){if(n[P]<l[P]){const s=l[A]+(n[P]-l[P]);Q(s,{animation:o})}else if(n[$]>l[$]){const s=l[A]+(n[$]-l[$]);Q(s,{animation:o})}}}),T=te(()=>{if(y&&F!==!1){const{scrollTop:o,scrollHeight:l,clientHeight:n,scrollWidth:s,clientWidth:u}=x.current;let v,z;if(h)v=o>1,z=o<l-n-1;else{const U=me(x.current,i.direction);v=d?U<s-u-1:U>1,z=d?U>1:U<s-u-1}(v!==E.start||z!==E.end)&&ke({start:v,end:z})}});c.useEffect(()=>{const o=le(()=>{x.current&&(X(),T())}),l=Ce(x.current);l.addEventListener("resize",o);let n;return typeof ResizeObserver<"u"&&(n=new ResizeObserver(o),Array.from(H.current.children).forEach(s=>{n.observe(s)})),()=>{o.clear(),l.removeEventListener("resize",o),n&&n.disconnect()}},[X,T]);const Z=c.useMemo(()=>le(()=>{T()}),[T]);c.useEffect(()=>()=>{Z.clear()},[Z]),c.useEffect(()=>{Ae(!0)},[]),c.useEffect(()=>{X(),T()}),c.useEffect(()=>{he(we!==B)},[he,B]),c.useImperativeHandle(S,()=>({updateIndicator:X,updateScrollButtons:T}),[X,T]);const pe=b.jsx(dt,f({},O,{className:L(C.indicator,O.className),ownerState:j,style:f({},B,O.style)}));let _=0;const Ke=c.Children.map(M,o=>{if(!c.isValidElement(o))return null;const l=o.props.value===void 0?_:o.props.value;de.set(l,_);const n=l===Y;return _+=1,c.cloneElement(o,f({fullWidth:q==="fullWidth",indicator:n&&!ie&&pe,selected:n,selectionFollowsFocus:We,onChange:Ie,textColor:se,value:l},_===1&&Y===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Ye=o=>{const l=H.current,n=$e(l).activeElement;if(n.getAttribute("role")!=="tab")return;let u=w==="horizontal"?"ArrowLeft":"ArrowUp",v=w==="horizontal"?"ArrowRight":"ArrowDown";switch(w==="horizontal"&&d&&(u="ArrowRight",v="ArrowLeft"),o.key){case u:o.preventDefault(),V(l,n,ge);break;case v:o.preventDefault(),V(l,n,xe);break;case"Home":o.preventDefault(),V(l,null,xe);break;case"End":o.preventDefault(),V(l,null,ge);break}},ee=Fe();return b.jsxs(it,f({className:L(C.root,D),ownerState:j,ref:r,as:W},Ne,{children:[ee.scrollButtonStart,ee.scrollbarSizeListener,b.jsxs(at,{className:C.scroller,ownerState:j,style:{overflow:ce.overflow,[h?`margin${d?"Left":"Right"}`:"marginBottom"]:G?void 0:-ce.scrollbarWidth},ref:x,onScroll:Z,children:[b.jsx(ct,{"aria-label":p,"aria-labelledby":m,"aria-orientation":w==="vertical"?"vertical":null,className:C.flexContainer,ownerState:j,onKeyDown:Ye,ref:H,role:"tablist",children:Ke}),ie&&pe]}),ee.scrollButtonEnd]}))});export{pt as T,oe as t};