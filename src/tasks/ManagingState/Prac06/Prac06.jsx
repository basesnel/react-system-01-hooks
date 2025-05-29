import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Form, Paragraph, TextArea, Title } from 'components';

const Prac06 = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success')
    return (
      <Paragraph centered succeeded>
        That's right!
      </Paragraph>
    );

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <Title level={3} caption="city quiz" />
      <Paragraph>
        In which city is there a billboard that runs air into drinkable water
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <TextArea
          isDisabled={status === 'submitting'}
          textAreaName="prac01textarea"
          textAreaValue={answer}
          textAreaLabel="Your answer:"
          textAreaPlaceholder="Type your answer..."
          handleChange={handleTextareaChange}
          icon={<FiEdit3 />}
        />
        <FlexBox>
          <Button
            type="submit"
            isDisabled={status === 'empty' || status === 'submitting'}
            caption="Submit"
          />
        </FlexBox>
        {error !== null && (
          <Paragraph warned centered>
            {error.message}
          </Paragraph>
        )}
      </Form>
    </>
  );
};

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default Prac06;
