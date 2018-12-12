import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

class ShowContact extends React.Component {
  render() {
    const contact = this.props.contact
    return (
      <>
        <div className='card d-inline-flex justify-content-center card-contact m-2'>
          <div className='card-body'>
            <div className='card-title d-inline-flex'>
              <h5> {contact.name}</h5>
              <button className="btn" onClick={() => this.props.addToEdit(this.props.index)}>
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button className="btn" onClick={() => this.props.addToDelete(this.props.index)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{contact.email}</li>
              <li className='list-group-item'>{contact.phone ? contact.phone : ""}</li>

            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default ShowContact
