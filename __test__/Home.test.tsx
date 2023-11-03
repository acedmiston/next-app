import {render, screen} from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByText('Hello World');
    expect(heading).toBeInTheDocument();
  });
  it('renders a link to users', () => {
    render(<Home />);
    const link = screen.getByText('Users');
    expect(link).toBeInTheDocument();
    });
    it('renders a product card', () => {
    render(<Home />);
    const productCard = screen.getByTestId('product-card');
    expect(productCard).toBeInTheDocument();
    });
});