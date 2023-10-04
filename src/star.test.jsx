import React from 'react';
import { render } from '@testing-library/react';
import { Star } from './star';

test('renders an h1', () => {
  const {
    getByText,
  } = render(<Star />);
  const h1 = getByText(/Cool Star/).textContent;
  expect(h1).toBe('Cool Star');
});
