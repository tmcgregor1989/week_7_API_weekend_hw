import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import Basket from '../components/Basket';


const Container = () => {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [basket, setBasket] = useState([])

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function(){
        
        fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(res => res.json())
        .then(data => setBeers(data))
    }

    const onBeerClick = function(beer){
        setSelectedBeer(beer);
    }


    const addToBasket = function(beer){
        let newBeers = [...basket, beer]
        setBasket(newBeers);
    }

    const returnToListClick = function(){
        let newBeer = null
        setSelectedBeer(newBeer);
    }

    const emptyBasket = function(){
        let newBasket = []
        setBasket(newBasket)
    }

    const getLowABV = () => {
        const lowABV = beers.filter((beer) => {
            return beer.abv <= 4.5
        });
        setBeers(lowABV)
    };

    const getMedABV = () => {
        const medABV = beers.filter((beer) => {
            return beer.abv > 4.5 && beer.abv <= 6
        });
        setBeers(medABV)

    };

    const getHighABV = () => {
        const highABV = beers.filter((beer) => {
            return beer.abv > 6
        });
        setBeers(highABV)

    };

    



    return (
        <div>

            <Basket basket={basket} emptyBasket={emptyBasket}/>
            <h3>my container</h3>
            {selectedBeer ? <BeerDetail beer={selectedBeer} beers={beers} addToBasket={addToBasket} returnToListClick={returnToListClick}/> : 
            <BeerList beers={beers} onBeerClick={onBeerClick} getLowABV={getLowABV} getMedABV={getMedABV} getHighABV={getHighABV} getBeers={getBeers}/>}

        </div>
    )
}

export default Container;
