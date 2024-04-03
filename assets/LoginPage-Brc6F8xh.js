import{r as p,u as h,c as g,j as e,s as m,d as x,e as u,f,N as v}from"./index-DTujAINs.js";import{g as w,s as j}from"./index-e939beb5-B-Mo4eNK.js";const b=()=>{const[t,n]=p.useState(""),[a,o]=p.useState(""),l=h(),s=g(),c=async r=>{r.preventDefault();try{const d=w(),i=(await j(d,t,a)).user;console.log(i),l(m({name:i.displayName,email:i.email,id:i.uid,token:i.accessToken})),s("/")}catch(d){console.error("Error registering user:",d)}};return e.jsxs("form",{onSubmit:c,children:[e.jsx("input",{type:"email",value:t,onChange:r=>n(r.target.value),placeholder:"Email"}),e.jsx("input",{type:"password",value:a,onChange:r=>o(r.target.value),placeholder:"Password"}),e.jsx("button",{type:"submit",children:"Sign In"})]})},y=x.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${t=>t.specialLook?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)"};
    /* width: 100vw;
     height: 100vh; */
    &:hover {
        cursor: pointer;
    }
    .modal {
        padding: 20px;
        max-width: 450px;
        width: 100%;
        min-height: 450px;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:hover {
            cursor: auto;
        }
    }

    .closeBtn {
        position: absolute;
        top: 15px;
        right: 15px;
    }
`,E=({title:t,isOpen:n,children:a})=>{const o=h();p.useEffect(()=>{console.log("useEffect для Escape");const s=c=>{c.code==="Escape"&&o(u())};return n&&(window.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",s),document.body.style.overflow="auto"}},[o,n,t,a]);const l=s=>{s.target===s.currentTarget&&o(u())};return n&&e.jsx(y,{onClick:l,children:e.jsxs("div",{className:"modal",children:[e.jsx("button",{onClick:()=>o(u()),className:"closeBtn",children:"×"}),e.jsx("h2",{children:t}),a]})})},k=({isOpen:t})=>e.jsx(E,{title:"Sign In",isOpen:t,children:e.jsx(b,{})}),S=t=>t.modal.isOpenModal,N=()=>{const t=f(S);return console.log(t),e.jsxs(e.Fragment,{children:[e.jsx(k,{isOpen:t}),e.jsxs("p",{children:["Or ",e.jsx(v,{to:"/registration",children:"Registration"})]})]})};export{N as default};
