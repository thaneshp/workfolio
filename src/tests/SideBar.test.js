import React from 'react';
import { render } from '@testing-library/react';
import SideBar from './SideBar';

test('renders side bar', () => {
  const component = render(<SideBar />);
  expect(component).toMatchSnapshot();
});
