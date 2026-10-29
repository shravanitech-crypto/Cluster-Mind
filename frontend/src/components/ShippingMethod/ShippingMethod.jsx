import { Truck } from "lucide-react";
import { SHIPPING_METHODS } from "../../services/orders";
import "./ShippingMethod.css";

export default function ShippingMethod({ selected, onChange }) {
  return (
    <div className="checkout-card">
      <h3>
        <Truck size={18} />
        Shipping Method
      </h3>

      <div className="shipping-list">
        {SHIPPING_METHODS.map((method) => (
          <label
            key={method.id}
            className={`shipping-option ${selected === method.id ? "active" : ""}`}
          >
            <input
              type="radio"
              name="shipping"
              checked={selected === method.id}
              onChange={() => onChange(method.id)}
            />
            <span className="shipping-info">
              <strong>{method.label}</strong>
              <small>{method.eta}</small>
            </span>
            <span className="shipping-price">
              {method.price === 0 ? "FREE" : `₹${method.price}`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
