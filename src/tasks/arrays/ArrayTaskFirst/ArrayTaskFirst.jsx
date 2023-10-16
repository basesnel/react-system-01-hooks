import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import DecoratedIconButton from 'components/DecoratedIconButton';

import { initialProductsList } from 'constants';
import List from 'components/List';
import ListitemControlled from 'components/ListitemControlled';

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
        <ListitemControlled
          key={product.id}
          content={
            <>
              {product.name} (<b>{product.count}</b>)
            </>
          }
        >
          <DecoratedIconButton
            caption={<RiAddCircleFill />}
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          />
        </ListitemControlled>
      ))}
    </List>
  );
}
