import { useState } from 'react';
import { CheckBox } from 'components';
import { FieldT04 } from '../intendendComponents';

const Task04 = () => {
  const [reverse, setReverse] = useState(false);

  if (reverse) {
    return (
      <>
        <FieldT04 key="lname" label="Last name" name="task04lname" />
        <FieldT04 key="fname" label="First name" name="task04fname" />
        <CheckBox
          name="task04check"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Reverse order"
        />
      </>
    );
  } else {
    return (
      <>
        <FieldT04 key="fname" label="First name" name="task04fname" />
        <FieldT04 key="lname" label="Last name" name="task04lname" />
        <CheckBox
          name="task04check"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Reverse order"
        />
      </>
    );
  }
};

export default Task04;
