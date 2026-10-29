import { useState } from "react";
import { Ticket, Check } from "lucide-react";
import { applyCoupon, clearCoupon, COUPON_LIST } from "../../services/cart";
import "./CouponBox.css";

export default function CouponBox({ applied, onCouponChange }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleApply = (value) => {
    const result = applyCoupon(value);
    if (result.ok) {
      setError("");
      setCode("");
      onCouponChange();
    } else {
      setError(result.message);
    }
  };

  const handleRemove = () => {
    clearCoupon();
    setError("");
    onCouponChange();
  };

  return (
    <div className="coupon-box">
      <h2>
        <Ticket size={20} />
        Apply Coupon
      </h2>

      {applied ? (
        <div className="applied-coupon">
          <span>
            <Check size={16} />
            Coupon {applied.code} applied — Save ₹{applied.discount.toLocaleString("en-IN")}
          </span>
          <button onClick={handleRemove}>Remove</button>
        </div>
      ) : (
        <>
          <div className="coupon-input">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                setError("");
              }}
            />
            <button onClick={() => handleApply(code)}>Apply</button>
          </div>
          {error && <p className="coupon-error">{error}</p>}
        </>
      )}

      <div className="coupon-chips">
        {COUPON_LIST.map((c) => (
          <button key={c} onClick={() => handleApply(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
