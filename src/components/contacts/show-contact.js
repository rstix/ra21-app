import React from 'react'

class ShowContact extends React.Component {
  render () {
    const contact = this.props.contact
    return (
      <>
        <div className='card d-inline-flex justify-content-center'>
          <div className='card-body'>
            <h5 className='card-title'> {contact.name} </h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{contact.email}</li>
              <li className='list-group-item'>{contact.phone}</li>
            </ul>
          </div>
          <button onClick={() => this.props.addToEdit(this.props.index)}>
            Edit
          </button>
          <button onClick={() => this.props.addToDelete(this.props.index)}>
            Delete
          </button>
        </div>
      </>
    )
  }
}

export default ShowContact
