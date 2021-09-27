import react, { useState, useEffect } from "react";

function FlavorFilter ( {flavors, handleFlavorSelection}) {
    //console.log(typeof flavors);
    console.log(flavors)
    
    return (
        <>
        <p>choose a flavor</p>
        <div>
        {flavors.map(each => <div onClick={(e) => handleFlavorSelection(e.target.innerText)} key={each}>{each}</div>)}
        </div>
        </>
    )
    
    
    

}

export default FlavorFilter;