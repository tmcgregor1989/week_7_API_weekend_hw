import React from 'react';
import ListItem from './ListItem';


const BeerList = ({beers, onBeerClick, onBasketClick, getLowABV, getMedABV, getHighABV, getBeers}) => {
    const beerListItem = beers.map((beer, index) => {
        console.log(beers);
        return <ListItem beer={beer} key={index} onBeerClick={onBeerClick}/>
    });

    const handleClick = function(){
        onBasketClick()
    }

    const handleLowABV = function(){
        getLowABV()
    }

    const handleMedABV = function(){
        getMedABV()
    }

    const handleHighABV = function(){
        getHighABV()
    }

    const handleAllBeers = function(){
        getBeers()
    }

    return (
        <div>
            <div class='filter'>
                <h3>Filter by ABV</h3>
                <p onClick={handleLowABV}>Click here to view low ABV beers</p>
                <p onClick={handleMedABV}>Click here to view medium ABV beers</p>
                <p onClick={handleHighABV}>Click here to view high ABV beers</p>
                <p onClick={handleAllBeers}>Click here to view all beers</p>
            </div>
        <div>
            <ul>
                <p>{beerListItem}</p>
            </ul>
        </div>
        </div>
    )
};


export default BeerList;