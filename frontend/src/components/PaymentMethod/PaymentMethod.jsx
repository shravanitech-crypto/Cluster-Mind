import { CreditCard } from "lucide-react";
import { PAYMENT_METHODS } from "../../services/orders";
import "./PaymentMethod.css";

export default function PaymentMethod({ selected, onChange }) {
  return (
    <div className="checkout-card">
      <h3>
        <CreditCard size={18} />
        Payment Method
      </h3>

      <div className="payment-grid">
        {PAYMENT_METHODS.map((method) => (
          <label
            key={method.id}
            className={`payment-option ${selected === method.id ? "active" : ""}`}
          >
            <input
              type="radio"
              name="payment"
              checked={selected === method.id}
              onChange={() => onChange(method.id)}
            />
            <span
              className="payment-dot"
              style={{ background: method.color }}
            />
            {method.label}
          </label>
        ))}
      </div>
    </div>
  );
}
