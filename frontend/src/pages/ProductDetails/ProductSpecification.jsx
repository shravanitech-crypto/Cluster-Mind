import { getSpecifications } from "../../services/products";
import "./ProductDetails.css";

export default function ProductSpecification({ product }) {
  const specs = getSpecifications(product);

  return (
    <div className="spec-section">
      <h2>📦 Specifications</h2>
      <table className="spec-table">
        <tbody>
          {specs.map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
