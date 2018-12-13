import React from 'react'
import Form from './form'

class AddForm extends React.Component {
  nameRef = React.createRef()
  emailRef = React.createRef()
  phoneRef = React.createRef()

  createContact = () => {
    const contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: parseInt(this.phoneRef.current.value)
    }
    this.props.addContact(contact)

    this.nameRef.current.value = ''
    this.emailRef.current.value = ''
    this.phoneRef.current.value = ''
  }

  render () {
    return (
      <div className='card d-inline-flex justify-content-center'>
        <div className='card-body'>
          <Form
            nameRef={this.nameRef}
            emailRef={this.emailRef}
            phoneRef={this.phoneRef}
          />
          <button
            type='submit'
            className='btn btn-primary'
            onClick={this.createContact}
          >
            Přidat
          </button>
        </div>
      </div>
    )
  }
}

export default AddForm
