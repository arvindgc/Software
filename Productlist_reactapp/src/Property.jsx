export default function Property({ name, rating, price, id }) {
  return (
    <div>
      <h1> {name}</h1>
      <h2> {price}</h2>
      <h3> ✨{rating}</h3>
    </div>
  );
}
