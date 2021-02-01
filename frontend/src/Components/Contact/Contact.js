import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

export default function Contact() {
    
    const sendEmail = (e) => {

        e.preventDefault()

        emailjs.sendForm('service_5w6ncjr', 'template_5bxqsmx', e.target, 'user_Di9d41xJLmrmz5i0iScny')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
        setTimeout(() => {
            alert('Your message was sent. Thanks!')
        }, 2000); 

    }

//service_5w6ncjr

    return (
        <div className='contact' id='contact'>

            <div className='contact__title'>
                <h1>Contact With Me</h1>
            </div>

            <div className='contact__form'>
                <form onSubmit={sendEmail}>
                    <div className='contact__formSection'>
                        <label htmlFor='nombre'>Name</label>
                        <input id='nombre' type='text' name='name' placeholder='Enter your name..' required/>
                    </div>
                    <div className='contact__formSection'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' name='email' placeholder='Enter your email...' required/>
                    </div>
                    <div className='contact__formSection'>
                        <label htmlFor='mensaje'>Messsage</label>
                        <textarea id='mensaje' name='message' placeholder='Enter your message...' required />
                    </div>
                    <div className='contact__formButton'>
                        <label></label>
                        <button type='submit' className='primary'>Send</button>
                    </div>
                </form>

            </div>
            
            
        </div>
    )
}
