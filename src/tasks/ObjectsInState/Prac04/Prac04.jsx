import { useImmer } from 'use-immer';
import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';
import { Form, Input } from 'components';
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
        <FieldOverlayP03P04>
          <Input
            inputType="text"
            inputName="image"
            inputValue={person.artwork.image}
            inputLabel="Photo"
            handleChange={handleImageChange}
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
