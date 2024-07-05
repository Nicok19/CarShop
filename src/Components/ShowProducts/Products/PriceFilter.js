import React, { useState, useEffect } from 'react';

const PriceFilter = ({ applyPriceFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        const min = parseFloat(minPrice) || 0; 
        const max = parseFloat(maxPrice) || Infinity; 
        applyPriceFilter(min, max);
    }, [minPrice, maxPrice]); 

    return (
        <div className='priceFilter'>
            <div className='filter'>
                <input id='minPrice' type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                <input id='maxPrice' type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
        </div>
    );
};

export default PriceFilter;
