import "./AuthLayout.css";
import { Sparkles, TrendingUp, Gift, ShieldCheck } from "lucide-react";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="auth-layout">

      <div className="auth-side">
        <div className="auth-logo">
          <img src="/logo.png" alt="logo" />
          <div>
            <h2>ClusterMind</h2>
            <span>AI Powered Shopping</span>
          </div>
        </div>

        <div className="auth-side-content">
          <div className="auth-tag">
            <Sparkles size={16} />
            AI Personalized Marketing
          </div>

          <h1>
            Smart Shopping
            <br />
            Starts Here
          </h1>

          <p>
            Get AI-powered product recommendations, personalized offers
            and a smarter shopping experience.
          </p>

          <div className="auth-features">
            <div className="feature">
              <TrendingUp size={18} />
              <span>AI Product Recommendations</span>
            </div>
            <div className="feature">
              <Gift size={18} />
              <span>Loyalty Rewards & Offers</span>
            </div>
            <div className="feature">
              <ShieldCheck size={18} />
              <span>Secure & Personalized</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-main">
        <div className="auth-box">
          <h1>{title}</h1>
          {subtitle && <p className="auth-sub">{subtitle}</p>}
          {children}
        </div>
      </div>

    </div>
  );
}
