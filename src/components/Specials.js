export default function Specials() {
  const specials = [
    { title: "Greek Salad", desc: "Crisp lettuce, olives, feta." },
    { title: "Bruschetta", desc: "Grilled bread, tomato, basil." },
    { title: "Lemon Dessert", desc: "Sweet and citrusy." },
  ];

  return (
    <section className="card" aria-label="Specials">
      <h2>Specials</h2>
      <div className="grid3">
        {specials.map((s) => (
          <article key={s.title} className="miniCard">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
