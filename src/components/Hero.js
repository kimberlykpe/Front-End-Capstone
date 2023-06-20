<<<<<<< HEAD
import React from "react";
import restaurantFood from "../images/restaurantfood.jpg";
=======
import food from "../images/restauranfood.jpg";
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main_body">
          <h1>Little Lemon</h1>
<<<<<<< HEAD
          <h2>Chicago</h2>
=======
          <h3>Chicago</h3>
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
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

<<<<<<< HEAD
        <div className="featured">
          <img src={restaurantFood} alt="restaurant_food" />
=======
        <div className="foodlogo">
          <img src={food} alt="restaurantfood" />
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
        </div>
      </div>
    </>
  );
};

export default Hero;