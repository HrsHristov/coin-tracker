import { useState } from "react";

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        //we receive either a value or a function
        setState(value);

        let serializedValue; //value in text;format object written as string

        if (typeof value === "function") {
            /* if function we pass value as function with state */
            serializedValue = JSON.stringify(value(state));
        } else {
            /* just stringify */
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [state, setPersistedState];
}
