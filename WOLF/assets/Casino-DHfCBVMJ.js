import{r as e,d as j,j as s}from"./index-CLajQCFY.js";import{H as T}from"./homeLayout-D8H0Pmhv.js";import{h as S,i as k,u as w,j as I,B as l,k as v,l as B}from"./index-BOfNt5KB.js";import{g as c,T as A}from"./ResetPasswordDailog-DENbGFi4.js";import{s as R,U,M as $,a7 as E}from"./App-_Muo2KxM.js";import{T as H}from"./Tabs-CvysXklk.js";import"./Footer-lwCx5gOJ.js";const N=R(S)(({theme:o})=>({borderRadius:"20px",marginRight:"10px",paddingTop:"2px",paddingBottom:"2px",minHeight:50,border:"2px solid #3c444b",[`&.${k.selected}`]:{borderColor:o.palette.primary.main,color:"#AAAFB5"}})),Q=()=>{var f;const[o,d]=e.useState("323334"),[i,C]=e.useState([]),[n,m]=e.useState(0),[r,x]=e.useState([]),g=localStorage.getItem("token"),u=j(),{isSignedIn:p,setCasinoId:h}=e.useContext(U),b=async()=>{if(!p){u("/");return}Number(o)===323334?$.get("https://admin-api-banners-2.s3.ap-south-1.amazonaws.com/wolf.json").then(a=>x(a.data.data)):x([])};e.useEffect(()=>{b()},[o,p]),e.useEffect(()=>((async()=>{if(!p){u("/");return}const{response:t}=await E.getCasinoTypes();t&&(C((t==null?void 0:t.data)||[]),t.data[0]&&(d(t.data[0].id),b()))})(),()=>{}),[]);const y=w("(max-width: 1279px)");return s.jsxs(T,{children:[(i==null?void 0:i.length)>0&&s.jsx(H,{variant:"scrollable",scrollButtons:!0,TabScrollButtonProps:{sx:{opacity:"1 !important",bgcolor:c.bg2,borderRadius:"50%",width:"40px",margin:"auto",height:"40px",marginRight:"10px"}},TabIndicatorProps:{sx:{display:"none"}},sx:{position:"sticky",top:y?50:80,paddingY:"0.8rem",backgroundColor:c.bg6},value:o,onChange:(a,t)=>{d(t),h&&h(t)},children:i.map(a=>s.jsx(N,{icon:s.jsx(I,{src:a.logo}),iconPosition:"start",value:a.id,label:a.name}))}),s.jsx(l,{bgcolor:c.bg1,children:s.jsxs(l,{m:"10px",display:"flex",flexWrap:"wrap",gap:"10px",children:[!((r==null?void 0:r.length)>0)&&s.jsx(A,{textAlign:"center",sx:{verticalAlign:"center"},flex:1,children:"NO Casino Found"}),r.map(a=>s.jsx(l,{width:{xs:"calc(50% - 10px)",sm:"calc(50% - 10px)",md:"calc(25% - 10px)",lg:"calc(20% - 10px)"},m:"auto",children:s.jsx(v,{onClick:()=>m(a.gameId),src:a.imageUrl,alt:"thumb"})}))]})}),!!n&&s.jsx(B,{type:"aura",name:(f=r.find(a=>a.gameId===n))==null?void 0:f.gameName,id:n,handleClose:()=>m(0),desktopUrl:`https://m.fawk.app/#/splash-screen/${g}/9482?opentable=${n}`,mobileUrl:`https://d.fawk.app/#/splash-screen/${g}/9482?opentable=${n}`})]})};export{Q as default};