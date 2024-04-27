import{G as g,u as a,b as f,k as u,r as x,j as n,a5 as s}from"./index-B35r-TkY.js";const y=o=>o.modal.isOpenModal;function b(o){return g({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(o)}const v=a.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${o=>o.specialLook?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)"};
    /* width: 100vw;
     height: 100vh; */
    &:hover {
        cursor: pointer;
    }

    .modal {
        padding: 64px;
        max-width: 566px;
        width: 100%;
        min-height: 450px;
        background-color: ${o=>o.theme.colors.background};
        border-radius: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:hover {
            cursor: auto;
        }
    }
`,w=a(b)`
    fill: ${o=>o.theme.colors.black};

    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 32px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all var(--primary-transition);

    &:hover {
        transform: rotate(90deg);
        fill: ${o=>o.theme.colors.pink};
    }
`,M=a.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: start;
    margin-bottom: 20px;
    color: ${o=>o.theme.colors.black};
`,C=({title:o,isOpen:r,children:l,navigateTo:c,modalWidth:d})=>{const e=f(),i=u();x.useEffect(()=>{const t=m=>{m.code==="Escape"&&e(s())};return r&&(window.addEventListener("keydown",t),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[e,r,o,l]);const h=t=>{t.target===t.currentTarget&&e(s())},p=()=>{e(s()),i(c==="/teachers"?"/teachers":"/")};return r&&n.jsx(v,{onClick:h,children:n.jsxs("div",{className:"modal",style:{maxWidth:d},children:[n.jsx(w,{onClick:p}),l]})})},E=a.p`
    margin-bottom: 40px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: ${o=>o.theme.colors.modalBlack};
`;export{C as M,E as T,M as a,y as s};
