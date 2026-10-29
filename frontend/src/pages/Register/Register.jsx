import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, UserPlus } from "lucide-react";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import InputField from "../../components/InputField/InputField";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { fakeRegister } from "../../services/auth";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const err = {};
    if (!form.fullName.trim()) err.fullName = "Full name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!form.phone.trim()) err.phone = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.phone)) err.phone = "Enter a valid 10-digit mobile number";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 8) err.password = "Password must be at least 8 characters";
    if (form.confirmPassword !== form.password) err.confirmPassword = "Passwords do not match";
    if (!terms) err.terms = "Please accept the terms & conditions";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    setLoading(true);
    try {
      await fakeRegister(form);
      navigate("/login");
    } catch (errObj) {
      setErrors(errObj);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join ClusterMind and shop smarter"
    >
      <form className="auth-form" onSubmit={handleSubmit}>

        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          icon={User}
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          icon={Mail}
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Mobile Number"
          type="tel"
          name="phone"
          icon={Phone}
          placeholder="Enter 10-digit mobile number"
          maxLength="10"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Create a password (min 8 characters)"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="terms-row">
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => {
                setTerms(e.target.checked);
                setErrors({ ...errors, terms: "" });
              }}
            />
            I accept the <span>Terms & Conditions</span>
          </label>
          {errors.terms && <span className="error-msg">{errors.terms}</span>}
        </div>

        <button className="auth-btn" type="submit" disabled={loading}>
          <UserPlus size={18} />
          {loading ? "Creating Account..." : "Create Account"}
        </button>

      </form>

      <p className="auth-footer">
        Already have an account?{" "}
        <Link to="/login" className="auth-link">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
