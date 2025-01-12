import { useState } from "react";
import { v4 as uuid } from "uuid";
function Emoji({ emjarr }) {
  const [emoji, nextEmoji] = useState([
    {
      id: uuid(),
      emojii: emjarr[Math.floor(Math.random() * emjarr.length)],
    },
  ]);
  let randemj = emjarr[Math.floor(Math.random() * emjarr.length)];
  let mynewEmoji = () => {
    nextEmoji((emoji) => [...emoji, { id: uuid(), emojii: randemj }]);
  };
  let deleteEmoji = (id) => {
    nextEmoji((emoji) => emoji.filter((e) => e.id !== id));
  };
  return (
    <>
      {emoji.map((emoji) => {
        return (
          <span onClick={() => deleteEmoji(emoji.id)} key={emoji.id}>
            {emoji.emojii}
          </span>
        );
      })}

      <button onClick={mynewEmoji}>New Emoji</button>
    </>
  );
}

export default Emoji;
