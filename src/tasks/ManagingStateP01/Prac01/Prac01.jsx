import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Button, FlexBox, Form, P, Textarea, Title } from 'components';

const Prac01 = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success')
    return (
      <P centered succeeded>
        That's right!
      </P>
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
      <P>
        In which city is there a billboard that runs air into drinkable water
      </P>
      <Form onSubmit={handleSubmit}>
        <Textarea
          disabled={status === 'submitting'}
          name="textareaP10"
          value={answer}
          label="Your answer:"
          placeholder="Type your answer..."
          onChange={handleTextareaChange}
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
          <P warned centered>
            {error.message}
          </P>
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

export default Prac01;
