<<<<<<< HEAD
import * as React from "react";
import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.png";
import dessert from "../images/lemon dessert.jpg";
=======
import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.jpg";
import dessert from "../images/lemon dessert.jpg";
import Card from "react-bootstrap/Card";
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482

function Specials() {
    return (
      <>
        <div className="specials">
<<<<<<< HEAD
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
=======
          <div className="specials_body">
            <h3>Specials</h3>
  
            <button id="button">Online Menu</button>
          </div>
        </div>
  
        <div className="cards">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={greeksalad} />
            <Card.Body>
              <Card.Title>Greek Salad</Card.Title>
              <Card.Text>
                Lettuce, peppers, olives and feta cheese.
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={bruchetta} />
            <Card.Body>
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text>
                Bread with olive oil and vegetables.
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={dessert} />
            <Card.Body>
              <Card.Title>Lemon Cake</Card.Title>
              <Card.Text>
                A classic layered Lemon cake with custard filling.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
  
  export default Specials;
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
