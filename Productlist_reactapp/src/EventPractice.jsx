import { useState } from "react";

export default function EventPractice({ mycolor }) {
  let boxcolors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "indigo",
    "yellow",
    "black",
  ];
  let [currcolor, nextcolor] = useState(mycolor);

  let colorb = () => {
    let randindex = Math.floor(Math.random() * boxcolors.length);
    nextcolor(boxcolors[randindex]);
  };
  return (
    <div
      onClick={colorb}
      style={{ backgroundColor: currcolor, width: "100px", height: "100px" }}
    ></div>
  );
}
