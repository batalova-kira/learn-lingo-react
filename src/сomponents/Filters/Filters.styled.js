import styled from "styled-components";

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 32px;
`;
export const FilterThumb = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FilterLabel = styled.label`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.29;
    color: ${(props) => props.theme.colors.grey};
`;

export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#fff",
        borderRadius: "14px",
        padding: "6px",
        borderColor: state.isFocused ? "#00f" : "#fff",
        width: "auto",
        boxShadow: state.isFocused ? "none" : provided.boxShadow,
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#fff",
        borderRadius: "14px",
        paddingRight: "10px",
    }),
    menuList: (provided) => ({
        ...provided,
        "&::-webkit-scrollbar": {
            width: "8px",
            paddingRight: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#f3f3f3",
            borderRadius: "10px",
            margin: "14px 8px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
            borderRadius: "10px",
            margin: "14px 8px",
        },
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
        backgroundColor: "transparent",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: 1.11,
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        cursor: "pointer",
    }),
};

export const BtnThumb = styled.div`
    display: flex;
    align-items: end;
`;

export const BtnReset = styled.button`
    display: inline-block;
    padding: 14px 28px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 14px;
    line-height: 1.56;

    border-radius: 12px;

    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.pink};

    height: auto;
    &:hover {
        cursor: pointer;
        background: ${(p) => p.theme.colors.lightPink};
    }
`;
