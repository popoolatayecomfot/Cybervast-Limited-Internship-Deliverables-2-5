export default function Avatar({ name = "User", image }) {
  return (
    <div>
      {image ? (
        <img
          src={image}
          alt={name}
          width="50"
          height="50"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
}