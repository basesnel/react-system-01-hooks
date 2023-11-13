import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

import ColorPicker from 'tasks/ColorPicker';

import { colorPickerOptions } from 'constants';

export const ColorPickerPage = () => {
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
