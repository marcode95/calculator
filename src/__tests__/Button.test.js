import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom/extend-expect';

describe('checks if Button renders', () => {
  const clickHandler = () => {
    '';
  };

  test('should render', () => {
    const tree = renderer
      .create(<Button
        buttonName=""
        wide={false}
        color={false}
        clickHandler={clickHandler}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display right value', () => {
    render(<Button
      buttonName="+"
      wide
      color={false}
      clickHandler={clickHandler}
    />);
    const result = screen.getByText('+');

    expect(result).toBeInTheDocument();
  });
});
