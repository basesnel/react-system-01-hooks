import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Form, Button, TextArea, Paragraph, FlexBox } from 'components';

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
          icon={<FiEdit3 />}
        />
        <FlexBox>
          <Button
            isDisabled={status === 'empty' || status === 'submitting'}
            caption="Submit"
          />
        </FlexBox>
        {status === 'error' && (
          <Paragraph warned centered>
            Good guess but a wrong answer. Try again!
          </Paragraph>
        )}
      </Form>
    </>
  );
};

export default StateForm;
