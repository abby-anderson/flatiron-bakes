import React from 'react';


function CakeCard ({cake, setSelectedCake}) {
    
    //should put this handleClick function inside the CakeCard function to limit global scope!  best practice
    
    return (
        <div onClick={()=> setSelectedCake(cake)}>
        <h1>{cake.flavor}</h1>
        <h1>${cake.price}</h1>
        <p>{cake.size}</p>
        </div>
    );
}

export default CakeCard;