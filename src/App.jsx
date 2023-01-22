import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColors = [
  "#2C3639",
  "#3F4E4F",
  "#A27B5C",
  "#3C2A21",
  "#1C0A00",
  "#361500",
  "#603601",
  "#AD8B73",
  "#CEAB93",
  "#E3CAA5",
  "#1A120B",
  "#EAC7C7",
  "#94B49F",
  "#CEE5D0",
  "#ECB390"
];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors));

  const newRandomQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  };

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
        quote={quote} 
        newRandomQuote={newRandomQuote} 
        color={color}
      />
    </div>
  );
}

export default App;
