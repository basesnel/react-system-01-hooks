import HideOverflow from 'components/HideOverflow';
import Box from './Box';

import LongSection from '../IntendendComponents/LongSection';

export default function TrackingElementVisibility() {
  return (
    <HideOverflow>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </HideOverflow>
  );
}
