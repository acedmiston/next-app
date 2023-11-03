import React from 'react';

interface ProductPageProps {
    params: {
        slug: string[];
    };
    searchParams: {
      sortOrder: string;
    };
}

function ProductPage({params: {slug}, searchParams: {sortOrder}}: ProductPageProps) {
  return (
    <div>Products Page {slug} {sortOrder}</div>
  )
}

export default ProductPage;