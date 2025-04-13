export default function Avatar({ src }) {
  return (
    <img
      src={src}
      alt="Profile"
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "1rem",
      }}
    />
  );
}
