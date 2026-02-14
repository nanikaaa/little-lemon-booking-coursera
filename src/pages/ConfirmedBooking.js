import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <section className="card" aria-label="Booking confirmation">
      <h1>Booking Confirmed ✅</h1>
      <p>Your table reservation has been confirmed.</p>
      <Link className="btn" to="/" aria-label="On Click">
        Back to Home
      </Link>
    </section>
  );
}
