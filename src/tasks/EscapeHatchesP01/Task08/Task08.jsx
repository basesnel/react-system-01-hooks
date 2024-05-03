import PropTypes from 'prop-types';

import { useRef, forwardRef } from 'react';
import { MdSearch } from 'react-icons/md';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

import css from './Task08.module.css';

const InputWithRef = forwardRef((props, ref) => {
  const { inputType, inputName, inputLabel, inputPlaceholder, icon } = props;

  return (
    <label className={css.field}>
      {inputLabel && <span className={css.label}>{inputLabel}</span>}
      <div className={css['wrap-input']}>
        <input
          type={inputType}
          name={inputName}
          autoComplete="off"
          className={css.input}
          placeholder={inputPlaceholder}
          ref={ref}
        />
        <span className={css.icon}>{icon}</span>
      </div>
    </label>
  );
});

export default function Task08() {
  const inputRef = useRef(null);
  return (
    <FlexBox>
      <InputWithRef
        inputType="text"
        inputName="search"
        inputPlaceholder="Lookung for something?"
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
}

InputWithRef.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  icon: PropTypes.node,
};

InputWithRef.defaultProps = {
  inputLabel: null,
  inputPlaceholder: null,
  icon: null,
};
