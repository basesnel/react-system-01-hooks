import PropTypes from 'prop-types';
import { mainContext } from 'contexts';

const Main = props => {
  const { children } = props;

  return (
    <main>
      <mainContext.Provider value={true}>{children}</mainContext.Provider>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
