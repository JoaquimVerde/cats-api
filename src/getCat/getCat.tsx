import { useEffect, useState } from "react";

const GetCat = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    let [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=8`, {
            headers: {
                authorization: 'live_pKdjOY3ZVqNkolSIwv4wFBH3Znbp08ICfQYHvO7NGoh4wQQXT0FglBXw4EyqyKEP-api-key'
            }
        })
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                })
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            }
            );
    }, []);

    const increasePage = () => {
        setPage(page++);
    }
    const decreasePage = () => {
        setPage(page--);
    }

    return (

        <div>

            <div className="paging-buttons">
                <button className="button" onClick={increasePage}>Previous</button>
                <button className="button" onClick={increasePage}>Next</button>
            </div>

            <div className="list">

                {items.map((item) => (
                    <ul key={item.id}>
                        <img className="cat-picture" src={item.url} />
                    </ul>
                ))}
            </div>

        </div>

    );

}

export default GetCat;