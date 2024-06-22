import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ListWatches from './components/ListWatches'

function App() {
  const [listWatches, setListWatches] = useState([]);

  const addWatch = (newWatch) => {
    setListWatches(prev => [...prev, newWatch]);
  };

  const onDelete = (id) => {
    setListWatches(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Form addWatch={addWatch} />
      <ListWatches listWatches={listWatches} onDelete={onDelete} />
    </>
  );
}

export default App