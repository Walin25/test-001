import React from 'react';
import AddFruit from './components/AddFruit';
import FruitList from './components/FruitList';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddFruit />
      <FruitList />
    </div>
  );
};

export default App;
