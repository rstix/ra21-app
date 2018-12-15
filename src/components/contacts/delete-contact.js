import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class DeleteContact extends React.Component {
  render () {
    const contact = this.props.contact
    return (
      <>
        {this.props.delete === 'delete' && (
          <div>
            <TransitionGroup>
              <CSSTransition
                in={this.props.delete === 'delete'}
                timeout={1000}
                classNames='delete'
              >
                <div className='card d-inline-flex justify-content-center m-2'>
                  <h5 className='card-header'> Smazat kontakt </h5>
                  <div className='card-body'>
                    <p>{contact.name}</p>

                    <div className='d-flex justify-content-between'>
                      <button
                        className='btn btn-outline-dark'
                        onClick={() => this.props.destroyComponent()}
                      >
                        Zrušit
                      </button>
                      <button
                        className='btn btn-danger'
                        onClick={() =>
                          this.props.deleteContact(this.props.contact.key)
                        }
                      >
                        Smazat
                      </button>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      </>
    )
  }
}

export default DeleteContact
