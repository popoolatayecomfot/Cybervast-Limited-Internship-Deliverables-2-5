export default function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        background: "#f4f4f4",
        padding: "20px"
      }}
    >
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}