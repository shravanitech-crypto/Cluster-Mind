import "./ProductFilter.css";

const priceRanges = [
  { value: "under500", label: "Under ₹500" },
  { value: "500-5000", label: "₹500 - ₹5,000" },
  { value: "5000-20000", label: "₹5,000 - ₹20,000" },
  { value: "above20000", label: "Above ₹20,000" },
];

export default function ProductFilter({ brands, filters, onFilterChange, onClear }) {
  const toggleBrand = (brand) => {
    const brandsList = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: brandsList });
  };

  const toggleRating = (rating) => {
    const ratings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];
    onFilterChange({ ...filters, ratings });
  };

  return (
    <div className="filter-panel">

      <div className="filter-header">
        <h3>Filters</h3>
        <button className="clear-filters" onClick={onClear}>
          Clear All
        </button>
      </div>

      <div className="filter-group">
        <h4>Brand</h4>
        {brands.map((brand) => (
          <label className="filter-option" key={brand}>
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Price</h4>
        {priceRanges.map((range) => (
          <label className="filter-option" key={range.value}>
            <input
              type="radio"
              name="price"
              checked={filters.price === range.value}
              onChange={() => onFilterChange({ ...filters, price: range.value })}
            />
            {range.label}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Rating</h4>
        <label className="filter-option">
          <input
            type="checkbox"
            checked={filters.ratings.includes(4)}
            onChange={() => toggleRating(4)}
          />
          <span className="stars">★★★★★</span> 4+
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            checked={filters.ratings.includes(3)}
            onChange={() => toggleRating(3)}
          />
          <span className="stars">★★★☆☆</span> 3+
        </label>
      </div>

      <div className="filter-group">
        <h4>Availability</h4>
        <label className="filter-option">
          <input
            type="radio"
            name="availability"
            checked={filters.availability === "instock"}
            onChange={() => onFilterChange({ ...filters, availability: "instock" })}
          />
          In Stock
        </label>
        <label className="filter-option">
          <input
            type="radio"
            name="availability"
            checked={filters.availability === "outofstock"}
            onChange={() => onFilterChange({ ...filters, availability: "outofstock" })}
          />
          Out of Stock
        </label>
      </div>

    </div>
  );
}
