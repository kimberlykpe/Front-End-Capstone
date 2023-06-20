<<<<<<< HEAD
import * as React from "react";
import chefs from "../images/Mario and Adrian b.jpg";
import food from "../images/restaurant.jpg";
=======
import restaurantChefs from "../images/Mario and Adrian b.jpg";
import restaurant from "../images/restaurant.jpg";
import React from "react";
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
<<<<<<< HEAD
          <h1>About Us</h1>
=======
          <h4>Little Lemon</h4>
          <h6>Chicago</h6>
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
          <p>
            Welcome to the Little Lemon Restaurant, a hidden gem nestled in the heart of the city. 
            As you step through our doors, prepare to embark on a delightful culinary journey inspired by the vibrant 
            flavors of the Mediterranean. At the Little Lemon, our talented chefs are passionate about crafting authentic 
            Mediterranean dishes using the finest, locally sourced ingredients. With a focus on capturing the essence of 
            Mediterranean cuisine, our menu showcases a harmonious blend of flavors, colors, and textures that will transport 
            you to the sun-drenched shores of Greece, Italy, and beyond.
          </p>
        </div>

        <div className="owners">
<<<<<<< HEAD
          <img id= "restaurantChefs" src={chefs} alt="chef_1" />
          <img id= "restaurant" src={food} alt="chef_2" />
=======
          <img src={restaurantChefs} alt="chef_1" />
          <img src={restaurant} alt="chef_2" />
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
        </div>
      </div>
    </>
  );
};

export default About;