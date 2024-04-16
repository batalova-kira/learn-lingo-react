import React from "react";
import {
    HeaderLanguages,
    HeaderName,
    WrapperHeaderCard,
    WrapperHeaderDesc,
    WrapperName,
    WrapperTitle,
} from "./CardHeader.styled";
import IconBook from "../../assets/icons/book.svg";
export const CardHeader = ({ item }) => {
    const { name, surname } = item;
    return (
        <WrapperHeaderDesc>
            <WrapperHeaderCard>
                <WrapperName>
                    <HeaderLanguages>Languages</HeaderLanguages>
                    <HeaderName>
                        {name} {surname}
                    </HeaderName>
                </WrapperName>

                <WrapperTitle>
                    <img src={IconBook} alt="book" />
                    {name}
                </WrapperTitle>
            </WrapperHeaderCard>
            <div>Description</div>
        </WrapperHeaderDesc>
    );
};
