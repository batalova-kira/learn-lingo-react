import{g as t,G as h,u as m,k as g,r as f,j as n,a4 as i}from"./index-K_abr6Qp.js";const v=t.input`
    margin-bottom: 18px;
    padding: 16px 18px;
    width: 100%;

    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.37;

    border-radius: 12px;
    border: 1px solid ${o=>o.theme.colors.borderBlack};
    color: ${o=>o.theme.colors.black};

    &::placeholder {
        color: ${o=>o.theme.colors.black};
        opacity: 1;
    }

    &:focus {
        outline: 1px solid ${o=>o.theme.colors.darkPink};
    }
`,w=t.div`
    margin-bottom: 22px;
`,y=t.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px 0;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;

    border-radius: 12px;
    color: ${o=>o.theme.colors.black};
    background: ${o=>o.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${o=>o.theme.colors.darkPink};
    }
`;function u(o){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(o)}const x=t.div`
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
`,b=t(u)`
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
`,$=t.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: start;
    margin-bottom: 20px;
    color: ${o=>o.theme.colors.black};
`,M=({title:o,isOpen:a,children:l})=>{const r=m(),s=g();f.useEffect(()=>{console.log("useEffect для Escape");const e=p=>{p.code==="Escape"&&r(i())};return a&&(window.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",e),document.body.style.overflow="auto"}},[r,a,o,l]);const c=e=>{e.target===e.currentTarget&&r(i())},d=()=>{r(i()),s("/")};return a&&n.jsx(x,{onClick:c,children:n.jsxs("div",{className:"modal",children:[n.jsx(b,{onClick:d}),l]})})},E=t.p`
    margin-bottom: 40px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: ${o=>o.theme.colors.modalBlack};
`,j=o=>o.modal.isOpenModal;export{v as I,M,y as S,$ as T,w as W,E as a,j as s};
