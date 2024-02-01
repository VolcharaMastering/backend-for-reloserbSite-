import "./InfoCard.scss";

function InfoCard({ title, description }) {
  return (
    <div className="info-card">
      <h3 className="info-card__title">{title}</h3>

      <p className="info-card__description">{description}</p>
    </div>
  );
}

export default InfoCard;
