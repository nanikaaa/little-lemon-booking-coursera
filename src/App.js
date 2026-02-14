import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

/** Safe wrappers: use API if loaded, else fallback (prevents blank screen) */
const fetchAPI = (date) =>
  window.fetchAPI ? window.fetchAPI(date) : ["17:00", "18:00", "19:00", "20:00"];
const submitAPI = (formData) => (window.submitAPI ? window.submitAPI(formData) : true);

/** Exported for tests */
export function initializeTimes() {
  return fetchAPI(new Date());
}

/** Reducer: action = { type: "dateChange", date: Date } */
export function updateTimes(state, action) {
  if (action.type === "dateChange") {
    return fetchAPI(action.date);
  }
  return state;
}

function AppContent() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  function submitForm(formData) {
    const ok = submitAPI(formData);
    if (ok) navigate("/confirmed");
  }

  return (
    <>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}