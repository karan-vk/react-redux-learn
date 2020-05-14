import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1 > Hi this is karan</h1>
      <Person name="James" age="19"> hello</Person>
      
      
      
    </div>
  );
// return React.createElement('div',{className:'App'},React.createElement('h1',null,'hi I\' karan!!'))

}


export default App;
