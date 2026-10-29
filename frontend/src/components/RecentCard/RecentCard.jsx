import "./RecentCard.css";
import { Star, ShoppingCart } from "lucide-react";

export default function RecentCard({ product }) {
  return (
    <div className="recent-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.category}</p>

      <div className="rating">
        <Star fill="#F59E0B" color="#F59E0B" size={16} />
        <span>{product.rating}</span>
      </div>

      <div className="price">
        ₹{product.price}
      </div>

      <button>
        <ShoppingCart size={18} />
        Continue Shopping
      </button>

    </div>
  );
}
