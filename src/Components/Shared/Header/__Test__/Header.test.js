import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header'; 

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByAltText('Carshop Elements')).toBeInTheDocument();
  });

  test('loads images with correct URLs', () => {
    render(<Header />);
    expect(screen.getByAltText('Carshop Elements').src).toBe('https://imgur.com/IPY5MTo.png');
    expect(screen.getByAltText('Carshop Elements', { selector: 'div > img' }).src).toBe('https://imgur.com/S2vh5Dd.png');
  });

  test('menu opens and closes based on menuOpen state', () => {
    const { rerender } = render(<Header menuOpen={false} />);
    expect(screen.getByRole('navigation')).not.toHaveClass('open');
    rerender(<Header menuOpen={true} />);
    expect(screen.getByRole('navigation')).toHaveClass('open');
  });

  test('login button is visible', () => {
    render(<Header />);
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  test('mobile content is conditionally rendered', () => {
    const { rerender } = render(<Header isMobile={false} />);
    expect(screen.queryByText('Mobile Content')).not.toBeInTheDocument(); // Asumiendo que 'Mobile Content' es parte del contenido condicional
    rerender(<Header isMobile={true} />);
    expect(screen.getByText('Mobile Content')).toBeInTheDocument();
  });
});