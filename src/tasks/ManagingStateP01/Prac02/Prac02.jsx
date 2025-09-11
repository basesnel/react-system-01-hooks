import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Form, Paragraph, TextArea, Title } from 'components';

const Prac02 = ({ status = 'error' }) => {
  const [answer, setAnswer] = useState('');

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <Title level={3} caption="city quiz" />
      <Paragraph>
        In which city is there a billboard that runs air into drinkable water
      </Paragraph>
      <Form onSubmit={() => {}}>
        <TextArea
          isDisabled={status === 'submitting'}
          textAreaName="prac02textarea"
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
          <Paragraph centered warned>
            Good guess but a wrong answer. Try again!
          </Paragraph>
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
