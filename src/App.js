import CakeCard from './CakeCard';
import Header from './Header';
import SearchBar from './SearchBar';
import React, { useState } from "react";
import cakes from './Cakes';
import CakeDetail from './CakeDetail';
import CakeForm from './CakeForm';


function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake, setSelectedCake] =useState(null);
  const [cakeList, setCakes] = useState(cakes);

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

  return (
    <>
      <Header />
      <CakeForm handleAddCake={handleAddCake} />
      {visible? <SearchBar /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'x' : 'Form'}</button> <br/>
      
      {/* important to note that below we're sending selectedCake as the prop this time instead of the og cake obj! */}
      {selectedCake ? <CakeDetail cake={selectedCake}/> : null}
      
      {cakeList.map(eachCake => <CakeCard key={eachCake.flavor} setSelectedCake={setSelectedCake} image={eachCake.image} cake={eachCake}/>)}
      
    </>
  );
}

export default App;
