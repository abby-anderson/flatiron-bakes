import React from 'react';

function CakeDetail ({cake, handleRemoveCake, handleLike}) {
    return (
        <>
        <img src={cake.image} style={{width:"200px"}} />
        <p>{cake.flavor}</p>
        <p>{cake.size}</p>
        <p>${cake.price}</p>
        <p>{cake.description}</p>
        <button onClick={()=> handleLike(cake)}>{cake.liked ? "❤️" : "💔"}</button>
        <button onClick={()=> handleRemoveCake(cake.id)}>Delete</button>
        </>
    )
}

export default CakeDetail;