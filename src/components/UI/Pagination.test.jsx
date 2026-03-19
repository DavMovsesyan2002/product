import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders current page and total pages', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPrev={() => {}}
        onNext={() => {}}
      />
    );

    expect(screen.getByText('Page 2 of 5')).toBeInTheDocument();
  });

  it('calls onPrev when previous button is clicked', async () => {
    const user = userEvent.setup();
    const handlePrev = vi.fn();

    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPrev={handlePrev}
        onNext={() => {}}
      />
    );

    await user.click(screen.getByRole('button', { name: /previous/i }));

    expect(handlePrev).toHaveBeenCalled();
  });

  it('calls onNext when next button is clicked', async () => {
    const user = userEvent.setup();
    const handleNext = vi.fn();

    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPrev={() => {}}
        onNext={handleNext}
      />
    );

    await user.click(screen.getByRole('button', { name: /next/i }));

    expect(handleNext).toHaveBeenCalled();
  });
});
