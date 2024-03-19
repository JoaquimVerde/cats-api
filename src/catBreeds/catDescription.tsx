
import { useEffect, useState } from "react";
import cat from "../images/default-cat2.webp";




const CatDescription = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any>(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${sessionStorage.getItem("id")}`, {
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
    }, []);



    if (items == null) {
        return (<div>Loading!!!</div>)
    } else {

        return (

            <div className="breed-description">

                <img className="description-picture"
                    src={(items.reference_image_id && items.reference_image_id.length > 0) ? (`https://cdn2.thecatapi.com/images/${items.reference_image_id}.jpg`) : (cat)} />
                <div>
                    <div className="description-text"><ul>{items.description}</ul></div>
                    <div className="description-levels">
                        <ul>Life span: {items.life_span} years</ul>
                        <ul>Indoor: {items.indoor}</ul>
                        <ul>Lap: {items.lap}</ul>
                        <ul>Adaptability: {items.adaptability}</ul>
                        <ul>Affection Level: {items.affection_level}</ul>
                        <ul>Child Friendly: {items.child_friendly}</ul>
                        <ul>Dog Friendly: {items.dog_friendly}</ul>
                        <ul>Energy Level: {items.energy_level}</ul>
                        <ul>Grooming: {items.grooming}</ul>
                        <ul>Health Issues: {items.health_issues}</ul>
                        <ul>Intelligence: {items.intelligence}</ul>
                        <ul>Shedding Level: {items.shedding_level}</ul>
                        <ul>Social Needs: {items.social_needs}</ul>
                        <ul>Stranger Friendly: {items.stranger_friendly}</ul>
                        <ul>Vocalisation: {items.vocalisation}</ul>
                        <ul>Experimental: {items.experimental}</ul>
                        <ul>Hairless: {items.hairless}</ul>
                        <ul>Natural: {items.natural}</ul>
                        <ul>Rare: {items.rare}</ul>
                        <ul>Rex: {items.rex}</ul>
                        <ul>Suppressed Tail: {items.suppressed_tail}</ul>
                        <ul>Short Legs: {items.short_legs}</ul>
                        <ul>Hypoallergenic: {items.hypoallergenic}</ul>
                        <ul><a href={items.wikipedia_url}>Wikipedia</a></ul>
                    </div>

                </div>

            </div>
        )
    }



}

export default CatDescription;