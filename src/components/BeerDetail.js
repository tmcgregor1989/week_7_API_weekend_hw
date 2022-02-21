import React from 'react';

const BeerDetail = ({beer, addToBasket, returnToListClick}) => {

    const handleClick = function(event){
        addToBasket(beer)
    }

    const handleOtherClick = function(event){
        returnToListClick()
    }

    return(
        <div class="beer">
            <div class='image'>
                <img src={beer.image_url}/>
            </div>

            <div class='beer_details'>
            <p>Name: {beer.name}</p>
            <p>ABV: {beer.abv}</p>
            <p>IBU: {beer.ibu}</p>
            <p>Hops: {beer.ingredients.hops[0].name}</p>
            <p>Description: {beer.description}</p>

            </div>

            <div class='buttons'>
            <button onClick={handleClick} value={beer}>Add to Basket</button>
            <button onClick={handleOtherClick} value={beer}>Back to List</button>
            </div>
       
        </div>
    )
}

export default BeerDetail;