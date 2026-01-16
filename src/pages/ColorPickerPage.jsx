import { Main, Container, H, P } from 'components';

import { colorPickerOptions } from 'constants';

import { ColorPicker } from 'tasks';

const ColorPickerPage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>color picker</H>
        <P>Color picker hook case.</P>
      </Container>
      <Container>
        <ColorPicker options={colorPickerOptions} />
      </Container>
    </Main>
  );
};

export { ColorPickerPage };
