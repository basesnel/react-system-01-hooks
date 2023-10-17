import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import List from 'components/List';
import Item from 'components/Item';
import ItemText from 'components/ItemText';
import ItemFlex from 'components/ItemFlex';
import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialProductsList } from 'constants';

export default function ArrayTaskFirst() {
  const [products, setProducts] = useState(initialProductsList);

  const handleIncreaseClick = productId => {
    setProducts(
      products.map(product => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      })
    );
    // const newProducts = products.map(product => {
    //   if (product.id === productId) {
    //     return { ...product, count: product.count + 1 };
    //   } else {
    //     return product;
    //   }
    // });
    // setProducts(newProducts);
  };

  return (
    <List message="There is no elements in list.">
      {products.map(product => (
        <Item key={product.id}>
          <ItemFlex>
            <ItemText
              content={
                <>
                  {product.name} (<b>{product.count}</b>)
                </>
              }
            />
            <DecoratedIconButton
              caption={<RiAddCircleFill />}
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            />
          </ItemFlex>
        </Item>
      ))}
    </List>
  );
}
