import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const Shopcatigorie = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter items based on category
  const filteredItems = all_product.filter(item => item.category === props.category);

  return (
    <section className='shop-category'>
      <div className="container-fluid">
        <div className="row">
          <img src={props.banner} className='img-fluid' style={{height:"25rem"}} alt="" />
        </div>
        <div className="row ">
         

      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          newPrize={item.newPrice}
          oldPrize={item.oldPrice}
          description={item.description}
          className="mx-auto"
          />
        ))
      ) : (
        <p>No items found in this category.</p>
      )}
      </div>
    </div>
    </section>
  );
};

export default Shopcatigorie;
