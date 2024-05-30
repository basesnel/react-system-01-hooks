import { useRef, forwardRef } from 'react';

import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';

import { FlexBox, Button } from 'components';

import css from './Task08.module.css';

const InputWithRef = forwardRef((props, ref) => {
  const { inputType, inputName, inputLabel, inputPlaceholder, icon } = props;
  const { field, label, wrapInput, input, iconInput } = css;

  return (
    <label className={field}>
      {inputLabel && <span className={label}>{inputLabel}</span>}
      <div className={wrapInput}>
        <input
          type={inputType}
          name={inputName}
          autoComplete="off"
          className={input}
          placeholder={inputPlaceholder}
          ref={ref}
        />
        <span className={iconInput}>{icon}</span>
      </div>
    </label>
  );
});

const Task08 = () => {
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
};

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

export default Task08;
