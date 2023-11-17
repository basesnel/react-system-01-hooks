import PropTypes from 'prop-types';

import DecoratedButton from 'components/DecoratedButton';

import css from './DecoratedSubmit.module.css';

export default function DecoratedSubmit({ caption, isDisabled }) {
  return (
    <div className={css.aligner}>
      <DecoratedButton
        type="submit"
        caption={caption}
        isDisabled={isDisabled}
      />
    </div>
  );
}

DecoratedSubmit.propTypes = {
  caption: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
