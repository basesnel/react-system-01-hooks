import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
];

export default function ArrayTaskSecond() {
  const [products, setProducts] = useState(initialProducts);

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
