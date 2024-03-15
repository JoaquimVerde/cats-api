import { useEffect, useState } from "react";

const GetCat = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD", {
            headers: {
                authorization: 'live_pKdjOY3ZVqNkolSIwv4wFBH3Znbp08ICfQYHvO7NGoh4wQQXT0FglBXw4EyqyKEP-api-key'
            }
        })
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                })
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            }
            );
    }, []);

    return (

        <div>

            <li>{items}</li>

        </div>

    );

}

export default GetCat;