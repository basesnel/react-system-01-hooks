import { useRef } from 'react';
// import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { FlexBox, TextInput, Button } from 'components';

// import styles from './styles.module.css';

// const InputWithRef = forwardRef((props, ref) => {
//   const { type, name, label, placeholder, icon } = props;
//   const { field, caption, wrap, input, pictogram } = styles;

//   return (
//     <label className={field}>
//       {label && <span className={caption}>{label}</span>}
//       <div className={wrap}>
//         <input
//           type={type}
//           name={name}
//           autoComplete="off"
//           className={input}
//           placeholder={placeholder}
//           ref={ref}
//         />
//         <span className={pictogram}>{icon}</span>
//       </div>
//     </label>
//   );
// });

const Task08 = () => {
  const inputRef = useRef(null);

  return (
    <FlexBox wrapped="wrap">
      <TextInput
        name="searchT08"
        placeholder="Lookung for something?"
        icon={<MdSearch />}
        ref={inputRef}
      />
      <Button
        caption="Search"
        onClick={() => {
          inputRef.current.focus();
        }}
      />
    </FlexBox>
  );
};

// InputWithRef.propTypes = {
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   icon: PropTypes.node,
// };

// InputWithRef.defaultProps = {
//   label: null,
//   placeholder: null,
//   icon: null,
// };

export default Task08;
