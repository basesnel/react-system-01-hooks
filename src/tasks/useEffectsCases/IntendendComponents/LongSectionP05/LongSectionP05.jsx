import { List, Item, ItemFlex, ItemText } from 'components';

const LongSectionP05 = () => {
  const items = [];

  for (let i = 0; i < 50; i++) {
    items.push(
      <Item key={i}>
        <ItemFlex>
          <ItemText
            content={`Item #${(i + 1)
              .toString()
              .padStart(2, '0')} (keep scrolling)`}
          />
        </ItemFlex>
      </Item>
    );
  }

  return <List message="No element is in the list...">{items}</List>;
};

export default LongSectionP05;
