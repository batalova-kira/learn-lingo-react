import{G as f,u as t,b as g,k as u,r as x,j as n,a5 as i}from"./index-BWhIjZrH.js";const y=o=>o.modal.isOpenModal;function b(o){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(o)}const k=t.div`
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
`,v=t(b)`
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
`,M=({title:o,isOpen:a,children:s,navigateTo:c,modalWidth:d})=>{const r=g(),l=u();x.useEffect(()=>{const e=m=>{m.code==="Escape"&&r(i())};return a&&(window.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",e),document.body.style.overflow="auto"}},[r,a,o,s]);const p=e=>{e.target===e.currentTarget&&r(i())},h=()=>{r(i()),l(c==="/teachers"?"/teachers":"/")};return a&&n.jsx(k,{onClick:p,children:n.jsxs("div",{className:"modal",style:{maxWidth:d},children:[n.jsx(v,{onClick:h}),s]})})},j=t.p`
    margin-bottom: 40px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: ${o=>o.theme.colors.modalBlack};
`,z=t.input`
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
`,C=t.div`
    margin-bottom: 22px;
`,E=t.button`
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
`;export{z as I,M,E as S,j as T,C as W,$ as a,y as s};