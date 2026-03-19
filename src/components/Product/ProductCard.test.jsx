import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    category: 'electronics',
    image: 'test-image.jpg',
  };

  it('renders product information', () => {
    render(<ProductCard product={product} onClick={() => {}} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  it('calls onClick with product when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<ProductCard product={product} onClick={handleClick} />);

    await user.click(screen.getByText('Test Product'));

    expect(handleClick).toHaveBeenCalledWith(product);
  });
});
