import { render, screen } from '@testing-library/react';
import Header from './Header.js';

test('header should render buttons', () => {
  render(<Header />);
  screen.getByText('login');
});
