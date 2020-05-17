import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from 'styled-components'

const StyleButton =styled.button`
background-color: ${props => props.alt1 ? 'red': 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt1 ? 'tomato': 'lightgreen'};
  color: black;
}`

class App extends Component {
  state = {
    persons: [
      { id: "dsffsdf", name: "Max", age: 28 },
      { id: "dsfgjklah", name: "Manu", age: 29 },
      { id: "dsjkl", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePeronHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );



      
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyleButton
        alt1={this.state.showPersons}
          onClick={() => this.togglePeronHandler("Maximilian!!!!!!!")}
        >
          Switch Name
        </StyleButton>
        {persons}
      </div>
    );
  }
}

export default App;
