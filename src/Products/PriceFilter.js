import React, { useState } from 'react';

const PriceFilter = ({ applyPriceFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleApplyFilter = () => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        applyPriceFilter(min, max);
    };

    return (
        <div className='priceFilter'>

        <div className='textProducts'>
        <h2>Our Products</h2>
        </div>

        <div className='filter'>
            <input id='price' type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input  id='price' type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <button className='apply' onClick={handleApplyFilter}>Apply</button>
            </div>
        </div>
    );
};

export default PriceFilter;


