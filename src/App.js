import CakeCard from './CakeCard';
import Header from './Header';
import SearchBar from './SearchBar';
import React, { useState, useEffect } from "react";
import cakes from './Cakes';
import CakeDetail from './CakeDetail';
import CakeForm from './CakeForm';
import FlavorFilter from './FlavorFilter';


function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake, setSelectedCake] =useState(null);
  const [cakeList, setCakes] = useState(cakes);
  const [flavors, setFlavors] = useState([]);

  function handleAddCake (cake) {
    fetch('http://localhost:4000/cakes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cake)
    })
    .then(response => response.json())
    .then(newCake => {
      setCakes([...cakeList, newCake])
    })
  }

  function handleRemoveCake (id) {
    console.log(id);
    fetch(`http://localhost:4000/cakes/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then( () => {
      //removes cake from cakelist state
      const filteredCakes = cakeList.filter(cake => cake.id !== id)
      setCakes(filteredCakes);

      //removes cakes from selected cake state
      setSelectedCake(null)
    })
  }

  function handleLike (cake) {
    console.log(cake)
    fetch(`http://localhost:4000/cakes/${cake.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({liked: !cake.liked}),
    })
    .then(response => response.json())
    .then(updatedCake => {
      const updatedCakeList = cakeList.map(each => each.id === cake.id ? updatedCake : each)
        // if (each.id === cake.id) {
        //   return updatedCake;
        // } else {
        //   return each;
        // }
      //updating only selectedcake state
      setSelectedCake(updatedCake)
      //updating the cake in the original cakelist as well 
      setCakes(updatedCakeList)
    })
  }

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
    .then(response => response.json())
    .then(data => setCakes(data))

    fetch('http://localhost:4000/flavor')
    .then(response => response.json())
    .then(data => setFlavors(data))
  }, [])

  function handleFlavorSelection (flavor) {
    console.log('app', flavor);
    const cakeListCopy = [...cakeList]
    const newFilteredList = cakeListCopy.filter(cake => cake.flavor === flavor)
    console.log('new list', newFilteredList);

  }

  return (
    <>
      <Header />
      <CakeForm handleAddCake={handleAddCake} />
      {visible? <SearchBar /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'x' : 'Form'}</button> <br/>
      
      <FlavorFilter flavors={flavors} handleFlavorSelection={handleFlavorSelection} />

      {/* important to note that below we're sending selectedCake as the prop this time instead of the og cake obj! */}
      {selectedCake ? <CakeDetail cake={selectedCake} handleRemoveCake={handleRemoveCake} handleLike={handleLike}/> : null}

      {cakeList.map(eachCake => <CakeCard key={eachCake.flavor} setSelectedCake={setSelectedCake} image={eachCake.image} cake={eachCake}/>)}
      
    </>
  );
}

export default App;
