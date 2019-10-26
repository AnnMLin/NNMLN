import React, {useState} from 'react'

const ContactForm = () => {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [msg, setMsg] = useState('')

  const [state, setState] = useState({name: '', email: '', msg: ''})

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value})
    // console.log(state)
  }

  const handleClear = () => {
    setState({name: '', email: '', msg: ''})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submit!')
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
          <div className='btn' type='clear' onClick={handleClear}>Clear</div>
        </div>
        <div className='btn-item'>
          <div className='btn' type='submit' onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm