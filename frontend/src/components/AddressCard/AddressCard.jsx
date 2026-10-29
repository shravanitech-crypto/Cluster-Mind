import { useState } from "react";
import { MapPin, Pencil, Phone, X, Save } from "lucide-react";
import "./AddressCard.css";

export default function AddressCard({ address, onSave }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(address);

  const handleSave = (e) => {
    e.preventDefault();
    onSave(form);
    setEditing(false);
  };

  if (editing) {
    return (
      <form className="address-form" onSubmit={handleSave}>
        <div className="address-form-head">
          <h3>Edit Delivery Address</h3>
          <button type="button" className="x-btn" onClick={() => setEditing(false)}>
            <X size={18} />
          </button>
        </div>

        <input
          placeholder="Full Name"
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <input
          placeholder="Phone Number"
          required
          maxLength="10"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
        />
        <textarea
          placeholder="Address Line (Flat, Building, Street)"
          required
          rows="2"
          value={form.addressLine}
          onChange={(e) => setForm({ ...form, addressLine: e.target.value })}
        />
        <div className="address-form-row">
          <input
            placeholder="City"
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          <input
            placeholder="State"
            required
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          />
          <input
            placeholder="Pincode"
            required
            maxLength="6"
            value={form.pincode}
            onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, "") })}
          />
        </div>

        <button className="save-address-btn" type="submit">
          <Save size={16} />
          Save Address
        </button>
      </form>
    );
  }

  return (
    <div className="address-card">
      <div className="address-head">
        <h3>
          <MapPin size={18} />
          Delivery Address
        </h3>
        <button className="change-btn" onClick={() => setEditing(true)}>
          <Pencil size={14} />
          Change
        </button>
      </div>

      <h4>{address.fullName}</h4>
      <p>{address.addressLine}</p>
      <p>
        {address.city}, {address.state} - {address.pincode}
      </p>
      <p className="phone">
        <Phone size={14} />
        {address.phone}
      </p>
    </div>
  );
}
