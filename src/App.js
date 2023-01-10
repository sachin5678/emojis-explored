import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling Face",
  "😄": "Laugh",
  "😁": "Grin",
  "😉": "Wink",
  "😍": "Heart eyes",
  "😘": "Kissing heart",
  "😑": "Expressionless",
  "😏": "Smirk"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " we don't have this in our Library";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Library</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h2> emojis we know!</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "4rem", padding: "0.9rem", cursor: "poiter" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
