import { useEffect, useRef } from 'react';
import { Form, Paragraph, FlexBox, Button, Span } from 'components';

import styles from './styles.module.css';

const Task03 = () => {
  let firstName = useRef('Jane');
  let lastName = useRef('Jacobs');
  let isEditing = useRef(false);

  useEffect(() => {
    const handleFormSubmit = e => {
      e.preventDefault();
      setIsEditing(!isEditing.current);
    };

    const handleFirstNameChange = e => {
      setFirstName(e.target.value);
    };

    const handleLastNameChange = e => {
      setLastName(e.target.value);
    };

    const setFirstName = value => {
      firstName.current = value;
      updateDOM();
    };

    const setLastName = value => {
      lastName.current = value;
      updateDOM();
    };

    const setIsEditing = value => {
      isEditing.current = value;
      updateDOM();
    };

    const updateDOM = () => {
      if (isEditing.current) {
        editButton.textContent = 'Save profile';
        hide(firstNameText);
        hide(lastNameText);
        show(firstNameInput);
        show(lastNameInput);
      } else {
        editButton.textContent = 'Edit profile';
        hide(firstNameInput);
        hide(lastNameInput);
        show(firstNameText);
        show(lastNameText);
      }
      helloText.textContent = `${firstName.current} ${lastName.current}`;
      firstNameText.textContent = firstName.current;
      lastNameText.textContent = lastName.current;
    };

    function hide(el) {
      el.style.display = 'none';
    }

    function show(el) {
      el.style.display = '';
    }

    let form = document.getElementById('form');
    let editButton = document.getElementById('editButton');
    let firstNameInput = document.getElementById('firstNameInput');
    let firstNameText = document.getElementById('firstNameText');
    let lastNameInput = document.getElementById('lastNameInput');
    let lastNameText = document.getElementById('lastNameText');
    let helloText = document.getElementById('helloText');

    form.onsubmit = handleFormSubmit;
    firstNameInput.value = firstName.current;
    firstNameInput.oninput = handleFirstNameChange;
    lastNameInput.value = lastName.current;
    lastNameInput.oninput = handleLastNameChange;
    helloText.textContent = `${firstName.current} ${lastName.current}`;
  }, []);

  return (
    <Form id="form" onSubmit={() => {}}>
      <label className={styles.label}>
        <span className={styles.span}>First name:</span>
        <b className={styles.b} id="firstNameText">
          {firstName.current}
        </b>
        <input
          id="firstNameInput"
          style={{ display: 'none' }}
          className={styles.input}
          name="firstName"
          size={10}
          placeholder="Type first name..."
        />
      </label>
      <label className={styles.label}>
        <span className={styles.span}>Last name:</span>
        <b className={styles.b} id="lastNameText">
          {lastName.current}
        </b>
        <input
          id="lastNameInput"
          style={{ display: 'none' }}
          className={styles.input}
          name="lastName"
          size={10}
          placeholder="Type last name..."
        />
      </label>
      <FlexBox>
        <Button id="editButton" type="submit" caption="Edit Profile" />
      </FlexBox>
      <Paragraph centered>
        Hello,{' '}
        <Span id="helloText" weighted>
          Jane Jacobs
        </Span>
        !
      </Paragraph>
    </Form>
  );
};

export default Task03;
