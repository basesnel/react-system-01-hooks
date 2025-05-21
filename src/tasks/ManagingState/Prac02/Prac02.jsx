import { Button, FlexBox, Form, Paragraph, TextArea, Title } from 'components';

const Prac02 = ({ status = 'error' }) => {
  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <Title level={3} caption="city quiz" />
      <Paragraph>
        In which city is there a billboard that runs air into drinkable water
      </Paragraph>
      <Form onSubmit={() => {}}>
        <TextArea isDisabled={status === 'submitting'} />
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

export default Prac02;
