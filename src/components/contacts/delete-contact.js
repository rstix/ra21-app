import React from 'react'

class DeleteContact extends React.Component {
  render () {
    const contact = this.props.contact
    return (
      <>
        {this.props.contact && (
          <div className='card d-inline-flex justify-content-center'>
            <div className='card-body'>
              <h5 className='card-header'> Smazat kontakt </h5>
              <div className='card-body'>
                <p className='list-group-item'>{contact.name}</p>
              </div>
            </div>
            <button onClick={() => this.props.destroyConfirmation()}>
              Zrušit
            </button>
            <button
              onClick={() => this.props.deleteContact(this.props.contact.key)}
            >
              Smazat
            </button>
          </div>
        )}
      </>
    )
  }
}

export default DeleteContact
