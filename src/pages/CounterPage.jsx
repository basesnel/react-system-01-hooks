import { useState } from 'react';

import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';
import { ButtonCount } from 'components/ButtonCount/ButtonCount';
import { ButtonGeneralCount } from 'components/ButtonGeneralCount/ButtonGeneralCount';

export const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main>
      <Container>
        <Title level={1} caption="Counter" />
        <Text>Counter hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Counter with own state" />
        <ButtonCount />
        <ButtonCount />
        <ButtonCount />
        <ButtonCount />
        <ButtonCount />
      </Container>
      <Container>
        <Title level={2} caption="Counter with general state" />
        <ButtonGeneralCount count={count} onClick={handleClick} />
        <ButtonGeneralCount count={count} onClick={handleClick} />
      </Container>
    </main>
  );
};
