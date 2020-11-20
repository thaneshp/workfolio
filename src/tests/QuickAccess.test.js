import React from 'react';
import { render } from '@testing-library/react';
import QuickAccess from './QuickAccess';

test('renders QuickAccess', () => {
  const component = render(<QuickAccess />);
  expect(component).toMatchSnapshot();
});
