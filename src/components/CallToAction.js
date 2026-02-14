import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="card hero" aria-label="Call to action">
      <h1>Little Lemon</h1>
      <p>Reserve a table in Chicago.</p>
      <Link className="btn" to="/booking" aria-label="On Click">
        Reserve a Table
      </Link>
    </section>
  );
}
