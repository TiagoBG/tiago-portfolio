import './styles.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Profile from '../../components/Profile/Profile';

const Contact = () => {
    return (
        <div className='contact__container'>
            <div className='contact__section'>
            <Profile/>
            <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;
