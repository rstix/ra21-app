import React, { Component } from 'react'
import AddForm from './components/contacts/add-form'
import ShowContact from './components/contacts/show-contact'
import EditForm from './components/contacts/edit-form'
import DeleteContact from './components/contacts/delete-contact'

class App extends Component {
  state = {
    contacts: {},
    contactToEdit: null,
    contactToDelete: null
  }

  addContact = contact => {
    const contacts = { ...this.state.contacts }
    contacts[`contact${Date.now()}`] = contact
    this.setState({
      contacts: contacts
    })
  }

  addToEdit = key => {
    const contactToEdit = this.state.contacts[key]
    contactToEdit['key'] = key
    this.setState({ contactToEdit })
  }
  addToDelete = key => {
    const contactToDelete = this.state.contacts[key]
    contactToDelete['key'] = key
    this.setState({ contactToDelete })
  }

  updateContact = (key, updatedContact) => {
    const contacts = { ...this.state.contacts }
    contacts[key] = updatedContact
    this.setState({
      contacts,
      contactToEdit: null
    })
  }

  deleteContact = key => {
    const contacts = { ...this.state.contacts }
    delete contacts[key]
    this.setState({
      contacts,
      contactToDelete: null
    })
  }

  render () {
    console.log(this.state.contactToDelete)
    return (
      <div className='container-fluid'>
        <AddForm addContact={this.addContact} />
        <hr />
        {Object.keys(this.state.contacts).map(key => (
          <ShowContact
            key={key}
            index={key}
            deleteContact={this.deleteContact}
            contact={this.state.contacts[key]}
            addToEdit={this.addToEdit}
            addToDelete={this.addToDelete}
          />
        ))}
        <EditForm
          updateContact={this.updateContact}
          contact={this.state.contactToEdit}
        />
        <DeleteContact
          contact={this.state.contactToDelete}
          deleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App
