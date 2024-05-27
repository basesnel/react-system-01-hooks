import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';

import { colorPickerOptions } from 'constants';

import ColorPicker from 'tasks/ColorPicker';

const ColorPickerPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="color picker" />
        <Paragraph>Color picker hook case.</Paragraph>
      </Container>
      <Container>
        <Title level={2} caption="color picker" />
        <ColorPicker options={colorPickerOptions} />
      </Container>
    </main>
  );
};

export { ColorPickerPage };
