import PropTypes from 'prop-types';

import css from './Caption.module.css';

const Caption = props => {
  const { text } = props;
  const { wrapper } = css;

  return (
    <div className={wrapper}>
      <span>{text}</span>
    </div>
  );
};

Caption.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Caption;
