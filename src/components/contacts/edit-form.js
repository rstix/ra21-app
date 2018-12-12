import React from 'react'

class EditForm extends React.Component {
  nameRef = React.createRef()
  emailRef = React.createRef()
  phoneRef = React.createRef()

  updateContact = e => {
    e.preventDefault()
    const contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: parseInt(this.phoneRef.current.value)
    }
    this.props.updateContact(this.props.contact.key, contact)
    e.currentTarget.reset()
  }

  render() {
    return (
      <div>
        {this.props.contact && (
          <div className='card d-inline-flex justify-content-center m-2'>
            <div className='card-body'>
              <form onSubmit={this.updateContact}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Jméno'
                    ref={this.nameRef}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    ref={this.emailRef}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Tel. číslo'
                    ref={this.phoneRef}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Přidat
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EditForm
