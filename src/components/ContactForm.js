import React, {useState} from 'react'
import axios from 'axios'
const GOOGLE_FORM_MESSAGE_ID = 'entry.1705909865'
const GOOGLE_FORM_NAME_ID = 'entry.406913298'
const GOOGLE_FORM_EMAIL_ID = 'emailAddress'
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScDu8IFy-KyNcvrNyMgWDgFZnMCpEzV2AjGdexEISqvCcSCsg/formResponse'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const ContactForm = () => {

  const [state, setState] = useState({name: '', email: '', msg: '', warning:'', submitted:''})

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleClear = () => {
    setState({name: '', email: '', msg: '', warning:'', submitted: ''})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(!state.name || !state.msg || !state.email) {
      setState({...state, warning: 'All fields required *', submitted: ''})
      return
    }
    if(!validateEmail(state.email)) {
      setState({...state, warning: 'Please enter a valid email *', submitted: ''})
      return
    }
    console.log('Submit!')
    sendMsg()
  }

  const validateEmail = email => {
    // eslint-disable-next-line
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    // sourced from: https://flaviocopes.com/how-to-validate-email-address-javascript/
    return expression.test(String(email).toLowerCase())
  }

  const sendMsg = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, state.msg)
    formData.append(GOOGLE_FORM_EMAIL_ID, state.email)
    formData.append(GOOGLE_FORM_NAME_ID, state.name)
    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
      .then(() => {
        console.log('SUCCESS!')
        setState({name: '', email: '', msg: '', warning: '', submitted: 'Message submitted!'})
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
      {/* <div id='warning'>*Required field</div> */}
      <div className='btn-container'>
        <div className='btn-item'>
          <div className='btn' type='clear' onClick={handleClear}>Clear</div>
        </div>
        <div className='btn-item'>
          <div className='btn' type='submit' onClick={handleSubmit}>Submit</div>
        </div>
        {state.warning ? 
        <div className='warning'>{state.warning}</div>
        : null
        }
        {state.submitted ?
        <div className='submitted'>{state.submitted}</div>
        : null
        }
      </div>
    </form>
  )
}

export default ContactForm