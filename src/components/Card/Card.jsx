import PropTypes from 'prop-types';

import { Title } from 'components';

import css from './Card.module.css';

const Card = props => {
  const { title, children } = props;
  const { card, cardHeader, cardContent } = css;

  return (
    <div className={card}>
      <div className={cardHeader}>
        <Title level={2} caption={title} />
      </div>
      <div className={cardContent}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;
