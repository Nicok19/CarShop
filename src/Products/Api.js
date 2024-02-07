import React, { useState } from 'react';
import useFetchProducts from '../CustomHooks/GetFetchApi';

const Products = () => {
    const { products, loading, error } = useFetchProducts('https://api.escuelajs.co/api/v1/products');
    const [visibleProducts, setVisibleProducts] = useState(8);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };

    const showLessProducts = () => {
        setVisibleProducts(8);
    };

    // Función para obtener la imagen del producto o la imagen por defecto
    const getProductImage = (product) => {
        return product.images.length > 0 ? product.images[0] : 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?w=1060&t=st=1707338435~exp=1707339035~hmac=c9a76ba72e152f63d705628e31985ce9de655e40ba4eb7ee4db7ecca3e8eef96';
    };

    return (
        <div>
            <div className='containerProducts'>
                {products.slice(0, visibleProducts).map((product) => (
                    <div className='allProducts' key={product.id}>
                        <p className='category'> {product.category.name}</p>
                        {/* Utilizamos la función getProductImage para obtener la imagen */}
                        <img src={getProductImage(product)} alt={product.title} />
                        <div className='product'>
                            <h3>{product.title}</h3>
                        </div>
                        <div className='priceDiv'>
                            <p>{product.price} Usd</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;





