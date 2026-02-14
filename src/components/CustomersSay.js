export default function CustomersSay() {
  const reviews = [
    { name: "Alex", rating: 5, text: "Amazing food and friendly staff!" },
    { name: "Sam", rating: 4, text: "Great vibe. Will come back." },
    { name: "Jamie", rating: 5, text: "Best Mediterranean in Chicago!" },
  ];

  return (
    <section className="card" aria-label="Customer testimonials">
      <h2>Customers Say</h2>
      <div className="grid3">
        {reviews.map((r) => (
          <article key={r.name} className="miniCard">
            <p className="stars" aria-label={`Rating ${r.rating} out of 5`}>
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </p>
            <p>{r.text}</p>
            <p className="muted">— {r.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
