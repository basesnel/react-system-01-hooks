import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

export default function LongSection() {
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
}
