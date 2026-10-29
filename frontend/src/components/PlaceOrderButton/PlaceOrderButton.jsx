import { Loader2, ShoppingBag } from "lucide-react";
import "./PlaceOrderButton.css";

const fmt = (n) => n.toLocaleString("en-IN");

export default function PlaceOrderButton({ total, placing, onPlaceOrder }) {
  return (
    <button className="place-order-btn" onClick={onPlaceOrder} disabled={placing}>
      {placing ? (
        <>
          <Loader2 size={18} className="spin" />
          Placing Order...
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          Place Order · ₹{fmt(total)}
        </>
      )}
    </button>
  );
}
