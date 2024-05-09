import PropTypes from 'prop-types';

import { useState } from 'react';

import Paragraph from 'components/Paragraph';
import FlexBox from 'components/FlexBox';

import css from './ColorPicker.module.css';

export default function ColorPicker(props) {
  const { options } = props;
  const { setOfOptions, option, activeOption } = css;

  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionIdx ? `${option} ${activeOption}` : option;
  };

  const { label, color } = options[activeOptionIdx];

  return (
    <div className={setOfOptions}>
      <Paragraph>
        Color is selected: <span style={{ color: color }}>{label}</span>
      </Paragraph>
      <FlexBox>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </FlexBox>
    </div>
  );
}

ColorPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
