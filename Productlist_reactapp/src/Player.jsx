import { useState } from "react";

export default function Player({ numPlayer, target }) {
  let [scores, setScores] = useState(Array(numPlayer).fill(0));
  let increScore = (idx) => {
    setScores((scores) => {
      let newscore = [...scores];
      newscore[idx] += 1;
      if (newscore[idx] > target) {
        return scores;
      } else return newscore;
    });
  };
  return (
    <div>
      {scores.map((ele, idx) => {
        return (
          <div key={idx}>
            <ul style={{ display: "inline-block" }}>
              Player{idx}: {ele}
            </ul>
            <button onClick={() => increScore(idx)}>+1</button>
            {ele === target ? <span>WINNER</span> : <></>}
          </div>
        );
      })}
    </div>
  );
}
