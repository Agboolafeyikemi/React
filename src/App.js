import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 27 }
    ],
    showPersons: false,
    length: 0,
    inputText: ""
  };

  nameChangedHandler = (event, id) => {
    const personIndex = [...this.state.persons].findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePerson = () => {
    const isPerson = this.state.showPersons;
    this.setState({ showPersons: !isPerson });
  };

  deletePersonHandler = personIndex => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };


  render() {
    

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {[...this.state.persons].map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          ;
        </div>
      );
      
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className="button" onClick={this.togglePerson}>
          Toggle Persons
        </button>
        {person}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
