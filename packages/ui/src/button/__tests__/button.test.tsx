import { render } from '@testing-library/react';
import Button from '../';

test('it should render', () => {
  const { container } = render(<Button>Test</Button>);
  expect(container).not.toBeEmptyDOMElement();
});