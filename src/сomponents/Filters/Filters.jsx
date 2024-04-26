import Select from "react-select";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectLanguage,
    selectPrice,
    selectLevel,
} from "../../../redux/filters/filtersSelectors";

import { useSearchParams } from "react-router-dom";
import {
    setFilterLanguage,
    setFilterLevel,
    setFilterPrice,
} from "../../../redux/filters/filtersSlice";
import {
    FilterLabel,
    FilterThumb,
    FiltersWrapper,
    customStyles,
} from "./Filters.styled";

export const Filters = ({ teachers }) => {
    const dispatch = useDispatch();
    const filterLanguage = useSelector(selectLanguage);
    const filterLevel = useSelector(selectLevel);
    const filterPrice = useSelector(selectPrice);
    const priceOptions = teachers
        .map((teacher) => teacher.price_per_hour)
        .sort((a, b) => a - b)
        .filter((value, index, array) => {
            return index === 0 || value !== array[index - 1];
        })
        .map((price) => ({ value: price.toString(), label: price.toString() }));

    const levelOptions = [
        // { value: "", label: "All" },
        { value: "A1 Beginner", label: "A1 Beginner" },
        { value: "A2 Elementary", label: "A2 Elementary" },
        { value: "B1 Intermediate", label: "B1 Intermediate" },
        { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
        { value: "C1 Advanced", label: "C1 Advanced" },
        { value: "C2 Proficient", label: "C2 Proficient" },
    ];

    const languageOptions = [
        // { value: "", label: "All" },
        { value: "English", label: "English" },
        { value: "Spanish", label: "Spanish" },
        { value: "French", label: "French" },
        { value: "Italian", label: "Italian" },
        { value: "German", label: "German" },
        { value: "Mandarin Chinese", label: "Mandarin Chinese" },
        { value: "Korean", label: "Korean" },
        { value: "Vietnamese", label: "Vietnamese" },
    ];

    // Обробники подій для зміни фільтрів
    const handleLanguageChange = (selectedOption) => {
        dispatch(setFilterLanguage(selectedOption.value));
        console.log(selectedOption.value);
    };

    const handleLevelChange = (selectedOption) => {
        dispatch(setFilterLevel(selectedOption.value));
        console.log(selectedOption.value);
    };

    const handlePriceChange = (selectedOption) => {
        dispatch(setFilterPrice(selectedOption.value));
    };

    return (
        <FiltersWrapper>
            <FilterThumb>
                <FilterLabel htmlFor="language">Languages</FilterLabel>
                <Select
                    id="language"
                    value={languageOptions.find(
                        (option) => option.value === filterLanguage
                    )}
                    styles={customStyles}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                    placeholder="Select Language"
                />
            </FilterThumb>
            <FilterThumb>
                <FilterLabel htmlFor="knowledge">
                    Level of knowledge
                </FilterLabel>
                <Select
                    id="knowledge"
                    value={levelOptions.find(
                        (option) => option.value === filterLevel
                    )}
                    styles={customStyles}
                    onChange={handleLevelChange}
                    options={levelOptions}
                    placeholder="Select Level"
                />
            </FilterThumb>
            <FilterThumb>
                <FilterLabel htmlFor="price">Price</FilterLabel>
                <Select
                    id="price"
                    value={priceOptions.find(
                        (option) => option.value === filterPrice
                    )}
                    onChange={handlePriceChange}
                    styles={customStyles}
                    options={priceOptions}
                    placeholder="Select Price"
                />
            </FilterThumb>
        </FiltersWrapper>
    );
};
