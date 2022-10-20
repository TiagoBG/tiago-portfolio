import "./client-btn-card.css";
import VireslandLogo from "../../../public/assets/images/viresland-logo1.png";

const ClientBtnCard = ({ client }) => {
  return (
    <div className="client-button-container">
      <div className="client-button__header">
        <button
          className="client-button"
          style={{
            backgroundImage: `url(${
              client.image !== "" ? client.image : VireslandLogo
            })`,
            backgroundPosition: "center",
            backgroundSize: `${client.image !== "" ? "cover" : "contain"}`,
            backgroundRepeat: "no-repeat",
          }}
        ></button>
          <p className="details__role">{client.role}</p>
      </div>
      <div className="details__date--info">
        <p className="details__description">{client.description}</p>
        <p>{client.startedAt} - {client.finishedAt}
        </p>
      </div>
    </div>
  );
};

export default ClientBtnCard;
