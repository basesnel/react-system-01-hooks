import { useState } from 'react';
// import { MiniForm, List, Item, ItemFlex, ItemText } from 'components';
// import { RiAddCircleFill } from 'react-icons/ri';

const Task01 = () => {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelengi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpg"
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  );
};

export default Task01;
