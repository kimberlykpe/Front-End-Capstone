import Card from "./Card";

function Main() {
return (
    <div className="Main">
      <main>
        <form>
          <label> Number of guests:
             <input type="number" name="guests" />
          </label>
            <button type="Submit">Submit</button>
        </form>

        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
      </main>
    </div>
);
}

export default Main;
