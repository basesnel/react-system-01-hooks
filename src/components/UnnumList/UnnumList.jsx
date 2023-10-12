import PropTypes from 'prop-types';

import css from './UnnumList.module.css';

export default function UnnumList({ list }) {
  return (
    <ul className={css.list}>
      {list.map((item, idx) => (
        <li key={idx} className={css.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

UnnumList.propTypes = {
  list: PropTypes.array,
};
