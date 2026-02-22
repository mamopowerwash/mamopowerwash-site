export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Mamo Powerwash Solutions</h1>

      <p>Professional On-Site Fleet Pressure Washing</p>

      <div style={{ marginTop: 20 }}>
        <a
          href="/login"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 20px",
            borderRadius: 8,
            textDecoration: "none"
          }}
        >
          Staff Login
        </a>
      </div>
    </main>
  );
}
