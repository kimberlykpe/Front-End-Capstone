import * as React from "react";
import star from "../images/5_star.png";
import customer1 from "../images/customer_1.jpeg";
import customer2 from "../images/customer_2.jpeg";
import customer3 from "../images/customer_3.jpeg";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial_body">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={star} alt="star" />
            <img id="profile" src={customer1} alt="customer_1" />
            <h2>Ash</h2>
            <p>"Glad I tried this place out!"</p>
          </div>
          <div className="review">
            <img id="rating" src={star} alt="star" />
            <img id="profile" src={customer2} alt="customer_2" />
            <h2>Adi</h2>
            <p>"The owners made me feel very welcomed."</p>
          </div>

          <div className="review">
            <img id="rating" src={star} alt="star" />
            <img id="profile" src={customer3} alt="customer_3" />
            <h2>Nick</h2>
            <p>"Will be coming back!"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;