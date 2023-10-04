import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

import ColorPicker from 'tasks/ColorPicker';

import { colorPickerOptions } from 'constants';

export const ColorPickerPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="color picker" />
        <Text>Color picker hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="color picker" />
        <ColorPicker options={colorPickerOptions} />
      </Container>
    </main>
  );
};
