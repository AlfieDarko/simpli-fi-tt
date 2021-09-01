import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Button from './button';
import React from 'react';

test('renders a primary button', () => {
  const { container, getByText } = render(<Button text="mint" status="primary" dataId="test" />);
  expect(getByText('mint')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
<button
  class="styled__StyledButton-sc-1l1vew0-0 kefRxk"
  data-id="primary-btn-test"
  role="button"
>
  mint
</button>
`);
});

test('renders a secondary button', () => {
  const { container, getByText } = render(<Button text="deploy" status="secondary" dataId="test" />);
  expect(getByText('deploy')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
<button
  class="styled__StyledButton-sc-1l1vew0-0 mQBKz"
  data-id="secondary-btn-test"
  role="button"
>
  deploy
</button>
`);
});

test('renders a danger button', () => {
  const { container, getByText } = render(<Button text="cancel" status="danger" dataId="test" />);
  expect(getByText('cancel')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
<button
  class="styled__StyledButton-sc-1l1vew0-0 ccSQjg"
  data-id="danger-btn-test"
  role="button"
>
  cancel
</button>
`);
});
