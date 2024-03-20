import { useEffect, useState } from "react";

const GetCat = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    let [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?order=ASC&page=${page}&limit=8`, {
            headers: {
                "x-api-key": 'live_pKdjOY3ZVqNkolSIwv4wFBH3Znbp08ICfQYHvO7NGoh4wQQXT0FglBXw4EyqyKEP'
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
    }, [page]);


    return (

        <div>

            <div className="paging-buttons">
                <button className="button" onClick={() => setPage(page - 1)}>Previous</button>
                <button className="button" onClick={() => setPage(0)}>1</button>
                <button className="button" onClick={() => setPage(1)}>2</button>
                <button className="button" onClick={() => setPage(2)}>3</button>
                <button className="button" onClick={() => setPage(3)}>4</button>
                <button className="button" onClick={() => setPage(4)}>5</button>
                <button className="button" onClick={() => setPage(page + 1)}>Next</button>
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