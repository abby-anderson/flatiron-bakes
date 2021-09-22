import React, { useState } from 'react';


function CakeCard ({cake}) {
    const [selected, setSelected] = useState(null);
    
    //should put this handleClick function inside the CakeCard function to limit global scope!  best practice
    function handleClick () {
    
    }
    
    return (
        <>
        <h1>{cake.flavor}</h1>
        <h1>${cake.price}</h1>
        <p>{cake.size}</p>
        </>
    );
}

export default CakeCard;