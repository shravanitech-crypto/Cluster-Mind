import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import "./PasswordInput.css";

export default function PasswordInput({ label, error, ...props }) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-field">
      <label>{label}</label>
      <div className={`input-box ${error ? "has-error" : ""}`}>
        <Lock size={18} className="input-icon" />
        <input type={show ? "text" : "password"} {...props} />
        <button
          type="button"
          className="eye-btn"
          onClick={() => setShow(!show)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}
