import React from "react";
import {
    RadioButtonContainer,
    RadioButtonInput,
    RadioButtonLabel,
    WrapperRadioButtons,
} from "./TrialForm.styled";

const TrialForm = () => {
    return (
        <form>
            <WrapperRadioButtons>
                <RadioButtonLabel htmlFor="option1">
                    <RadioButtonInput
                        type="radio"
                        id="option1"
                        name="options"
                        value="Career and business"
                    />
                    Career and business
                </RadioButtonLabel>
                <RadioButtonLabel htmlFor="option2">
                    <RadioButtonInput
                        type="radio"
                        id="option2"
                        name="options"
                        value="Lesson for kids"
                    />
                    Lesson for kids
                </RadioButtonLabel>
                <RadioButtonLabel htmlFor="option3">
                    <RadioButtonInput
                        type="radio"
                        id="option3"
                        name="options"
                        value="Living abroad"
                    />
                    Living abroad
                </RadioButtonLabel>
                <RadioButtonLabel htmlFor="option4">
                    <RadioButtonInput
                        type="radio"
                        id="option4"
                        name="options"
                        value="Exams and coursework"
                    />
                    Exams and coursework
                </RadioButtonLabel>
                <RadioButtonLabel htmlFor="option5">
                    <RadioButtonInput
                        type="radio"
                        id="option5"
                        name="options"
                        value="Culture, travel or hobby"
                    />
                    Culture, travel or hobby
                </RadioButtonLabel>
            </WrapperRadioButtons>
        </form>
    );
};

export default TrialForm;
