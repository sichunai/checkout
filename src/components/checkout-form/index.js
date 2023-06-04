import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const CheckoutForm = () => {
  const location = useLocation();
  const { title, price, selectedNumber } = location.state;
  const totalPrice = price * selectedNumber;
  const priceWithFees = Math.round((totalPrice + 44.08) * 100) / 100;

  return (
    <div className="form-container">
      <div>
        <div className="delivery-container">
          <h3>Delivery</h3>
          <h4>Mobile Entry - Free</h4>
          <div style={{ color: "#9f9f9f" }}>
            Tickets Available by Sun Apr 3, 2022
          </div>
          <div style={{ color: "#9f9f9f" }}>
            These mobile tickets will be transferred directly to you from a
            trusted seller. We'll email you instructions on how to accept them
            on the original ticket provider's mobile app.
          </div>
        </div>
        <div className="payment-container">
          <h3>Payment</h3>
          <h4>Use Credit / Debit Card</h4>
          <div>
            <label for="ccard">Card Number: </label>
            <input type="text" id="ccard" name="ccard"></input>
          </div>
          <div>
            <label for="cvv">Security Code: </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              style={{ width: 36 }}
            ></input>
          </div>
          <h4>Or Pay With</h4>
          <h6>
            By using a digital wallet and continuing past this page, you have
            read and are accepting the Terms of Use
          </h6>
        </div>
      </div>
      <div className="total-container">
        <div className="value-container">
          <h3>Total</h3>
          <h3>${priceWithFees}</h3>
        </div>
        <div className="value-container">
          <h3>Tickets</h3>
          <h3>{title}</h3>
        </div>
        <div className="value-container">
          <span>
            Resale Tickets: ${price} x {selectedNumber}
          </span>
          <span>${totalPrice}</span>
        </div>
        <h4>Notes From Seller</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          consequat erat. Fusce commodo justo fermentum fringilla gravida.
          Mauris tristique sapien cursus, mollis lectus eu, semper lectus.
        </div>
        <h4>Fees</h4>
        <div className="value-container">
          <div>Service Fee: $44.08 x {selectedNumber}</div>
          <div>$88.16</div>
        </div>
        <div className="value-container">
          <div>Order Processing Fee</div>
          <div>$2.95</div>
        </div>
        <h4>Delivery</h4>
        <div className="value-container">
          <div>Mobile Entry</div>
          <div>Free</div>
        </div>
        <div className="cancel-order-container">
          <Link to="/" style={{ color: "#2185f2" }}>
            Cancel Order
          </Link>
        </div>
        <h4>*All Sales Final - No Refunds</h4>
        <div>
          <input type="checkbox"></input>
          <span>I have read and agree to the current terms of use </span>
        </div>
        <button className="order-button">Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
