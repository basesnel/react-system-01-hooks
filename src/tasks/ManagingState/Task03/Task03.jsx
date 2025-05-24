import { useEffect, useRef } from 'react';

// import styles from './styles.module.css';

const Task03 = () => {
  let firstName = useRef('Jane');
  let lastName = useRef('Jacobs');
  let isEditing = useRef(false);

  useEffect(() => {
    const handleFormSubmit = e => {
      e.preventDefault();
      setIsEditing(!isEditing.current);

      // formData.forEach((value, name) => console.log(`${name}: ${value}`));
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
      formData.set('firstName', firstName.current);
      formData.set('lastName', lastName.current);
      helloText.textContent = `Hello, ${firstName.current} ${lastName.current}!`;
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
    helloText.textContent = `Hello, ${firstName.current} ${lastName.current}!`;

    const formData = new FormData(form);
  }, []);

  return (
    <form id="form">
      <label>
        First name:
        <b id="firstNameText">{firstName.current}</b>
        {/* <input
          id="firstNameInput"
          value="Jane"
          style={{ display: 'none' }}
          onChange={() => {}}
        /> */}
        <input
          id="firstNameInput"
          style={{ display: 'none' }}
          name="firstName"
          placeholder="Type first name..."
        />
      </label>
      <label>
        Last name:
        <b id="lastNameText">{lastName.current}</b>
        {/* <input
          id="lastNameInput"
          value="Jacobs"
          style={{ display: 'none' }}
          onChange={() => {}}
        /> */}
        <input
          id="lastNameInput"
          style={{ display: 'none' }}
          name="lastName"
          placeholder="Type last name..."
        />
      </label>
      <button type="submit" id="editButton">
        Edit Profile
      </button>
      <p>
        <i id="helloText">Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
};

export default Task03;
