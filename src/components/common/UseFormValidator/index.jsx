import { useState } from "react";

function useFormValidator(options) {
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [disabledFields, setDisabledFields] = useState([]);

    // Validate a single field
    const validateField = (name, value) => {
        let errorMessage = "";
        const fieldRules = options.rules[name] || [];

        for (let i = 0; i < fieldRules.length; i++) {
            errorMessage = fieldRules[i].test(value);
            if (errorMessage) break;
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));

        return !errorMessage;
    };

    // Handle change events for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        // Clear error message when user is typing
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    // Handle blur events for inputs
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!disabledFields.includes(name)) {
            validateField(name, value);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = true;

        // Validate all fields that are not disabled
        for (const name in options.rules) {
            if (!disabledFields.includes(name)) {
                const isValid = validateField(name, formValues[name] || "");
                if (!isValid) isFormValid = false;
            }
        }

        if (isFormValid) {
            if (typeof options.onSubmit === "function") {
                options.onSubmit(formValues);
            }
			// console.log(formValues);
        }
    };

    // Determine if the form group should have 'invalid' class
    const getFormGroupClass = (name) => {
        return formErrors[name] ? "invalid" : "";
    };

    // Disable validation for specific fields
    const disableValidation = (fields) => {
        setDisabledFields(fields);
    };

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        setFormValues,
        formValues,
        formErrors,
        getFormGroupClass,
        validateField,
        disableValidation
    };
}

export default useFormValidator;
