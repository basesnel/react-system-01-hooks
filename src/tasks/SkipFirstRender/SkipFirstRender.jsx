import { useEffect, useState, useRef } from 'react';
import DecoratedButton from 'components/DecoratedButton';
import Text from 'components/Text';

export default function SkipFirstRender() {
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
      <DecoratedButton
        caption={count}
        onClick={() => {
          setCount(c => c + 1);
        }}
      />
      <Text>
        <code>useEffect</code> of this component not run on the first render.
      </Text>
    </div>
  );
}
