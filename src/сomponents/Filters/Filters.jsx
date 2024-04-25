import Select from "react-select";
import React from "react";

export const Filters = ({
    filterLevel,
    setFilterLevel,
    filterPrice,
    setFilterPrice,
    filterLanguage,
    setFilterLanguage,
}) => {
    const levels = [
        { value: "", label: "All" },
        { value: "A1 Beginner", label: "A1 Beginner" },
        { value: "A2 Elementary", label: "A2 Elementary" },
        { value: "B1 Intermediate", label: "B1 Intermediate" },
        { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
        { value: "C1 Advanced", label: "C1 Advanced" },
        { value: "C2 Proficient", label: "C2 Proficient" },
    ];

    const priceOptions = [
        { value: "", label: "All" },
        { value: "10", label: "$10" },
        { value: "20", label: "$20" },
        { value: "30", label: "$30" },
    ];

    const languageOptions = [
        { value: "", label: "All" },
        { value: "English", label: "English" },
        { value: "Spanish", label: "Spanish" },
        { value: "French", label: "French" },
    ];

    const handlePriceChange = (selectedOption) => {
        setFilterPrice(selectedOption.value);
    };

    return (
        <div>
            <label>
                Filter by Level:
                <Select
                    value={levels.find(
                        (option) => option.value === filterLevel
                    )}
                    onChange={(selectedOption) =>
                        setFilterLevel(selectedOption.value)
                    }
                    options={levels}
                    placeholder="Select Level"
                />
            </label>
            <label>
                Filter by Price:
                <Select
                    value={priceOptions.find(
                        (option) => option.value === filterPrice
                    )}
                    onChange={handlePriceChange}
                    options={priceOptions}
                    placeholder="Select Price"
                />
            </label>
            <label>
                Filter by Language:
                <Select
                    value={languageOptions.find(
                        (option) => option.value === filterLanguage
                    )}
                    onChange={(selectedOption) =>
                        setFilterLanguage(selectedOption.value)
                    }
                    options={languageOptions}
                    placeholder="Select Language"
                />
            </label>
        </div>
    );
};
