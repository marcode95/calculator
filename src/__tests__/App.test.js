import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect';

describe('checks if app renders', () => {
  test('should render', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should receive right number', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('0'));

    expect(screen.getByText('6')).toBeInTheDocument();
  });

  test('should show the right number', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const btn = screen.getByText('3');
    expect(btn).toBeInTheDocument();
  });
});