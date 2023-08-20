import { useState } from 'react';

import { Text } from 'components/Text/Text';
import { Grid } from 'components/Grid/Grid';

import css from './ColorPicker.module.css';

export const ColorPicker = ({ options }) => {
  const [activeIndexOptionIdx, setActiveIndexOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeIndexOptionIdx
      ? `${css.option} ${css.activeOption}`
      : css.option;
  };

  const { label, color } = options[activeIndexOptionIdx];

  return (
    <div className={css.options}>
      <Text>
        Color is selected: <span style={{ color: color }}>{label}</span>
      </Text>
      <Grid>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIndexOptionIdx(index)}
          ></button>
        ))}
      </Grid>
    </div>
  );
};
