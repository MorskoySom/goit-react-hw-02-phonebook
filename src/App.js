import { Component } from "react";
import { Item } from "Element/Element"
import { ContactList } from "ContactsList/ContactsList";
import { ContactForm } from "ContactForm/ContactForm";
import { Filter } from "Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  changeFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  deleteContactElement = (elementId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => elementId !== contact.id)
    }))
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook {filter}</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter filterName={filter} toSearch={this.changeFilter} />
        <ContactList persons={visibleContacts} toDelete={this.deleteContactElement} />
      </div>
    )
  }


}

export default App;

