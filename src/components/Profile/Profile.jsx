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
                <p className="profile-details__description">
                    Full Stack JavaScript developer with teamwork skills, leadership,
                    passion for continuous learning, good retention, analysis, planning
                    and execution skills.
                </p>
                <div className="profile-details__redes">
                    <BsTwitter />
                    <BsLinkedin />
                </div>
            </div>
        </div>
    );
};

export default Profile;
