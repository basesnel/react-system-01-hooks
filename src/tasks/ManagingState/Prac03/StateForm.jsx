import { Form, Button, TextArea, Paragraph } from 'components';
import { useState } from 'react';

const StateForm = ({ status }) => {
  const [quiz, setQuiz] = useState('');
  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <Form onSubmit={() => {}}>
        <TextArea
          isDisabled={status === 'submitting'}
          textAreaValue={quiz}
          handleChange={setQuiz}
        />
        <Button
          isDisabled={status === 'empty' || status === 'submitting'}
          caption="Submit"
        />
        {status === 'error' && (
          <Paragraph>Good guess but a wrong answer. Try again!</Paragraph>
        )}
      </Form>
    </>
  );
};

export default StateForm;
