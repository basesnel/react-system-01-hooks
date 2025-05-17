import { Form, Button, TextArea, Paragraph, FlexBox } from 'components';
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
        <FlexBox>
          <Button
            isDisabled={status === 'empty' || status === 'submitting'}
            caption="Submit"
          />
        </FlexBox>
        {status === 'error' && (
          <Paragraph>Good guess but a wrong answer. Try again!</Paragraph>
        )}
      </Form>
    </>
  );
};

export default StateForm;
