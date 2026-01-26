import { useImmer } from 'use-immer';
import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';
import { Form, TextInput } from 'components';
import { initialThirdPerson } from 'constants';
import { FieldOverlayP03P04, FigureP03P04 } from '../IntendendComponents';

const Prac04 = () => {
  const [person, updatePerson] = useImmer(initialThirdPerson);

  const handleNameChange = e => {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  };

  const handleTitleChange = e => {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  };

  const handleCityChange = e => {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  };

  const handleImageChange = e => {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
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
          label="Title"
          placeholder="Type the artwork's title"
          onChange={handleTitleChange}
          icon={<FiEdit3 />}
        />
        <TextInput
          type="text"
          name="city"
          value={person.artwork.city}
          label="City"
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

export default Prac04;
