import { useEffect, useState } from 'react';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                
               
                const productsWithImages = data.map(product => ({
                    ...product,
              
                    images: product.images.length > 0 ? product.images : ['/img/defoultImg'] 
                }));
                
                setProducts(productsWithImages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { products, loading, error };
};

export default useFetchProducts;

