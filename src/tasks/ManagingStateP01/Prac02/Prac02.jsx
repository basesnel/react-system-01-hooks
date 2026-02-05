import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Form, P, Textarea, Title } from 'components';

const Prac02 = ({ status }) => {
  const [answer, setAnswer] = useState('');

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <Title level={3} caption="city quiz" />
      <P>
        In which city is there a billboard that runs air into drinkable water
      </P>
      <Form onSubmit={() => {}}>
        <Textarea
          disabled={status === 'submitting'}
          name="prac02textarea"
          value={answer}
          label="Your answer:"
          placeholder="Type your answer..."
          onChange={handleTextareaChange}
          icon={<FiEdit3 />}
        />
        <FlexBox>
          <Button
            isDisabled={status === 'empty' || status === 'submitting'}
            caption="Submit"
          />
        </FlexBox>
        {status === 'error' && (
          <P centered warned>
            Good guess but a wrong answer. Try again!
          </P>
        )}
      </Form>
    </>
  );
};

Prac02.propTypes = {
  status: PropTypes.string,
};

Prac02.defaultProps = {
  status: 'error',
};

export default Prac02;
