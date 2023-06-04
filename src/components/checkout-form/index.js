import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const CheckoutForm = () => {
  const location = useLocation();
  const { title, price, selectedNumber } = location.state;

  return (
    <div className="form-container">
      <div className="delivery-container">
        <h3>Delivery</h3>
        <h5>Mobile Entry - Free</h5>
        <div>Tickets Available by Sun Apr 3, 2022</div>
        <div>
          These mobile tickets will be transferred directly to you from a
          trusted seller. We'll email you instructions on how to accept them on
          the original ticket provider's mobile app.{" "}
        </div>
      </div>
      <div className="payment-container">
        <h3>Payment</h3>
        <h5>Use Credit / Debit Card</h5>
        <h5>Or Pay With</h5>
        <h6>
          By using a digital wallet and continuing past this page, you have read
          and are accepting the Terms of Use
        </h6>
      </div>
      <div className="total-container">
        <h3>Total</h3>
        <h5>Tickets</h5>
        <div>
          Resale Tickets: ${price} x {selectedNumber}
        </div>
        <h5>Notes From Seller</h5>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          consequat erat. Fusce commodo justo fermentum fringilla gravida.
          Mauris tristique sapien cursus, mollis lectus eu, semper lectus.
        </div>
        <h5>Fees</h5>
        <div>Service Fee: $44.08 x {selectedNumber}</div>
        <div>Orde3r Processing Fee</div>
        <h5>Delivery</h5>
        <div>Mobile Entry</div>
        <Link to="/"> Cancel Order</Link>
        <h5>*All Sales Final - No Refunds</h5>
        <div>
          <input type="checkbox"></input>I have read and agree to the current
          terms of use
        </div>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
