import "./InputField.css";

export default function InputField({ label, icon: Icon, error, ...props }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className={`input-box ${error ? "has-error" : ""}`}>
        {Icon && <Icon size={18} className="input-icon" />}
        <input {...props} />
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}
