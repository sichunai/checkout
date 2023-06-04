import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

const ShowItem = ({ show }) => {
  const { title, date, location, price } = show;
  const [selectedNumber, setSelectedNumber] = useState(1);

  function handleSelect(value) {
    setSelectedNumber(value);
  }

  return (
    <div className="show-container">
      <h2>{title}</h2>
      <div className="details-container">
        <span>Date: {date}</span>
        <span>Location: {location}</span>
        <span>Price: ${price}</span>
        <div>
          <label for="tickets">Number of Tickets:</label>
          <select
            name="tickets"
            onChange={(e) => handleSelect(e.target.value)}
            value={selectedNumber}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <Link to="checkout" state={{ title, price, selectedNumber }}>
          Buy
        </Link>
      </div>
    </div>
  );
};

export default ShowItem;
