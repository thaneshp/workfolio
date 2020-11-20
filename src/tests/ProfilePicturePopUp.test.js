import React from 'react';
import { render } from '@testing-library/react';
import ProfilePicturePopUp from './ProfilePicturePopUp';

test('renders ProfilePicturePopUp', () => {
  const component = render(<ProfilePicturePopUp />);
  expect(component).toMatchSnapshot();
});
