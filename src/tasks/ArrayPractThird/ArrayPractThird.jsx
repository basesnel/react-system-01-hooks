import DecoratedButton from 'components/DecoratedButton';
import { useState } from 'react';

const initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ArrayPractThird() {
  const [shapes, setShapes] = useState(initialShapes);

  const handleClick = () => {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(nextShapes);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 300 }}>
      <DecoratedButton caption="Move circles down!" onClick={handleClick} />
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            backgroundColor: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        />
      ))}
    </div>
  );
}
