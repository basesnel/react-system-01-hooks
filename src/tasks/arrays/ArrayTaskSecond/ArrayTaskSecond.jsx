import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

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
          <DecoratedButton
            caption="+"
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          />
          <DecoratedButton
            caption="-"
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
