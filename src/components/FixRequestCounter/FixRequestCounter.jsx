import { useState } from 'react';
import Caption from 'components/Caption';
import DecoratedButton from 'components/DecoratedButton';
import Grid from 'components/Grid';

export default function FixRequestCounter() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <Caption text={`Pending: ${pending.toString()}`}></Caption>
      <Caption text={`Completed: ${completed.toString()}`}></Caption>
      <Grid>
        <DecoratedButton onClick={handleClick} caption="Buy" />
      </Grid>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
