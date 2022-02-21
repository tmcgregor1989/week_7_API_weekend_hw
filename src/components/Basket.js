import React from 'react';
import BasketListItem from './BasketListItem';

const Basket = ({basket, emptyBasket}) =>{

    const basketListItem = basket.map((beer, index) => {
        return <BasketListItem beer={beer} key={index}/>
    });

    const handleClick = function(){
        emptyBasket()
    };

    return (
        <div>
            <h3>Basket</h3>
            <ul>
                {basketListItem}
            </ul>
            <button onClick={handleClick}>Empty Basket</button>
        </div>
    )
}


export default Basket;