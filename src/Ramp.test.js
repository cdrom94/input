import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ramp from './components/Ramp';

test('returns date with falsy input', () => {
  render(<Ramp input={false} />);
  let clock = screen.getByLabelText('clock')
  expect(clock).toBeInTheDocument();

  let date = new Date()
  expect(clock).toHaveTextContent((date.getMonth() + 1) + "/")
  expect(clock).toHaveTextContent("/" + date.getFullYear())
});

test('returns list with array input', () => {
  render(<Ramp input={[1, 2, 3, 4]} />);
  expect(screen.getAllByRole('listitem').length).toBe(4);
});

test('returns string for non-falsy nor array inputs', () => {
  render(<Ramp input="bing bong" />);
  expect(screen.getByLabelText('text')).toMatchInlineSnapshot(`
    <div
      aria-label="text"
      class="text"
    >
      bing bong
    </div>
  `)
});





