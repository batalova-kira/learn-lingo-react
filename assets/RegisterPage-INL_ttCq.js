import{r as o,b as g,m as x,j as e,n as j,w as v,x as f,q as w,v as S,c as y}from"./index-CK3jrYDy.js";import{I as n,W as T,S as M,M as E,a as P,T as U,s as k}from"./SignUp.styled-BQfcyY7R.js";import{H as C}from"./Hero-Cdi1rTM-.js";const I=()=>{const[s,c]=o.useState(""),[i,u]=o.useState(""),[l,p]=o.useState(""),d=g(),m=x(),h=async a=>{a.preventDefault();try{const r=j(),t=(await v(r,i,l)).user;await f(t,{displayName:s}),d(w(t.accessToken)),d(S({name:t.displayName,email:t.email,id:t.uid,token:t.accessToken})),m("/")}catch(r){console.error("Error registering user:",r)}};return e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{children:e.jsx(n,{type:"text",value:s,onChange:a=>c(a.target.value),required:!0,placeholder:"Name"})}),e.jsx("div",{children:e.jsx(n,{type:"email",value:i,onChange:a=>u(a.target.value),required:!0,placeholder:"Email"})}),e.jsx(T,{children:e.jsx(n,{type:"password",value:l,onChange:a=>p(a.target.value),required:!0,placeholder:"Password"})}),e.jsx(M,{type:"submit",children:"Sign Up"})]})},N=({isOpen:s})=>e.jsxs(E,{isOpen:s,children:[e.jsx(P,{children:"Registration"}),e.jsx(U,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),e.jsx(I,{})]}),O=()=>{const s=y(k);return console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(N,{isOpen:s}),e.jsx(C,{})]})};export{O as default};
