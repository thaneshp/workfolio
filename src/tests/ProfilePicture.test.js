import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePicture from './ProfilePicture';

test('renders ProfilePicture', () => {
  render(<ProfilePicture />);

  let profileImage = screen.getByRole('img');

  expect(profileImage).toHaveAttribute('src');
  expect(profileImage).toHaveAttribute('width');
  expect(profileImage).toHaveAttribute('height');

  const component = render(<ProfilePicture />);
  expect(component).toMatchSnapshot();
});
