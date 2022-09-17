import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  handlerInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleInputChange={this.handlerInputChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter />
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default App;
