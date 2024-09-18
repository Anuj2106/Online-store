import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Bredcrum/Bredcrum';
import Productdisplay from '../Components/productdisplay/Productdisplay';
import Description from '../Components/Description/Description';
import Related from '../Components/Relatedproduct/Related';

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product?.find((e) => e.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div>
        <Breadcrum product={product} />
        <Productdisplay product={product}/>
        <Description/>
        <Related/>
      </div>
    </>
  );
}

export default Products;
