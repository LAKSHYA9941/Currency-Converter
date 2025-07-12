import { useState, useEffect } from "react";

const useCurrencyinfo = (currency) => {
    const [data, setData] = useState({});  // Stores the 'rates' object
    const [error, setError] = useState(null);  // For error handling
    const [loading, setLoading] = useState(true); // Optional: loading state

    useEffect(() => {
        const url = `https://open.er-api.com/v6/latest/${currency}`;

        setLoading(true); // Start loading
        fetch(url)
            .then((res) => {
                if (!res.ok) {  // If response is not OK (like 404)
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                if (res.result === "success") {  // Check if API returned success
                    setData(res.rates);  // Set only 'rates' object
                } else {
                    throw new Error("API returned an error");
                }
            })
            .catch((err) => setError(err.message)) // Catch fetch or API errors
            .finally(() => setLoading(false)); // Always turn off loading
    }, [currency]);

    return data; 
};

export default useCurrencyinfo;
