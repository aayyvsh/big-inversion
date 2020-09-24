import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row center">
        <PersonCard 
          firstName={"Jane"} 
          lastName={"Doe"} 
          age={50} 
          hairColor={"Black"}
        />
        <PersonCard 
          firstName={"John"} 
          lastName={"Smith"} 
          age={50} 
          hairColor={"Brown"}
        />
        <PersonCard 
          firstName={"Milard"} 
          lastName={"Filly"} 
          age={50} 
          hairColor={"Brown"}
        />
        <PersonCard 
          firstName={"Maria"} 
          lastName={"Lupita"} 
          age={50} 
          hairColor={"Brown"}
        />
      </div>
    </div>
  );
}

export default App;
