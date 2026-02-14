import React from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [guests, setGuests] = React.useState(1);
  const [occasion, setOccasion] = React.useState("Birthday");
  const [isValid, setIsValid] = React.useState(false);

  // Validate fields
  React.useEffect(() => {
    const valid =
      date &&
      time &&
      Number(guests) >= 1 &&
      Number(guests) <= 10 &&
      (occasion === "Birthday" || occasion === "Anniversary");
    setIsValid(Boolean(valid));
  }, [date, time, guests, occasion]);

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);

    // Dispatch selected date to reducer (updates availableTimes)
    if (newDate) {
      dispatch({ type: "dateChange", date: new Date(newDate) });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    submitForm({
      date,
      time,
      guests: Number(guests),
      occasion,
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Booking form">
      <div className="field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button className="btn" type="submit" disabled={!isValid} aria-label="On Click">
        Make Your reservation
      </button>

      {!isValid && (
        <p className="error" role="alert" aria-live="polite">
          Please complete all fields correctly.
        </p>
      )}
    </form>
  );
}
