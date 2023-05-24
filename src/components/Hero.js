import food from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main_body">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/reservations">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="foodlogo">
          <img src={food} alt="restaurantfood" />
        </div>
      </div>
    </>
  );
};

export default Hero;