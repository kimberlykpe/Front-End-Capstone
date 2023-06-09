import * as React from "react";
import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.png";
import dessert from "../images/lemon dessert.jpg";

function Specials() {
    return (
      <>
        <div className="specials">
          <div className="special_body">
            <h1>Specials</h1>
          </div>

          <div className="card-container">
          <div className="card">
            <img id="menuimg" src={greeksalad} alt="menu_1" />
            <h2>Greek Salad</h2>
            <p>Lettuce, peppers, olives and feta cheese.</p>
          </div>
          <div className="card">
            <img id="menuimg" src={bruchetta} alt="menu_2" />
            <h2>Bruschetta</h2>
            <p>Bread with olive oil and vegetables.</p>
          </div>

          <div className="card">
            <img id="menuimg" src={dessert} alt="menu_3" />
            <h2>Lemon Cake</h2>
            <p>A classic layered Lemon cake with custard filling.</p>
          </div>
        </div>
      </div>
      </>
    );
    }
export default Specials;