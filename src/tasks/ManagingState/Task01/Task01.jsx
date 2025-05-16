import { useState } from 'react';
// import { MiniForm, List, Item, ItemFlex, ItemText } from 'components';
// import { RiAddCircleFill } from 'react-icons/ri';

const Task01 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={!isActive ? 'background background--active' : 'background'}
      onClick={e => {
        if (e.target === e.currentTarget) setIsActive(false);
      }}
    >
      <img
        className={isActive ? 'picture picture--active' : 'picture'}
        alt="Rainbow houses in Kampung Pelengi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpg"
        onClick={e => {
          if (e.target === e.currentTarget) setIsActive(true);
        }}
      />
    </div>
  );
};

export default Task01;
