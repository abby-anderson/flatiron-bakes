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
    console.log(cake)
    setCakes([
      ...cakeList, cake
    ])
    console.log('updatedcakelist', cakeList)
  }

  function handleRemoveCake (cake) {
    console.log(cake)
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
      {selectedCake ? <CakeDetail cake={selectedCake}/> : null}

      {cakeList.map(eachCake => <CakeCard key={eachCake.flavor} setSelectedCake={setSelectedCake} image={eachCake.image} cake={eachCake}/>)}
      
    </>
  );
}

export default App;
