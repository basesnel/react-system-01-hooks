import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';
import { RiIndeterminateCircleFill } from 'react-icons/ri';

import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';
import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialProductsList } from 'constants';

export default function ArrayTaskSecond() {
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
  };

  const handleDecreaseClick = productId => {
    setProducts(
      products
        .map(product => {
          if (product.id === productId) {
            return { ...product, count: product.count - 1 };
          } else {
            return product;
          }
        })
        .filter(product => product.count > 0)
    );
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
              icon={<RiAddCircleFill />}
              caption="add"
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            />
            <DecoratedIconButton
              icon={<RiIndeterminateCircleFill />}
              caption="subtract"
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            />
          </ItemFlex>
        </Item>
      ))}
    </List>
  );
}
