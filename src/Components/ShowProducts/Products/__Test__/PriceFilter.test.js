import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PriceFilter from './PriceFilter';

describe('PriceFilter Component', () => {
  test('should update input values and call applyPriceFilter correctly', () => {
    const applyPriceFilterMock = jest.fn();
    render(<PriceFilter applyPriceFilter={applyPriceFilterMock} />);

    const minPriceInput = screen.getByPlaceholderText('Min Price');
    const maxPriceInput = screen.getByPlaceholderText('Max Price');

    fireEvent.change(minPriceInput, { target: { value: '10' } });
    fireEvent.change(maxPriceInput, { target: { value: '100' } });

    expect(minPriceInput.value).toBe('10');
    expect(maxPriceInput.value).toBe('100');
    expect(applyPriceFilterMock).toHaveBeenCalledWith(10, 100);
  });
});