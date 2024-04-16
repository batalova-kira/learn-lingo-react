import{u as r,j as e,r as n,g as p,a as x,o as h,b as g}from"./index-BrAIyucr.js";const f=r.div`
    display: flex;
    /* gap: 48px; */

    max-width: 1184px;
    padding: 24px;

    border-radius: 24px;
    background-color: ${t=>t.theme.colors.background};
`,m=r.div`
    display: block;
    position: relative;
    margin-right: 48px;
`,u=r.img`
    width: 120px;
    height: 120px;
    padding: 9px;
    border-radius: 100px;
    border: 3px solid ${t=>t.theme.colors.pink};
    background-color: ${t=>t.theme.colors.background};
`,C=r.img`
    top: 20px;
    left: 87px;
    position: absolute;
`,v="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e",b=r.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`,j=r.div`
    display: block;
`,w=r.div`
    display: flex;
    flex-direction: column;
`,k=r.p`
    margin-bottom: 8px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 150%;
    color: ${t=>t.theme.colors.grey};
`,y=r.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 24px;
    line-height: 100%;
    color: ${t=>t.theme.colors.black};
`,H=r.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`,W="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.6667%204.13333C14.6667%203.3866%2014.6667%203.01323%2014.5213%202.72801C14.3935%202.47713%2014.1895%202.27316%2013.9387%202.14532C13.6534%202%2013.2801%202%2012.5333%202H12.2667C10.7732%202%2010.0265%202%209.45603%202.29065C8.95426%202.54631%208.54631%202.95426%208.29065%203.45603C8%204.02646%208%204.77319%208%206.26667V14L8.0667%2013.8999C8.5298%2013.2053%208.76135%2012.858%209.06727%2012.6065C9.33809%2012.3839%209.65016%2012.2169%209.9856%2012.1151C10.3645%2012%2010.7819%2012%2011.6168%2012H12.5333C13.2801%2012%2013.6534%2012%2013.9387%2011.8547C14.1895%2011.7268%2014.3935%2011.5229%2014.5213%2011.272C14.6667%2010.9868%2014.6667%2010.6134%2014.6667%209.86667V4.13333Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M1.33325%204.13333C1.33325%203.3866%201.33325%203.01323%201.47858%202.72801C1.60641%202.47713%201.81038%202.27316%202.06126%202.14532C2.34648%202%202.71985%202%203.46659%202H3.73325C5.22673%202%205.97346%202%206.54389%202.29065C7.04566%202.54631%207.45361%202.95426%207.70927%203.45603C7.99992%204.02646%207.99992%204.77319%207.99992%206.26667V14L7.93322%2013.8999C7.47012%2013.2053%207.23857%2012.858%206.93265%2012.6065C6.66182%2012.3839%206.34976%2012.2169%206.01432%2012.1151C5.63542%2012%205.21799%2012%204.38313%2012H3.46659C2.71985%2012%202.34648%2012%202.06126%2011.8547C1.81038%2011.7268%201.60641%2011.5229%201.47858%2011.272C1.33325%2010.9868%201.33325%2010.6134%201.33325%209.86667V4.13333Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",L=({item:t})=>{const{name:s,surname:o}=t;return e.jsxs(w,{children:[e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(k,{children:"Languages"}),e.jsxs(y,{children:[s," ",o]})]}),e.jsxs(H,{children:[e.jsx("img",{src:W,alt:"book"}),s]})]}),e.jsx("div",{children:"Description"})]})},T=({item:t})=>{const{avatar_url:s}=t;return e.jsxs(f,{children:[e.jsxs(m,{children:[e.jsx(u,{src:s,alt:"teacher"}),e.jsx(C,{src:v,alt:"online status"})]}),e.jsx(L,{item:t})]})},V=r.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
`,A=()=>{const[t,s]=n.useState([]);return n.useEffect(()=>{const o=p(g),i=x(o),c=h(i,l=>{const a=l.val();if(console.log("Updated data:",a),a&&typeof a=="object"){const d=Object.values(a);s(d)}});return()=>{c()}},[]),e.jsx(e.Fragment,{children:e.jsx(V,{children:t.map((o,i)=>e.jsx("li",{children:e.jsx(T,{item:o})},i))})})};export{A as default};
