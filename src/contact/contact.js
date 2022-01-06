import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_form', form.current, 'user_4S8BwjUlHtKnN7GW4I5lJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.current.reset()
    }

    return(
        <div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                    <input
                    type="text" 
                    name="user_name" 
                    className='input' 
                    placeholder='Your Name' 
                    style={{
                        color: 'black', 
                        backgroundColor: 'rgba(128, 128, 128, 0.308)' 
                        }} />
                    <input
                    type="email" 
                    name="user_email" 
                    className='input' 
                    placeholder='Your Email' 
                    style={{
                        color: 'black', 
                        backgroundColor: 'rgba(128, 128, 128, 0.308)' 
                        }} />
                    <textarea
                    name="message" 
                    placeholder='Say your piece here' 
                    style={{
                        borderStyle: 'none',
                        backgroundColor: 'rgba(128, 128, 128, 0.308)',
                        maxWidth: '20em',
                        borderRadius: '.5em',
                        marginTop: '.5em',
                        marginLeft: '3em',
                        padding:'2em'
                    }}
                    />
                    <input
                    type="submit" 
                    value="Send"
                    style={{
                        margin: '1em',
                        borderStyle: 'none',
                        borderRadius: '.5em',
                        width: '10em',
                        padding: '2em'

                    }}
                    />
                </form>
            </div>
    )
}

export default Contact;