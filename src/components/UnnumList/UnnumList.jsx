import PropTypes from 'prop-types';
import List from 'components/List';
import Listitem from 'components/Listitem';

import css from './UnnumList.module.css';

export default function UnnumList({ list }) {
  return (
    <List className={css.list}>
      {list.map((item, idx) => (
        <Listitem key={idx} content={item} />
      ))}
    </List>
  );
}

UnnumList.propTypes = {
  list: PropTypes.array,
};
