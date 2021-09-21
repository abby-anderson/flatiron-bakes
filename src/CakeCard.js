import React from 'react';



//let eachCake = cakes.map(each => console.log(each))

//would only need to pass props below if the above cakes were declared in the parent component!
function CakeCard ({flavor, price, size}) {
    return (
        <>
        <h1>{flavor}</h1>
        <p>${price}</p>
        <p>{size}</p>
        </>
    );
}

export default CakeCard;