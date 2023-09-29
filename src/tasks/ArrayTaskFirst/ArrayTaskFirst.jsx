import DecoratedButton from 'components/DecoratedButton';
import { useState } from 'react';

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
];

export default function ArrayTaskFirst() {
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
        </li>
      ))}
    </ul>
  );
}
