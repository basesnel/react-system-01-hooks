import { useImmer } from 'use-immer';

import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import Caption from 'components/Caption';

import { initialThirdPerson } from 'constants';

export default function ObjectPractFourth() {
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
