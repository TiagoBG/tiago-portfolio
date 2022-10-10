import React from './client-btn-card.css';

const ClientBtnCard = ({client}) => {
    return (
        <div className='client-button-container'>
            <button className='client-button' style={{backgroundImage: `url(${client.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></button>
            <div className='client-button__details'>
                <p>{client.role}</p>
                <p>{client.description}</p>
                <p>{client.startedAt}</p>
                <p>{client.finishedAt}</p>
            </div>
        </div>
    );
}

export default ClientBtnCard;
