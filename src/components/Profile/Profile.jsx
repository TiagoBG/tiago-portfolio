import React from "react";
import Sing from "../../../public/assets/images/Sing.png";
import "./profile.css";
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-container__image">
                <img src={Sing} alt="tiagobg-developer" className="profile__image" />
            </div>
            <div className="profile-details__container">                
                <div className="profile-details__info">
                    <h1 className="profile-details__title">Hi! I'm Tiago</h1>
                    <p className="profile-details__intro">JavaScript Developer & Process Engineer. A passionate for tech, art & science.</p>
                </div>
                <div className="profile-details__redes">
                    <BsTwitter className="detail__redes--icon"/>
                    <BsLinkedin className="detail__redes--icon"/>
                </div>
            </div>
        </div>
    );
};

export default Profile;
