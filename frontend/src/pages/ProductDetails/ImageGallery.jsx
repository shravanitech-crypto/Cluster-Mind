import { useState } from "react";
import { getGallery } from "../../services/products";
import "./ProductDetails.css";

export default function ImageGallery({ product }) {
  const gallery = getGallery(product);
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="gallery">
      <div
        className={`main-image ${zoomed ? "zoomed" : ""}`}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <img src={gallery[active]} alt={product.name} />
      </div>

      <div className="thumbs">
        {gallery.map((img, i) => (
          <button
            key={i}
            className={`thumb ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <img src={img} alt={`${product.name} view ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
