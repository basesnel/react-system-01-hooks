import { Container, Heading, P } from 'components';

import { colorPickerOptions } from 'constants';

import { ColorPicker } from 'tasks';

const ColorPickerPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          color picker
        </Heading>
        <P>Color picker hook case.</P>
      </Container>
      <Container>
        <ColorPicker options={colorPickerOptions} />
      </Container>
    </main>
  );
};

export { ColorPickerPage };
