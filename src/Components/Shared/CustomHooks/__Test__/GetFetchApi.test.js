import { renderHook } from '@testing-library/react-hooks';
import { useFetchProducts } from '../GetFetchApi';

// Mock global fetch so we can control the responses
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Test Product', images: ['https://example.com/img1.jpg'] }]),
  })
);

describe('useFetchProducts custom hook', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    fetch.mockClear();
  });

  it('should initially set loading to true and products to an empty array', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts());

    expect(result.current.loading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();
  });

  it('should fetch products and update state accordingly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts());

    await waitForNextUpdate();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products');
    expect(result.current.products).toEqual([{ id: 1, name: 'Test Product', images: ['https://example.com/img1.jpg'] }]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle fetch error and update error state', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts());

    await waitForNextUpdate();

    expect(result.current.error).not.toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.products).toEqual([]);
  });
});