import React from 'react'

const Form = props => {
  return (
    <form>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Jméno*'
          ref={props.nameRef}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Email*'
          ref={props.emailRef}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='number'
          className='form-control'
          placeholder='Tel. číslo'
          ref={props.phoneRef}
        />
      </div>
    </form>
  )
}

export default Form
