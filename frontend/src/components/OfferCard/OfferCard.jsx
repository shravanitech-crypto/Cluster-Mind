import "./OfferCard.css";

export default function OfferCard({ offer }) {
  return (
    <div className="offer-card">

      <span className="discount">
        {offer.discount}% OFF
      </span>

      <img src={offer.image} alt={offer.title} />

      <h3>{offer.title}</h3>

      <p>{offer.description}</p>

      <button>Shop Now</button>

    </div>
  );
}
