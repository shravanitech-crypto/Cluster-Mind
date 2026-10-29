import "./HeroBanner.css";
import { Sparkles, ArrowRight, BrainCircuit, ShoppingCart } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="hero-banner">

      <div className="hero-glow one"></div>
      <div className="hero-glow two"></div>
      <div className="hero-circuit"></div>

      <div className="hero-left">

        <div className="tag">
          <Sparkles size={18} />
          AI Personalized Marketing
        </div>

        <h1>
          AI Powered Just For You! <span>✨</span>
        </h1>

        <p>
          Discover products recommended based on your shopping behavior,
          preferences and latest trends.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => document.getElementById("ai-recommendations")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Now
            <ArrowRight size={18} />
          </button>

          <button className="secondary-btn" onClick={() => document.getElementById("offers")?.scrollIntoView({ behavior: "smooth" })}>
            View Offers
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="circle big"></div>
        <div className="circle small"></div>

        <div className="ai-brain">
          <BrainCircuit size={34} />
          <div className="ai-card">
            <ShoppingCart size={18} />
            AI Match
            <strong>95%</strong>
          </div>
        </div>

      </div>

    </div>
  );
}
