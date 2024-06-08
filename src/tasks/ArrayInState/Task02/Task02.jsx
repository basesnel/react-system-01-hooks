import { useState } from 'react';
import { RiAddCircleFill, RiIndeterminateCircleFill } from 'react-icons/ri';
import { List, Item, ItemFlex, ItemText, IconButton } from 'components';
import { initialProductsList } from 'constants';

const Task02 = () => {
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
            <IconButton
              icon={<RiAddCircleFill />}
              caption="add"
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            />
            <IconButton
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
};

export default Task02;
