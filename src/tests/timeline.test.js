import React from 'react';
import { render } from '@testing-library/react';
import Timeline from './timeline';

test('renders Timeline', () => {
  const component = render(<Timeline />);
  expect(component).toMatchSnapshot();
});
