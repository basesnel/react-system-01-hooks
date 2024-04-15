import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

import { initialShapesList } from 'constants';
import FlexBox from 'components/FlexBox';

export default function Prac03() {
  const [shapes, setShapes] = useState(initialShapesList);

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
    <div style={{ position: 'relative', width: '100%', height: 200 }}>
      <FlexBox>
        <DecoratedButton caption="Move circles down!" onClick={handleClick} />
      </FlexBox>
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
