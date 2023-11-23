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

// function LongSection() {
//   const items = [];

//   for (let i = 0; i < 50; i++) {
//     items.push(
//       <Item key={i}>
//         <ItemFlex>
//           <ItemText content="Item #{i} (keep scrolling)" />
//         </ItemFlex>
//       </Item>
//     );
//   }

//   return <List message="No element is in the list...">{items}</List>;
// }
