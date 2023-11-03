import AddToCart from '@/app/components/AddToCart';
import {render, screen} from '@testing-library/react';


describe('AddToCart', () => {
  it('renders a button', () => {
    render(<AddToCart />);
    const button = screen.getByText('Add to Cart');
    expect(button).toBeInTheDocument();
  });
    it('renders a button', () => {
        render(<AddToCart />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});