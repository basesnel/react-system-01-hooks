import { useImmer } from 'use-immer';

import { FiUser, FiEdit3, FiImage } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import Caption from 'components/Caption';

import css from './NestedObjectByImmer.module.css';

export default function NestedObjectByImmer() {
  const [person, updatePerson] = useImmer({
    name: 'Nicky de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

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