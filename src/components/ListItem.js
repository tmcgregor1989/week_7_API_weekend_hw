import React from 'react';


const ListItem = ({beer, onBeerClick}) => {

    const handleClick = function(){
        onBeerClick(beer);
    }

    return (
        <li>
            <img src={beer.image_url}/>
            <p>Name: {beer.name}</p>
            <p>ABV: {beer.abv}</p>
            <p>{beer.tagline}</p>
            <button onClick={handleClick} value={beer}>More Details</button>
            </li>
    )
};

export default ListItem;