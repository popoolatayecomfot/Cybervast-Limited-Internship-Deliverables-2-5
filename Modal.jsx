export default function Modal({ isOpen, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)"
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          margin: "100px auto",
          width: "300px",
          borderRadius: "8px"
        }}
      >
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}