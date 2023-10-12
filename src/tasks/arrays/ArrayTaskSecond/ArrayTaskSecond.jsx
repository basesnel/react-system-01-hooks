import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';
import { RiIndeterminateCircleFill } from 'react-icons/ri';

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
    // const newProducts = products.map(product => {
    //   if (product.id === productId) {
    //     return { ...product, count: product.count + 1 };
    //   } else {
    //     return product;
    //   }
    // });
    // setProducts(newProducts);
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
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <DecoratedIconButton
            caption={<RiAddCircleFill />}
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          />
          <DecoratedIconButton
            caption={<RiIndeterminateCircleFill />}
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
