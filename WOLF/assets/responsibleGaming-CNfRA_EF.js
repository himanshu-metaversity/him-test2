import{r as s,j as n}from"./index-BBPalNW0.js";import{a5 as i}from"./App-DW-myqrw.js";const p=()=>{const[t,a]=s.useState({responsiblegaming:""});return s.useEffect(()=>((async()=>{const{response:e}=await i.responsibleGaming();e&&a(e.data)})(),()=>{}),[]),n.jsx("div",{dangerouslySetInnerHTML:{__html:t.responsiblegaming||""}})};export{p as default};