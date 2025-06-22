import { useState } from "react";

// Array of fun emojis (including dice)
const emojis = [
  "⚀", "⚁", "⚂", "⚃", "⚄", "⚅", // dice
  "🍫", "💧", "📱", "🔋", "🧼", "📚", "☂️", "🎩", "🕶️", // backpack items
  "🎲", "🎒", "🧢", "🥤", "🍪", "📷", "🧴", "🧢", "🧭", "🧦"
];

function getRandomEmoji() {
  const idx = Math.floor(Math.random() * emojis.length);
  return emojis[idx];
}

function Item({ name }) {
  const [emoji, setEmoji] = useState(getRandomEmoji());
  return (
    <li
      onClick={() => setEmoji(getRandomEmoji())}
      style={{ cursor: "pointer" }}
      title="Click to get a random emoji"
    >
      {name} {emoji}
    </li>
  );
}

// ...existing code...

// ...existing code...

export default function Backpack() {
  const items = [
    "Water Bottle",
    "Snacks",
    "Phone",
    "Powerbank",
    "Soap",
    "Book",
    "Umbrella",
    "Hat",
    "Sunglasses"
  ];

  // Filter items that include "p" or "P"
  const filteredItems = items.filter(i => i.toLowerCase().includes("s"));

  return (
    <>
      <h1>Backpack List</h1>
      <ol>
        {filteredItems.map(i => (
          <Item key={i} name={i} />
        ))}
      </ol>
    </>
  );
}
