import{r as s,j as n}from"./index-BSzgJ8Re.js";import{a6 as i}from"./App-CDbo5Lo0.js";const p=()=>{const[t,a]=s.useState({responsiblegaming:""});return s.useEffect(()=>((async()=>{const{response:e}=await i.responsibleGaming();e&&a(e.data)})(),()=>{}),[]),n.jsx("div",{dangerouslySetInnerHTML:{__html:t.responsiblegaming||""}})};export{p as default};