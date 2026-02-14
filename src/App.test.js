import { render, screen } from "@testing-library/react";
import BookingForm from "./booking/BookingForm";
import { initializeTimes, updateTimes } from "./App";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00"]);
});

test("initializeTimes returns available times from fetchAPI", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times based on selected date", () => {
  const state = ["17:00"];
  const action = { type: "dateChange", date: new Date("2026-02-14") };
  const newState = updateTimes(state, action);
  expect(newState.length).toBeGreaterThan(0);
  expect(window.fetchAPI).toHaveBeenCalled();
});

test("booking form has HTML5 validation attributes", () => {
  render(
    <BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />
  );

  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("required");
  expect(screen.getByLabelText(/choose time/i)).toHaveAttribute("required");
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("min", "1");
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("max", "10");
});
