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


  render() {
    return (
      <div>
        <h1>Phonebook {this.state.filter}</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter filterName={this.state.filter} toSearch={this.changeFilter} />
        <ContactList persons={this.state.contacts} />
      </div>
    )
  }


}




// function App() {
//   return (
//     <div>
//       <h1>Phonebook</h1>

//       <h2>Contacts</h2>

//     </div>
//   );
// }

export default App;

