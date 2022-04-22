import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './views/Home';
import AddCard from './views/AddCard';
import ErrorPage from './views/ErrorPage';

function App() {
  const navigate = useNavigate();

  const cards = JSON.parse(localStorage.getItem("cards") || "[]");

  const [newCard, setNewCard] = useState({
    cardnumber: 'XXXXXXXXXXXXXXXX',
    cardholder: 'FIRSTNAME LASTNAME',
    valid: 'MM/YY',
    ccv: 'XXX',
    vendor: 'AddCard',
    id: 0
  });

  // Set allCards as localStorage arr or newCard if empty
  const [allCards, setAllCards] = useState((cards.length > 0) ? cards : [newCard]);

  // Update local storage with all cards
  localStorage.setItem("cards", JSON.stringify(allCards));
  // localStorage.removeItem("cards")
  function addNewCard(e) {
    e.preventDefault();

    setAllCards(prevAllCards => ([...prevAllCards, newCard]));

    navigate('/');
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home allCards={allCards} cards={cards} setAllCards={setAllCards} />} />
        <Route path='/add-card' element={<AddCard addNewCard={addNewCard} allCards={allCards} setNewCard={setNewCard} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
