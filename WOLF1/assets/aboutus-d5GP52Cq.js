import{r as s,j as a}from"./index-SUo8xEJ1.js";import{a6 as r}from"./App-iG37fEVl.js";const c=()=>{const[e,o]=s.useState({aboutus:""});return s.useEffect(()=>((async()=>{const{response:t}=await r.aboutUs();t&&o(t.data)})(),()=>{}),[]),a.jsx("div",{children:a.jsx("div",{dangerouslySetInnerHTML:{__html:e.aboutus||""}})})};export{c as default};