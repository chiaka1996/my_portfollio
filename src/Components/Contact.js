import React, {useState} from 'react';
import '../Css/Contact.css'; 
import Profile from './Profile';
import '../Css/Projects.css';
import emailjs from '@emailjs/browser';

const Contact = (props) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [template, setTemplate] = useState({
        name: '',
        email: '',
        message: 'Message'
    })
    
    const onChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name
        setTemplate({
            ...template,
            [name]: value
        })
    }

    const sendMail = async (e) => {
        try{
            e.preventDefault();
            setError('')
            setMessage('')
            setLoading(true)
            const {name, email, message} = template;
            
            if(!name || !email || !message) {
                setLoading(false)
                return setError('please fill all fields')   
            }
            
            if(!emailRegex.test(email)){
                setLoading(false)
                return setError('please input a valid email')
            }

            const response =  await  emailjs.send(
                'service_fqvax5j',
                'template_p0bjsgy', 
                template,
                'ytycbS_OkHSWIR9Gz'
                );
            if(response){
                setTemplate({
                    name: '',
                    email: '',
                    message: ''
                })
                setMessage('message sent successfully')
                setLoading(false)
            }
        }
        catch(err){
        alert(err)
        setLoading(false)
        }
    }
 
    return (
        <div className='resumeBody'>
        <div className='resumeProfile'>
        <Profile name='contact'/>
        </div>
        <div className="contactContainer">
        <div className='contactHeader'>
        Contact Me
        </div>
        <div className="contactIntroduction">
        Interested in working together? Wherever you are with your
        idea or your project, I'll be happy to help. I am available
        for fullstack positions, either Full-time, Part-time or 
        Contract. <strong>Kindly drop a message.!! </strong>
        </div>

        <form>
        {
        message ? <div 
        className='sucessMsg'
        onMouseEnter={() => setMessage('')}
        onClick={() => setMessage('')} 
        >
        {message}
        </div> : ''
        }

        {
        error ? <div 
        className='errorMsg'
        onMouseEnter = {() => setError('')}
        onClick={() => setError('')}
        >
        {error}
        </div>
        : ''
        }

        <div className='inputContainer'>
        <input      
        type='text' 
        name="name"
        value={template.name}
        onChange={onChangeInput}
        required
        />
        <label>Name</label>
        </div>

        <div className='inputContainer'>
        <input      
        type='text' 
        name="email"
        value={template.email}
        onChange={onChangeInput}
        required
        />
        <label>Email</label>
        </div>

        <div className="textAreaContainer">
        <textarea 
        className="contactInputTextArea" 
        rows="5" 
        cols="60"
        value={template.message}
        name='message'
        onChange={onChangeInput}
        >
        Message
        </textarea>
        </div>

        <button 
        className="contactButton"
        onClick={sendMail}
        >
        {!loading ? 'Message Me!' : <div className="loading">
        <span className="loadingSpan"></span>
        <span className="loadingSpan"></span>
        <span className="loadingSpan"></span>
        </div> 
        }
        </button>
        </form>
        </div>         
        </div> 
    )
}

export default Contact;