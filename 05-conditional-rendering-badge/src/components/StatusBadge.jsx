export default function StatusBadge({ text, style }) {
  return (
    <div className="status-badge" style={style}>
      {text}
    </div>
  );
}
