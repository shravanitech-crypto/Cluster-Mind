import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Star,
  Send,
  CheckCircle2,
  Heart,
  Package,
  Truck,
  Sparkles,
} from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Feedback.css";

const topics = [
  { icon: <Package size={18} />, label: "Product Quality" },
  { icon: <Truck size={18} />, label: "Delivery Experience" },
  { icon: <Heart size={18} />, label: "Customer Support" },
  { icon: <Sparkles size={18} />, label: "AI Recommendations" },
];

export default function Feedback() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [topic, setTopic] = useState("Product Quality");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="feedback-page-main">
        <Navbar onToggleSidebar={() => setSidebarOpen(true)} />

        <div className="feedback-page">
          <div className="fb-title">
            <h1>Feedback</h1>
            <p>Your opinion helps us improve your shopping experience</p>
          </div>

          {submitted ? (
            <div className="fb-success">
              <CheckCircle2 size={56} color="#22C55E" />
              <h2>Thank You!</h2>
              <p>Your feedback has been submitted successfully.</p>
              <button onClick={() => navigate("/")}>Back to Home</button>
            </div>
          ) : (
            <div className="fb-grid">
              <div className="fb-card fb-form-card">
                <h2>Share Your Feedback</h2>

                <form onSubmit={handleSubmit}>
                  <div className="fb-field">
                    <label>How was your experience?</label>
                    <div className="fb-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(star)}
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            size={30}
                            fill={
                              star <= (hover || rating) ? "#F59E0B" : "none"
                            }
                            color="#F59E0B"
                          />
                        </button>
                      ))}
                    </div>
                    {rating > 0 && (
                      <span className="fb-rating-text">
                        {rating === 5
                          ? "Excellent!"
                          : rating === 4
                          ? "Very Good"
                          : rating === 3
                          ? "Good"
                          : rating === 2
                          ? "Poor"
                          : "Very Poor"}
                      </span>
                    )}
                  </div>

                  <div className="fb-field">
                    <label>Topic</label>
                    <div className="fb-topics">
                      {topics.map((t, i) => (
                        <button
                          type="button"
                          key={i}
                          className={topic === t.label ? "active" : ""}
                          onClick={() => setTopic(t.label)}
                        >
                          {t.icon}
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="fb-field">
                    <label>Your Feedback</label>
                    <textarea
                      placeholder="Tell us what you think..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    className="fb-submit"
                    type="submit"
                    disabled={rating === 0 || !message.trim()}
                  >
                    <Send size={18} />
                    Submit Feedback
                  </button>
                </form>
              </div>

              <div className="fb-card fb-side">
                <div className="fb-side-head">
                  <MessageSquare size={20} />
                  <h2>Why Your Feedback Matters</h2>
                </div>

                <ul>
                  <li>
                    <strong>Better Product Matches</strong>
                    <p>Your ratings train our AI to recommend products you&apos;ll love.</p>
                  </li>
                  <li>
                    <strong>Improved Delivery</strong>
                    <p>Tell us about your delivery experience to help us improve.</p>
                  </li>
                  <li>
                    <strong>Rewards</strong>
                    <p>Every feedback earns you 50 bonus loyalty points.</p>
                  </li>
                </ul>

                <div className="fb-points">
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  Earn <strong>+50</strong> points per feedback
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
