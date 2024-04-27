import{u as t}from"./index-B35r-TkY.js";const e=t.input`
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
`,i=t.div`
    margin-bottom: 22px;
`,n=t.button`
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
`;export{e as I,n as S,i as W};
