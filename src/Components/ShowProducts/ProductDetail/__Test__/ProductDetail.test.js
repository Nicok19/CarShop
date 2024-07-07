import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

beforeEach(() => {
  fetch.resetMocks();
  useParams.mockReturnValue({ productSlug: 'test-product' });
});

test('displays loading state initially', () => {
  fetch.mockResponseOnce(JSON.stringify([]));
  render(<ProductDetail />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('handles API error', async () => {
  fetch.mockReject(() => Promise.reject('API failure'));
  render(<ProductDetail />);
  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});

test('renders product details on successful API call', async () => {
  const mockProduct = {
    title: 'Test Product',
    description: 'This is a test product',
  };
  fetch.mockResponseOnce(JSON.stringify([mockProduct]));
  render(<ProductDetail />);
  expect(await screen.findByText(mockProduct.title)).toBeInTheDocument();
  expect(await screen.findByText(mockProduct.description)).toBeInTheDocument();
});
