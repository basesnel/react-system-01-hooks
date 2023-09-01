import Container from 'components/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';
import ColorPicker from 'components/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const ColorPickerPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Color picker" />
        <Text>Color picker hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Color picker" />
        <ColorPicker options={colorPickerOptions} />
      </Container>
    </main>
  );
};
