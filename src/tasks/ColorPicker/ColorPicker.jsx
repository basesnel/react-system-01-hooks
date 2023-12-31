import { useState } from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import FlexBox from 'components/FlexBox';

import css from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeIndexOptionIdx, setActiveIndexOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeIndexOptionIdx
      ? `${css.option} ${css.activeOption}`
      : css.option;
  };

  const { label, color } = options[activeIndexOptionIdx];

  return (
    <div className={css.options}>
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
            onClick={() => setActiveIndexOptionIdx(index)}
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
    })
  ),
};
