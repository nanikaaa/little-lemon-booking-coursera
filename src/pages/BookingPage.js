import BookingForm from "../booking/BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="card" aria-label="Booking page">
      <h1>Book a Table</h1>
      <p className="muted">
        Choose your date, time, guests, and occasion. Available times update by date.
      </p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}
