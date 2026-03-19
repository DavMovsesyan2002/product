import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductModal from './ProductModal';

describe('ProductModal', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    category: 'electronics',
    image: 'test-image.jpg',
  };

  it('does not render when product is null', () => {
    const { container } = render(
      <ProductModal product={null} onClose={() => {}} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('renders product details', () => {
    render(<ProductModal product={product} onClose={() => {}} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText(/electronics/i)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(<ProductModal product={product} onClose={handleClose} />);

    await user.click(screen.getByRole('button'));

    expect(handleClose).toHaveBeenCalled();
  });
});
