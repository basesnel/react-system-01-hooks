import HideOverflow from 'components/HideOverflow';
import Box from './Box';

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

function LongSection() {
  const items = [];

  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }

  return <ul>{items}</ul>;
}
