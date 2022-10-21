import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Profile from '../../components/Profile/Profile';

const Contact = () => {
    return (
        <div className='section__main'>
            <Profile/>
            <ContactForm/>
        </div>
    );
}

export default Contact;
