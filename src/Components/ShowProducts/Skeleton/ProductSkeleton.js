import React from 'react';
import './ProductSkeleton.css';

const ProductSkeleton = () => (
  <div className='skeletonProduct'>
    <div className='categorySkeleton'></div>
    <div className='imageSkeleton'></div>
    <div className='productSkeleton'>
      <h3 className='skeleton'></h3>
    </div>
    <div className='priceDivSkeleton'></div>
  </div>
);

export default ProductSkeleton;

