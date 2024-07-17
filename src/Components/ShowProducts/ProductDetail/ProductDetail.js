import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        const foundProduct = data.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === productSlug);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(new Error('Product not found'));
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productSlug]);

  const defaultImage = 'https://i.imgur.com/qZx2cU5.jpg'; 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container'>

    <div className='product__data'>
      <h1 className='product__title' >{product.title}</h1>
      <p className='product__description'>{product.description}</p>
      <p className='product__price'>{product.price} USD</p>

      </div>

      <div className='product__image'> 
      {product.images.length > 0 ? (
        product.images.map((image, index) => (
         
          <img key={index} src={image} alt={product.title} />
        ))
        
      ) : (
        <img src={defaultImage} alt="Default" />
      )}
      </div>

      <a href='/'>
      <button className='product__button'>Back</button>
      </a>


    </div>
  );
};

export default ProductDetail;


