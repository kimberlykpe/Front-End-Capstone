import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.jpg";
import dessert from "../images/lemon dessert.jpg";
import Card from "react-bootstrap/Card";

function Specials() {
    return (
      <>
        <div className="specials">
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