import{r as s,j as n}from"./index-SUo8xEJ1.js";import{a6 as i}from"./App-iG37fEVl.js";const p=()=>{const[t,a]=s.useState({responsiblegaming:""});return s.useEffect(()=>((async()=>{const{response:e}=await i.responsibleGaming();e&&a(e.data)})(),()=>{}),[]),n.jsx("div",{dangerouslySetInnerHTML:{__html:t.responsiblegaming||""}})};export{p as default};
