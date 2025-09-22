import { Container, Title, P } from 'components';

import { colorPickerOptions } from 'constants';

import { ColorPicker } from 'tasks';

const ColorPickerPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="color picker" />
        <P>Color picker hook case.</P>
      </Container>
      <Container>
        <Title level={2} caption="color picker" />
        <ColorPicker options={colorPickerOptions} />
      </Container>
    </main>
  );
};

export { ColorPickerPage };
