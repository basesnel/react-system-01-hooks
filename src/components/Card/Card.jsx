import PropTypes from 'prop-types';

import Title from 'components/Title';

import css from './Card.module.css';

export default function Card({ title, children }) {
  return (
    <div className={css.card}>
      <div className={css['card-header']}>
        <Title level={2} caption={title} />
        {/* <h2 className={css['card-title']}>{title}</h2> */}
      </div>
      <div className={css['card-content']}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
