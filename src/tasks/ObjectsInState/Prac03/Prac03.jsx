import { useState } from 'react';

import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import Input from 'components/Input';
import DecoratedFigure from '../IntendendComponents/DecoratedFigure';

import { initialThirdPerson } from 'constants';
import FieldOverlay from '../IntendendComponents/FieldOverlay';

export default function Prac03() {
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
        <Input
          inputType="text"
          inputName="name"
          inputValue={person.name}
          inputLabel="Name"
          handleChange={handleNameChange}
          icon={<FiUser />}
        />
        <Input
          inputType="text"
          inputName="title"
          inputValue={person.artwork.title}
          inputLabel="Title"
          handleChange={handleTitleChange}
          icon={<FiEdit3 />}
        />
        <Input
          inputType="text"
          inputName="city"
          inputValue={person.artwork.city}
          inputLabel="City"
          handleChange={handleCityChange}
          icon={<FiEdit3 />}
        />
        <FieldOverlay>
          <Input
            inputType="text"
            inputName="image"
            inputValue={person.artwork.image}
            inputLabel="Photo"
            handleChange={handleImageChange}
            icon={<FiImage />}
          />
        </FieldOverlay>
        <DecoratedFigure
          picture={person.artwork.image}
          alt={person.artwork.title}
          caption={`${person.artwork.title} by ${person.name} (located in ${person.artwork.city})`}
        />
      </DecoratedForm>
    </>
  );
}