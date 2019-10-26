import React, {useState} from 'react'
import axios from 'axios'
const GOOGLE_FORM_MESSAGE_ID = 'entry.1705909865'
const GOOGLE_FORM_NAME_ID = 'entry.406913298'
const GOOGLE_FORM_EMAIL_ID = 'emailAddress'
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScDu8IFy-KyNcvrNyMgWDgFZnMCpEzV2AjGdexEISqvCcSCsg/formResponse'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const ContactForm = () => {

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
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, state.msg)
    formData.append(GOOGLE_FORM_EMAIL_ID, state.email)
    formData.append(GOOGLE_FORM_NAME_ID, state.name)
    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
      .then(() => {
        console.log('SUCCESS!')
        setState({name: '', email: '', msg: ''})
      })
      .catch((error)=>{
        console.log(error)
      })
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
        <textarea type='text' name='msg' value={state.msg} onChange={handleChange}/>
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