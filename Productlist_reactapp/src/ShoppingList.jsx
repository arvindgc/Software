export default function ShoppingList({ props }) {
  return (
    <ul>
      {props.map((ele) => (
        <li
          style={{
            color: ele.completed ? "grey" : "red",
            textDecoration: ele.completed ? "line-through" : "none",
          }}
        >
          {ele.item}--{ele.quantity}
        </li>
      ))}
    </ul>
  );
}
