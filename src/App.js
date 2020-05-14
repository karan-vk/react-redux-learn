import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "karan", age: 19 },
      { name: "Amu", age: 48 },
    ],
  };
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "KaranV", age: 20 },
        { name: "Amu", age: 48 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi this is Karan</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
      </div>
    );
  }
}

export default App;
