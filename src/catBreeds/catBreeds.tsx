import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cat from "../images/default-cat2.webp";




const CatBreeds = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    const navigate = useNavigate();
    let [page, setPage] = useState(0);




    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds?limit=15&page=${page}`, {
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

    const getDescription = (itemId: any) => {
        sessionStorage.setItem("id", itemId);
        navigate("/catBreeds/catDescription");
    }

    const increasePage = () => {
        setPage(page + 1);
        console.log(page);
    }
    const decreasePage = () => {
        setPage(page - 1);
        console.log(page);
    }

    if (items == null) {
        return (<div>Loading!!!</div>)
    } else {


        return (
            <div>
                <div className="paging-buttons">
                    <button className="button" onClick={decreasePage}>Previous</button>
                    <button className="button" onClick={increasePage}>Next</button>
                </div>
                <div className="cat-breeds">
                    {items.map((item) => (
                        <ul className="breed" key={item.id}>

                           
                            <img
                                className="breed-picture"
                                src={(item.image && item.image.url && item.image.url.length > 0) ? (item.image.url) : (cat)}
                                onClick={() => getDescription(item.id)} />
                           


                            <div className="breed-info">
                                <ul>Breed: {item.name}</ul>
                                <ul>Weight(kg): {item.weight.metric}</ul>
                                <ul>Origin: {item.origin}</ul>
                                <ul>Temperament: {item.temperament}</ul>
                            </div>
                        </ul>
                    ))}


                </div>
            </div>
        )
    }

}

export default CatBreeds;