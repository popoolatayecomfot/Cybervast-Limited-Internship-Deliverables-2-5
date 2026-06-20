export default function Card({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px"
      }}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}