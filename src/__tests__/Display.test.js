import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Display from '../components/Display';
import '@testing-library/jest-dom/extend-expect';

describe('checks if Display renders', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render right value', () => {
    const total = '23';

    render(<Display total={total} />);
    const text = screen.getByText('23');
    expect(text).toBeInTheDocument();
  });
});