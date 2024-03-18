import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const CatBreeds = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    const navigate = useNavigate();



    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=0`, {
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

    const getDescription = (itemId : any) => {
        sessionStorage.setItem("id", itemId);
        navigate("/catBreeds/catDescription");  
      }



    return (
        <div className="cat-breeds">
            {items.map((item) => (
                <ul className="breed" key={item.id}>

                    <img 
                    className="breed-picture" 
                    src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`} 
                    onClick={() => getDescription(item.id)}/>
                    

                    <div className="breed-info">
                        <ul>Breed: {item.name}</ul>
                        <ul>Weight(kg): {item.weight.metric}</ul>
                        <ul>Origin: {item.origin}</ul>
                        <ul>Temperament: {item.temperament}</ul>
                    </div>
                </ul>
            ))}
        </div>
    )

}

export default CatBreeds;