import{u as a,j as e,r as n,g as p,a as x,o as h,b as u}from"./index-COqw1jBu.js";const g=a.div`
    display: flex;
    gap: 48px;

    max-width: 1184px;
    padding: 24px;

    border-radius: 24px;
    background-color: ${s=>s.theme.colors.background};
`,b=a.div`
    position: relative;
`,m=a.img`
    width: 120px;
    height: 120px;
    padding: 9px;
    border-radius: 100px;
    border: 3px solid ${s=>s.theme.colors.pink};
    background-color: ${s=>s.theme.colors.background};
`,f=a.img`
    top: 20px;
    left: 87px;
    position: absolute;
`,v="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e",j=({item:s})=>{const{avatar_url:c,name:t}=s;return e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(m,{src:c,alt:"teacher"}),e.jsx(f,{src:v,alt:"online status"})]}),e.jsx("div",{children:e.jsx("p",{children:t})})]})},w=a.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
`,k=()=>{const[s,c]=n.useState([]);return n.useEffect(()=>{const t=p(u),o=x(t),i=h(o,l=>{const r=l.val();if(console.log("Updated data:",r),r&&typeof r=="object"){const d=Object.values(r);c(d)}});return()=>{i()}},[]),e.jsx(e.Fragment,{children:e.jsx(w,{children:s.map((t,o)=>e.jsx("li",{children:e.jsx(j,{item:t})},o))})})};export{k as default};
