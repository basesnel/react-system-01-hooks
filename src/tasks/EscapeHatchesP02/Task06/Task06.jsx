import { useState, useEffect } from 'react';
import { Canvas, FlexBox, CheckBox } from 'components';

const Task06 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    const canvas = document.querySelector('[data-box]');

    function handleMove(e) {
      canMove &&
        setPosition({
          x: e.clientX - this.getBoundingClientRect().x,
          y: e.clientY - this.getBoundingClientRect().y,
        });
    }

    canvas.addEventListener('pointermove', handleMove);

    return () => canvas.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <Canvas data-box>
      <FlexBox>
        <CheckBox
          name="canMove06"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)}
          label="The dot is allowed to move"
        />
      </FlexBox>
      <hr />
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </Canvas>
  );
};

export default Task06;
