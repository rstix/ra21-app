import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'

class ShowContact extends React.Component {
  render () {
    const contact = this.props.contact
    return (
      <>
        <div className='card d-inline-flex justify-content-center card-contact m-2'>
          <div className='card-body'>
            <div className='card-title d-flex justify-content-between'>
              <h4 className='align-self-center mb-0'> {contact.name}</h4>
              <div className='edit-buttons'>
                <FontAwesomeIcon
                  className='mr-2'
                  icon={faPen}
                  onClick={() => this.props.addToEdit(this.props.index, 'edit')}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() =>
                    this.props.addToEdit(this.props.index, 'delete')
                  }
                />
              </div>
            </div>

            <p className='text-left'>{contact.email}</p>
            <p className='text-left'>{contact.phone ? contact.phone : ''}</p>
          </div>
        </div>
      </>
    )
  }
}

export default ShowContact
