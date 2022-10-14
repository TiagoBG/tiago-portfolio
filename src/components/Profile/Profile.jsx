import React from "react";
import Tiago from "../../../public/assets/images/Tiago.png";
import "./profile.css";
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-container__image">
                <img src={Tiago} alt="tiagobg-developer" className="profile__image" />
            </div>
            <div className="profile-details__container">                
                <div className="profile-details__info">
                    <h1>Hi! I'm Tiago</h1>
                    <p className="profile-details__intro">JavaScript Developer, Gryffindor & sometimes... I think I'm an artist.</p>
                </div>
                <div className="profile-details__redes">
                    <BsTwitter />
                    <BsLinkedin />
                </div>
            </div>
        </div>
    );
};

export default Profile;
