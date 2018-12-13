import React, { Component } from 'react'
import AddForm from './add-form'
import ShowContact from './show-contact'
import DeleteContact from './delete-contact'
import EditForm from './edit-form'

class Contact extends Component {
  state = {
    contacts: {},
    contactToEdit: null,
    editOrDelete: null
  }

  addContact = contact => {
    const contacts = { ...this.state.contacts }
    contacts[`contact${Date.now()}`] = contact
    this.setState({
      contacts: contacts
    })
  }

  destroyComponent = () => {
    this.setState({ editOrDelete: null })
  }

  // destroyDeleteComponent = () => {
  //     this.setState({ contactToDelete: null })
  // }

  addToEdit = (key, ed) => {
    const contactToEdit = this.state.contacts[key]
    contactToEdit['key'] = key
    this.setState({ contactToEdit, editOrDelete: ed })
  }

  // addToDelete = key => {
  //     const contactToDelete = this.state.contacts[key]
  //     contactToDelete['key'] = key
  //     this.setState({ contactToDelete })
  // }

  updateContact = (key, updatedContact) => {
    const contacts = { ...this.state.contacts }
    contacts[key] = updatedContact
    this.setState({
      contacts,
      editOrDelete: null
    })
  }

  deleteContact = key => {
    const contacts = { ...this.state.contacts }
    delete contacts[key]
    this.setState({
      contacts,
      editOrDelete: null
    })
  }

  render () {
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
          edit={this.state.editOrDelete}
          contact={this.state.contactToEdit}
          destroyEditComponent={this.destroyComponent}
        />
        <DeleteContact
          delete={this.state.editOrDelete}
          contact={this.state.contactToEdit}
          deleteContact={this.deleteContact}
          destroyDeleteComponent={this.destroyComponent}
        />
      </div>
    )
  }
}

export default Contact
