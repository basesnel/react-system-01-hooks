import { useEffect, useState, useRef } from 'react';
import { Button, Paragraph } from 'components';

const SkipFirstRender = () => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(`useEffect is run - ${Date.now()}`);
  });
  return (
    <div>
      <Button
        caption={count}
        onClick={() => {
          setCount(c => c + 1);
        }}
      />
      <Paragraph>
        <code>useEffect</code> of this component not run on the first render.
      </Paragraph>
    </div>
  );
};

export default SkipFirstRender;
