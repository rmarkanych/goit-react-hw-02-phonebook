import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let curName = e.currentTarget.elements.name.value;
    let curNumber = e.currentTarget.elements.number.value;
    const dataContacts = {
      id: nanoid(),
      name: curName,
      number: curNumber,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, dataContacts],
    }));

    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  showFilterInput = () => {
    if (this.state.filter === '') {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(el =>
        el.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
  };

  filterChange = e => {
    let input = e.currentTarget.value;
    console.log(input);
    this.setState({ filter: input });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handlerInputChange={this.handlerInputChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filterChange={this.filterChange} />
        <ContactList
          contactsList={this.showFilterInput}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
