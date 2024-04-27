import{u as t,G as j,j as o,r as B,c as k,b as C,h as W,o as R,i as H,B as I,t as _,N as A}from"./index-B35r-TkY.js";import{T as D,M as S,a as P,s as E}from"./SignUpModal.styled-GFnI-TFk.js";const N=t.div`
    display: flex;
    /* gap: 48px; */

    max-width: 1184px;
    padding: 24px;

    border-radius: 24px;
    background-color: ${e=>e.theme.colors.background};
`,Z=t.div`
    display: block;
    position: relative;
    margin-right: 48px;
`,O=t.img`
    width: 144px;
    height: 120px;
    padding: 9px;
    border-radius: 100px;
    border: 3px solid ${e=>e.theme.colors.pink};
    background-color: ${e=>e.theme.colors.background};
`,G=t.img`
    top: 20px;
    left: 92px;
    position: absolute;
`,V="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e";function Q(e){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(e)}function Y(e){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}const q=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`,J=t.div`
    /* margin-right: auto; */
`,K=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,x=t.p`
    margin-bottom: 8px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 150%;
    color: ${e=>e.theme.colors.grey};
`,U=t.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 24px;
    line-height: 100%;
    color: ${e=>e.theme.colors.black};
    margin-bottom: 32px;
`,X=t.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* justify-content: flex-end; */
`,p=t.p`
    margin-right: 16px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
`,y=t.img`
    padding-top: 4px;
    margin-right: 4px;
`,b=t.span`
    margin-right: 16px;
    color: ${e=>e.theme.colors.spanGrey};
`,ee=t.span`
    margin-right: 48px;
    color: ${e=>e.theme.colors.green};
`,oe=t.button`
    border: none;
    background: none;
`,te=t(Q)`
    font-size: 22px;
    color: ${e=>e.theme.colors.black};
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${e=>e.theme.colors.pink};
    }
`,ie=t(Y)`
    font-size: 22px;
    color: ${e=>e.theme.colors.pink};
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${e=>e.theme.colors.lightPink};
    }
`,ne="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.6667%204.13333C14.6667%203.3866%2014.6667%203.01323%2014.5213%202.72801C14.3935%202.47713%2014.1895%202.27316%2013.9387%202.14532C13.6534%202%2013.2801%202%2012.5333%202H12.2667C10.7732%202%2010.0265%202%209.45603%202.29065C8.95426%202.54631%208.54631%202.95426%208.29065%203.45603C8%204.02646%208%204.77319%208%206.26667V14L8.0667%2013.8999C8.5298%2013.2053%208.76135%2012.858%209.06727%2012.6065C9.33809%2012.3839%209.65016%2012.2169%209.9856%2012.1151C10.3645%2012%2010.7819%2012%2011.6168%2012H12.5333C13.2801%2012%2013.6534%2012%2013.9387%2011.8547C14.1895%2011.7268%2014.3935%2011.5229%2014.5213%2011.272C14.6667%2010.9868%2014.6667%2010.6134%2014.6667%209.86667V4.13333Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M1.33325%204.13333C1.33325%203.3866%201.33325%203.01323%201.47858%202.72801C1.60641%202.47713%201.81038%202.27316%202.06126%202.14532C2.34648%202%202.71985%202%203.46659%202H3.73325C5.22673%202%205.97346%202%206.54389%202.29065C7.04566%202.54631%207.45361%202.95426%207.70927%203.45603C7.99992%204.02646%207.99992%204.77319%207.99992%206.26667V14L7.93322%2013.8999C7.47012%2013.2053%207.23857%2012.858%206.93265%2012.6065C6.66182%2012.3839%206.34976%2012.2169%206.01432%2012.1151C5.63542%2012%205.21799%2012%204.38313%2012H3.46659C2.71985%2012%202.34648%2012%202.06126%2011.8547C1.81038%2011.7268%201.60641%2011.5229%201.47858%2011.272C1.33325%2010.9868%201.33325%2010.6134%201.33325%209.86667V4.13333Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",$="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_44_287)'%3e%3cpath%20d='M6.20021%204.69703L8%201.28579L9.79979%204.69703C9.95896%204.9987%2010.2491%205.20947%2010.5851%205.26762L14.3856%205.92519L11.6975%208.69103C11.4598%208.93563%2011.3489%209.27666%2011.3975%209.61427L11.9465%2013.4319L8.48537%2011.7301C8.17929%2011.5795%207.82071%2011.5795%207.51463%2011.7301L4.05348%2013.4319L4.6025%209.61427C4.65105%209.27666%204.54024%208.93563%204.30252%208.69103L1.6144%205.92519L5.41486%205.26762C5.75095%205.20947%206.04104%204.9987%206.20021%204.69703Z'%20fill='%23FFC531'%20stroke='%23FFC531'%20stroke-width='1.2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_44_287'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",re=t.div`
    margin-bottom: 16px;
`,w=t.span`
    color: ${e=>e.theme.colors.black};
`,se=t.button`
    display: block;
    align-self: flex-start;

    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;

    border: none;
    color: ${e=>e.theme.colors.black};
    background: none;
`,ae=t.p`
    margin-bottom: 32px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
`,le=t.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 32px;
`,ce=t.button`
    display: block;
    padding: 8px 12px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.14;

    border-radius: 35px;

    border: 1px solid
        ${e=>e.selected?e.theme.colors.pink:e.theme.colors.spanGrey};
    color: ${e=>e.theme.colors.black};
    background: ${e=>e.selected?e.theme.colors.pink:e.theme.colors.background};
`,de=t.button`
    padding: 16px 48px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;

    border-radius: 12px;

    color: ${e=>e.theme.colors.black};
    background: ${e=>e.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${e=>e.theme.colors.lightPink};
    }
`;function he(e){return j({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor"},child:[]}]})(e)}const L=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
`;t(he)`
    width: 44px;
    height: 44px;
    color: ${e=>e.theme.colors.black};
`;const pe=t.h4`
    margin-bottom: 2px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.grey};
`,xe=t.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`,ge=t.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    color: ${e=>e.theme.colors.black};
`,me=t.p`
    margin-bottom: 32px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
`,fe=({review:e})=>{const{reviewer_name:i,reviewer_rating:n,comment:r}=e;return o.jsx(o.Fragment,{children:o.jsxs("div",{children:[o.jsxs(L,{children:[o.jsx("img",{}),o.jsxs("div",{children:[o.jsx(pe,{children:i}),o.jsxs(xe,{children:[o.jsx("img",{src:$,alt:"star rating"}),o.jsx(ge,{children:n.toFixed(1)})]})]})]}),o.jsx(me,{children:r})]})})},We=e=>e.filters.filterLanguage,ue=e=>e.filters.filterLevel,Re=e=>e.filters.filterPrice,ve=t(D)`
    margin-bottom: 20px;
`,be=t.img`
    border-radius: 100px;
    width: 44px;
    height: 44px;
`,we=t(L)`
    gap: 14px;
    margin-bottom: 40px;
`,ke=t.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,je=t.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 12px;
    line-height: 1.33;
    color: ${e=>e.theme.colors.grey};
`,ye=t.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
`,Ce=t.h3`
    margin-bottom: 20px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 24px;
    line-height: 1.33;
    color: ${e=>e.theme.colors.black};
`,$e=t.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;t.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 8px;
`;const a=t.label`
    display: flex;
    align-items: center;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.37;
    color: ${e=>e.theme.colors.black};
`,l=t.input`
    position: relative;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    appearance: none;
    color: ${e=>e.theme.colors.pink};
    border: 1px solid ${e=>e.theme.colors.spanGrey};
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
    &:hover {
        border: 1px solid ${e=>e.theme.colors.pink};
    }
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin: 4px;
        background-color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &:checked::after {
        background-color: ${e=>e.theme.colors.pink};
    }
    &:hover::after {
        background-color: ${e=>e.theme.colors.pink};
    }
    &::after {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Фокусний стиль */
    &:focus {
        outline: 2px solid ${e=>e.theme.colors.pink};
    }
`,Le=()=>o.jsx("form",{children:o.jsxs($e,{children:[o.jsxs(a,{htmlFor:"option1",children:[o.jsx(l,{type:"radio",id:"option1",name:"options",value:"Career and business"}),"Career and business"]}),o.jsxs(a,{htmlFor:"option2",children:[o.jsx(l,{type:"radio",id:"option2",name:"options",value:"Lesson for kids"}),"Lesson for kids"]}),o.jsxs(a,{htmlFor:"option3",children:[o.jsx(l,{type:"radio",id:"option3",name:"options",value:"Living abroad"}),"Living abroad"]}),o.jsxs(a,{htmlFor:"option4",children:[o.jsx(l,{type:"radio",id:"option4",name:"options",value:"Exams and coursework"}),"Exams and coursework"]}),o.jsxs(a,{htmlFor:"option5",children:[o.jsx(l,{type:"radio",id:"option5",name:"options",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]})]})}),Te=({isOpen:e,item:i})=>{const{name:n,avatar_url:r}=i;return o.jsx(o.Fragment,{children:o.jsxs(S,{isOpen:e,navigateTo:"/teachers",modalWidth:"600px",children:[o.jsx(P,{children:"Book trial lesson"}),o.jsx(ve,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),o.jsxs(we,{children:[o.jsx(be,{src:r,alt:"teacher"}),o.jsxs(ke,{children:[o.jsx(je,{children:"Your teacher"}),o.jsx(ye,{children:n})]})]}),o.jsx(Ce,{children:"What is your main reason for learning English?"}),o.jsx(Le,{})]})})},Fe=({item:e})=>{const[i,n]=B.useState(!1),r=k(ue),c=C(),g=k(E),m=s=>{c(W(s))},f=()=>{n(!i)},{languages:d,lesson_info:u,conditions:h,experience:T,reviews:F,levels:M}=e,z=()=>{c(R())};return o.jsxs(o.Fragment,{children:[o.jsxs(re,{children:[o.jsxs(x,{children:["Speaks:"," ",o.jsx(w,{children:d?d.join(", "):""})]}),o.jsxs(x,{children:["Lesson Info: ",o.jsx(w,{children:u})]}),o.jsxs(x,{children:["Conditions:"," ",o.jsx(w,{children:h?h.join(" "):""})]})]}),!i&&o.jsx(se,{type:"button",onClick:f,children:"Read more"}),i&&o.jsxs(o.Fragment,{children:[o.jsx(ae,{children:T}),o.jsxs("div",{children:[F.map((s,v)=>o.jsx(fe,{review:s},v)),o.jsx(le,{children:M.map((s,v)=>o.jsx(ce,{onClick:()=>m(s),selected:r===s,children:s},v))}),o.jsx(de,{onClick:z,children:"Book trial lesson"}),o.jsx(Te,{isOpen:g,item:e})]})]})]})},Me=({item:e,isFavorite:i})=>{const{name:n,surname:r,lessons_done:c,rating:g,price_per_hour:m}=e,f=C(),d=k(H),u=h=>{if(h.preventDefault(),!d){I.error("This feature is available only for authenticated users!");return}f(_(e))};return o.jsxs(K,{children:[o.jsxs(q,{children:[o.jsx(J,{children:o.jsx(x,{children:"Languages"})}),o.jsxs(X,{children:[o.jsx(y,{src:ne,alt:"book"}),o.jsx(p,{children:"Lessons online"}),o.jsx(b,{children:"|"}),o.jsxs(p,{children:["Lessons done: ",c]}),o.jsx(b,{children:"|"}),o.jsx(y,{src:$,alt:"star rating"}),o.jsxs(p,{children:["Rating: ",g]}),o.jsx(b,{children:"|"}),o.jsxs(p,{children:["Price / 1 hour:"," ",o.jsxs(ee,{children:[m,"$"]})]}),o.jsx(oe,{type:"button",onClick:u,children:i?o.jsx(ie,{}):o.jsx(te,{})})]})]}),o.jsxs(U,{children:[n," ",r]}),o.jsx(Fe,{item:e})]})},He=({item:e,isFavorite:i})=>{const{avatar_url:n}=e;return o.jsxs(N,{children:[o.jsxs(Z,{children:[o.jsx(O,{src:n,alt:"teacher"}),o.jsx(G,{src:V,alt:"online status"})]}),o.jsx(Me,{item:e,isFavorite:i})]})},Ie=t.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 64px;
`,_e=t.button`
    margin-right: auto;
    margin-left: auto;
    padding: 16px 48px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;

    border-radius: 12px;

    color: ${e=>e.theme.colors.black};
    background: ${e=>e.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${e=>e.theme.colors.lightPink};
    }
`,Ae=t.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    padding: 40px 100px;
`,De=t.p`
    width: 100%;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 20px;
    line-height: 1.37;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Se=t(A)`
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 20px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.pink};
    text-decoration: none;

    &:hover {
        cursor: pointer;

        color: ${e=>e.theme.colors.lightPink};
        border-radius: 5px;
    }
`;export{_e as B,Se as S,Ie as T,Ae as W,ue as a,Re as b,He as c,De as d,We as s};
