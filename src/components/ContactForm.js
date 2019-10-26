import React, {useState} from 'react'

const ContactForm = () => {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [msg, setMsg] = useState('')

  const [state, setState] = useState({name: '', email: '', msg: ''})

  const handleChange = e => {
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return(
    <form className='form-item' onSubmit={handleSubmit}>
      <div id='info-container'>
        <div id='name'>
          <div>Name:</div>
          <input type='text' name='name' value={state.name} onChange={handleChange}/>
        </div>
        <div id='email'> 
          <div>Email:</div>
          <input type='text' name='email' value={state.email} onChange={handleChange}/>
        </div>
      </div>
      <div id='msg'>
        <div>Message:</div>
        <textarea type='text' name='message' value={state.msg} onChange={handleChange}/>
      </div>
      <div className='btn-container'>
        <div className='btn-item'>
          <div className='btn' type='clear'>Clear</div>
        </div>
        <div className='btn-item'>
          <div className='btn' type='submit'>Submit</div>
        </div>
        {/* <input className='button' type="submit" value="Send"/> */}
      </div>
    </form>
  )
}

export default ContactForm