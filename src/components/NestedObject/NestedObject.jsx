import { useState } from 'react';

import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import Caption from 'components/Caption';

import css from './NestedObject.module.css';

export default function NestedObject() {
  const [person, setPerson] = useState({
    name: 'Nicky de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const handleNameChange = e => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleTitleChange = e => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };

  const handleCityChange = e => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };

  const handleImageChange = e => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };

  return (
    <>
      <DecoratedForm onSubmit={e => e.preventDefault()}>
        <DecoratedInput
          inputType="text"
          inputName="name"
          inputValue={person.name}
          inputLabel="Name"
          handleChange={handleNameChange}
          icon={<FiUser className={css.icon} />}
        />
        <DecoratedInput
          inputType="text"
          inputName="title"
          inputValue={person.artwork.title}
          inputLabel="Title"
          handleChange={handleTitleChange}
          icon={<FiEdit3 className={css.icon} />}
        />
        <DecoratedInput
          inputType="text"
          inputName="city"
          inputValue={person.artwork.city}
          inputLabel="City"
          handleChange={handleCityChange}
          icon={<FiEdit3 className={css.icon} />}
        />
        <DecoratedInput
          inputType="text"
          inputName="image"
          inputValue={person.artwork.image}
          inputLabel="City"
          handleChange={handleImageChange}
          icon={<FiImage className={css.icon} />}
        />
      </DecoratedForm>
      <Caption
        text={`${person.artwork.title} by ${person.name} (located in ${person.artwork.city})`}
      />
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}