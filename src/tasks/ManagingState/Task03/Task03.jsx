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
    // let helloText = document.getElementById('helloText');
    form.onsubmit = handleFormSubmit;
    firstNameInput.oninput = handleFirstNameChange;
    lastNameInput.oninput = handleLastNameChange;
  }, []);

  return (
    <form id="form">
      <label>
        First name:
        <b id="firstNameText">Jane</b>
        <input
          id="firstNameInput"
          value="Jane"
          style={{ display: 'none' }}
          onChange={() => {}}
        />
      </label>
      <label>
        Last name:
        <b id="lastNameText">Jacobs</b>
        <input
          id="lastNameInput"
          value="Jacobs"
          style={{ display: 'none' }}
          onChange={() => {}}
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
