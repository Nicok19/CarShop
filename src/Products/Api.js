import React from 'react';
import useFetchProducts from '../CustomHooks/GetFetchApi';

const Products = () => {
    const { products, loading, error } = useFetchProducts('https://api.escuelajs.co/api/v1/products');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.images[0]} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.category.name}</p>
                    <p>{product.id}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;


