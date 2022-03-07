import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import Navbar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ContactList />
      </div>
    );
  }
}
export default App;
