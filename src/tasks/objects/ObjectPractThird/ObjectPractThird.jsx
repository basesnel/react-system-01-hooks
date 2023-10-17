import { useState } from 'react';

import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import Caption from 'components/Caption';

import { initialThirdPerson } from 'constants';

export default function ObjectPractThird() {
  const [person, setPerson] = useState(initialThirdPerson);

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
          icon={<FiUser />}
        />
        <DecoratedInput
          inputType="text"
          inputName="title"
          inputValue={person.artwork.title}
          inputLabel="Title"
          handleChange={handleTitleChange}
          icon={<FiEdit3 />}
        />
        <DecoratedInput
          inputType="text"
          inputName="city"
          inputValue={person.artwork.city}
          inputLabel="City"
          handleChange={handleCityChange}
          icon={<FiEdit3 />}
        />
        <DecoratedInput
          inputType="text"
          inputName="image"
          inputValue={person.artwork.image}
          inputLabel="City"
          handleChange={handleImageChange}
          icon={<FiImage />}
        />
      </DecoratedForm>
      <Caption
        text={`${person.artwork.title} by ${person.name} (located in ${person.artwork.city})`}
      />
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
