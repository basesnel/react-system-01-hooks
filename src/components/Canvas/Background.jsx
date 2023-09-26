export default function Background({ position }) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(${position.x}, ${position.y})`,
        width: 250,
        height: 250,
        backgroundColor: 'rgba(200, 200, 0, 0.2)',
      }}
    />
  );
}
