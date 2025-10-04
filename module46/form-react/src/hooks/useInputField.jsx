import React from 'react';
import { useState } from 'react';

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleChange = (event) => {
        setFieldValue(event.target.value);
    }

    return [fieldValue, handleChange];
};

export default useInputField;