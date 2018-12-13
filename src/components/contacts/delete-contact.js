import React from 'react'

class DeleteContact extends React.Component {
  render () {
    const contact = this.props.contact
    return (
      <>
        {this.props.delete === 'delete' && (
          <div className='card d-inline-flex justify-content-center m-2'>
            <h5 className='card-header'> Smazat kontakt </h5>
            <div className='card-body'>
              <p>{contact.name}</p>
            </div>
            <div class='btn-group justify-content-between'>
              <button
                className='btn btn-light m-2'
                onClick={() => this.props.destroyDeleteComponent()}
              >
                Zrušit
              </button>
              <button
                className='btn btn-danger m-2'
                onClick={() => this.props.deleteContact(this.props.contact.key)}
              >
                Smazat
              </button>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default DeleteContact
