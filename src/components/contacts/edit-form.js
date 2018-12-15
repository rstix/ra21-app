import React from 'react'
import Form from './form'

class EditForm extends React.Component {
  nameRef = React.createRef()
  emailRef = React.createRef()
  phoneRef = React.createRef()

  updateContact = () => {
    const contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: parseInt(this.phoneRef.current.value)
    }
    this.props.updateContact(this.props.contact.key, contact)
  }

  render () {
    return (
      <div>
        {this.props.edit === 'edit' && (
          <div className='card d-inline-flex justify-content-center m-2'>
            <div className='card-body'>
              <Form
                nameRef={this.nameRef}
                emailRef={this.emailRef}
                phoneRef={this.phoneRef}
              />
              <div className='d-flex justify-content-between'>
                <button
                  className='btn btn-outline-dark'
                  onClick={() => this.props.destroyComponent()}
                >
                  Zrušit
                </button>
                <button
                  className='btn btn-primary'
                  onClick={this.updateContact}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EditForm
