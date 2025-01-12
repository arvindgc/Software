import "./SlotM.css";
export default function SlotM(props) {
  if (props.p1 === props.p2 && props.p2 === props.p3)
    return (
      <div className="cont">
        <h1>{props.p1}</h1>
        <h1>{props.p2}</h1>
        <h1>{props.p3}</h1>

        <h2> You Won!!</h2>
        <h3> Congrats</h3>
      </div>
    );
  else
    return (
      <div className="cont">
        <h1>{props.p1}</h1>
        <h1>{props.p2}</h1>
        <h1>{props.p3}</h1>
        <h2> You Loose!</h2>
      </div>
    );
}
