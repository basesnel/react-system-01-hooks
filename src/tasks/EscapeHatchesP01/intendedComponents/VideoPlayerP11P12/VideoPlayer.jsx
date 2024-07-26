import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = props => {
  const { src, isPlaying } = props;

  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  });

  return <video ref={playerRef} width="250" src={src} loop playsInline />;
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
