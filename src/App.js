import CakeCard from './CakeCard';
import Header from './Header';
import SearchBar from './SearchBar';
import React, { useState } from "react";

const cakes = [
  {
      flavor: 'Vanilla',
      size: '6" cake',
      price: 40.00
  },
  {
      flavor: 'Raspberry Cardamon Rose',
      size: '9" cake',
      price: 50.00
  },
  {
      flavor: 'Pink Champagne',
      size: 'cup cake',
      price: 37.5
  },
  {
      flavor: 'Earl Grey',
      size: 'cup cake',
      price: 18.00
  },
  {
      flavor: 'Black Forest',
      price: 18.00
  }
]

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header />
      {visible? <SearchBar /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'x' : 'Form'}</button>
      {cakes.map(eachCake => <CakeCard cake={eachCake}/>)}
    </>
  );
}

export default App;
