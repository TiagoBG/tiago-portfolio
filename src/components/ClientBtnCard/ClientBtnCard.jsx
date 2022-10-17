import "./client-btn-card.css";
import VireslandLogo from "../../../public/assets/images/viresland-logo1.png";

const ClientBtnCard = ({ client }) => {
  return (
    <div className="client-button-container">
      <button
        className="client-button"
        style={{
          backgroundImage: `url(${
            client.image !== "" ? client.image : VireslandLogo
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></button>
      <div className="client-button__details">
        <p className="details__role">{client.role}</p>
        <p>{client.description}</p>
        <div className="details__date--info">
          <p>{client.startedAt} - {client.finishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientBtnCard;
