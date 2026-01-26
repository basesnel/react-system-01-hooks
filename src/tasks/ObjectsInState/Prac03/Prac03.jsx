import { useState } from 'react';
import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';
import { Form, TextInput } from 'components';
import { initialThirdPerson } from 'constants';
import { FieldOverlayP03P04, FigureP03P04 } from '../IntendendComponents';

const Prac03 = () => {
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
      <Form onSubmit={e => e.preventDefault()}>
        <TextInput
          type="text"
          name="name"
          value={person.name}
          label="Name"
          placeholder="Type a person's name..."
          onChange={handleNameChange}
          icon={<FiUser />}
        />
        <TextInput
          type="text"
          name="title"
          value={person.artwork.title}
          placeholder="Type the artwork's title"
          onChange={handleTitleChange}
          icon={<FiEdit3 />}
        />
        <TextInput
          type="text"
          name="city"
          value={person.artwork.city}
          placeholder="Type the artwork's city"
          onChange={handleCityChange}
          icon={<FiEdit3 />}
        />
        <FieldOverlayP03P04>
          <TextInput
            type="text"
            name="image"
            value={person.artwork.image}
            label="Photo"
            placeholder="Choose the artwork's photo"
            onChange={handleImageChange}
            icon={<FiImage />}
          />
        </FieldOverlayP03P04>
        <FigureP03P04
          picture={person.artwork.image}
          alt={person.artwork.title}
          caption={`${person.artwork.title} by ${person.name} (located in ${person.artwork.city})`}
        />
      </Form>
    </>
  );
};

export default Prac03;
