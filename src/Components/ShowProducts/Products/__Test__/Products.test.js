import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Products from './Products';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('displays loading state initially', async () => {
  fetch.mockResponseOnce(JSON.stringify([]));
  render(<Products />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('handles API error', async () => {
  fetch.mockReject(() => Promise.reject('API failure'));
  render(<Products />);
  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});

test('renders product list on successful API call', async () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      category: { name: 'Category 1' },
      price: 100,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    },
    {
      id: 2,
      title: 'Product 2',
      category: { name: 'Category 2' },
      price: 200,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    }
  ];
  fetch.mockResponseOnce(JSON.stringify(mockProducts));
  render(<Products />);
  expect(await screen.findByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
  expect(screen.getByText('100 Usd')).toBeInTheDocument();
  expect(screen.getByText('200 Usd')).toBeInTheDocument();
});

test('filters products by search term', async () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      category: { name: 'Category 1' },
      price: 100,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    },
    {
      id: 2,
      title: 'Product 2',
      category: { name: 'Category 2' },
      price: 200,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    }
  ];
  fetch.mockResponseOnce(JSON.stringify(mockProducts));
  render(<Products />);
  expect(await screen.findByText('Product 1')).toBeInTheDocument();
  fireEvent.change(screen.getByPlaceholderText(/search by products/i), { target: { value: 'Product 1' } });
  expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
});

test('filters products by category', async () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      category: { name: 'Category 1' },
      price: 100,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    },
    {
      id: 2,
      title: 'Product 2',
      category: { name: 'Category 2' },
      price: 200,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    }
  ];
  fetch.mockResponseOnce(JSON.stringify(mockProducts));
  render(<Products />);
  expect(await screen.findByText('Product 1')).toBeInTheDocument();
  fireEvent.change(screen.getByDisplayValue(/all categories/i), { target: { value: 'Category 1' } });
  expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
});

test('updates product list on window resize', async () => {
  const mockProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    category: { name: `Category ${i % 5}` },
    price: (i + 1) * 10,
    images: ['https://i.imgur.com/qZx2cU5.jpg']
  }));
  fetch.mockResponseOnce(JSON.stringify(mockProducts));
  render(<Products />);
  expect(await screen.findByText('Product 1')).toBeInTheDocument();

  global.innerWidth = 1450;
  fireEvent(window, new Event('resize'));
  expect(screen.queryByText('Product 7')).not.toBeInTheDocument();
});

test('applies price filter correctly', async () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      category: { name: 'Category 1' },
      price: 100,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    },
    {
      id: 2,
      title: 'Product 2',
      category: { name: 'Category 2' },
      price: 200,
      images: ['https://i.imgur.com/qZx2cU5.jpg']
    }
  ];
  fetch.mockResponseOnce(JSON.stringify(mockProducts));
  render(<Products />);
  expect(await screen.findByText('Product 1')).toBeInTheDocument();
  fireEvent.change(screen.getByPlaceholderText(/minimum price/i), { target: { value: '150' } });
  fireEvent.change(screen.getByPlaceholderText(/maximum price/i), { target: { value: '250' } });
  expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
