import{r as s,j as n}from"./index-pAStOGcL.js";import{a6 as i}from"./App-DUvdAMYw.js";const p=()=>{const[t,a]=s.useState({responsiblegaming:""});return s.useEffect(()=>((async()=>{const{response:e}=await i.responsibleGaming();e&&a(e.data)})(),()=>{}),[]),n.jsx("div",{dangerouslySetInnerHTML:{__html:t.responsiblegaming||""}})};export{p as default};