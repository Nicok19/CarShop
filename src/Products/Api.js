import React, { useState, useEffect } from 'react';
import useFetchProducts from '../CustomHooks/GetFetchApi';
import PriceFilter from './PriceFilter';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8); 
    const { products: fetchedProducts, loading, error } = useFetchProducts('https://api.escuelajs.co/api/v1/products');

    useEffect(() => {
        if (!loading && fetchedProducts) {
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        }
    }, [loading, fetchedProducts]);

    const applyPriceFilter = (min, max) => {
        const filtered = products.filter(product => {
            if (min !== '' && product.price < min) return false;
            if (max !== '' && product.price > max) return false;
            return true;
        });
        setFilteredProducts(filtered);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <PriceFilter applyPriceFilter={applyPriceFilter} />
            <div className='containerProducts'>
                {currentProducts.map(product => (
                    <div className='allProducts' key={product.id}>
                        <p className='category'>{product.category.name}</p>
                        {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />} 
                        <div className='product'>
                            <h3>{product.title}</h3>
                        </div>
                        <div className='priceDiv'>
                            <p>{product.price} Usd</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pagination'>
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
                    <button className={currentPage === index + 1 ? 'paginationButton active' : 'paginationButton'} key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;











