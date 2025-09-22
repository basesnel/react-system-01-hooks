import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';
import { Form, Button, TextArea, P, FlexBox } from 'components';

const StateForm = ({ status }) => {
  const [answer, setAnswer] = useState('');

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <Form onSubmit={() => {}}>
        <TextArea
          isDisabled={status === 'submitting'}
          textAreaName={`prac03textarea${status}`}
          textAreaValue={answer}
          textAreaLabel="Your answer:"
          textAreaPlaceholder="Type your answer..."
          handleChange={handleTextareaChange}
          icon={<FiEdit3 />}
        />
        <FlexBox>
          <Button
            isDisabled={status === 'empty' || status === 'submitting'}
            caption="Submit"
          />
        </FlexBox>
        {status === 'error' && (
          <P warned centered>
            Good guess but a wrong answer. Try again!
          </P>
        )}
      </Form>
    </>
  );
};

StateForm.propTypes = {
  status: PropTypes.string,
};

StateForm.defaultProps = {
  status: 'error',
};

export default StateForm;
