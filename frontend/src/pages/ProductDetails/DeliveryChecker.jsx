import { useState } from "react";
import { MapPin, Truck, CheckCircle2, Banknote } from "lucide-react";
import "./ProductDetails.css";

export default function DeliveryChecker() {
  const [pincode, setPincode] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setError("Enter a valid 6-digit pincode");
      setChecked(false);
      return;
    }
    setError("");
    setChecked(true);
  };

  return (
    <div className="delivery-checker">
      <h3>Check Delivery</h3>
      <form className="pin-form" onSubmit={handleCheck}>
        <MapPin size={18} />
        <input
          type="text"
          placeholder="Enter pincode (e.g. 411001)"
          maxLength="6"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, ""));
            setChecked(false);
          }}
        />
        <button type="submit">Check</button>
      </form>
      {error && <p className="pin-error">{error}</p>}
      {checked && (
        <div className="pin-result">
          <p>
            <Truck size={16} />
            Delivery by Tomorrow
          </p>
          <p>
            <CheckCircle2 size={16} />
            Free Delivery
          </p>
          <p>
            <Banknote size={16} />
            Cash on Delivery Available
          </p>
        </div>
      )}
    </div>
  );
}
