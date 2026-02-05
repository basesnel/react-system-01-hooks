import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';
import { Form, Button, Textarea, P, FlexBox } from 'components';

const StateFormP03 = ({ status }) => {
  const [answer, setAnswer] = useState('');

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <Form onSubmit={() => {}}>
        <Textarea
          disabled={status === 'submitting'}
          name={`prac03textarea${status}`}
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
          <P warned centered>
            Good guess but a wrong answer. Try again!
          </P>
        )}
      </Form>
    </>
  );
};

StateFormP03.propTypes = {
  status: PropTypes.string,
};

StateFormP03.defaultProps = {
  status: 'error',
};

export default StateFormP03;
