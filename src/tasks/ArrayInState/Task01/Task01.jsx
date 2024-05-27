import { useState } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import { List } from 'components';
import { Item } from 'components';
import { ItemText } from 'components';
import { ItemFlex } from 'components';
import { IconButton } from 'components';

import { initialProductsList } from 'constants';

const Task01 = () => {
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
          </ItemFlex>
        </Item>
      ))}
    </List>
  );
};

export default Task01;
