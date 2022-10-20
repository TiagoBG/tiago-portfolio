import { useRef } from 'react';
import Swal from 'sweetalert2';
const parslizied = import.meta.env.VITE_SMTP_PARSLEY;
const hamenized = import.meta.env.VITE_SMTP_HAM;
const pepperized = import.meta.env.VITE_SMTP_HONEY;
const served = import.meta.env.VITE_SMTP_PLATE;

const ContactForm = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formObj = {};

        [...formRef.current.elements].filter(
            element => element.type === "text" || element.id === "message"
        ).forEach(element => formObj[element.id] = element.value);

        sendEmail(formObj);
        clearFields();
    }

    const clearFields  = () => {
        [...formRef.current.elements].forEach(element => element.value = '');
    }

    const sendEmail = (formObj) => {
        console.log(formObj);
        Email.send({
            Host: hamenized,
            Username: parslizied,
            Password: pepperized,
            To: served,
            From: formObj.email,
            Subject: `Meeting request from ${formObj.name}`,
            Body: formObj.message
        }).then(
            message => message === 'OK' ?
                Swal.fire(
                    'Thank you!',
                    'I will reach to you as soon as posible',
                    'success'
                ) :
                Swal.fire(
                    'Oops :v',
                    'Please check the typed info and try again.',
                    'error'
                )
        );
    }

    return (
        <article className='contact form'>
            <form ref={formRef} onSubmit={handleSubmit}>
                <h2>Let's talk!</h2>
                <p>Please fill the contact form below:</p>
                <input type="text" id='name' placeholder='Enter your full name' required />
                <input type="text" id='email' placeholder='Enter your email' required />
                <textarea id='message' placeholder='Please enter the message you would like to send' required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </article>
    );
}

export default ContactForm;
