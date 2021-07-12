import renderer from 'react-test-renderer';
import Route from '../components/routes';
import Quote from '../routes/quote';
import MainPage from '../routes/mainpage';
import App from '../components/App';

describe('checks if routes are working', () => {
  test('should render to mainpage', () => {
    const tree = renderer
      .create(<Route path="/" component={MainPage} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render app with calculator', () => {
    const tree = renderer
      .create(<Route path="/calculator" component={App} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render quote of the day page', () => {
    const tree = renderer
      .create(<Route path="/calculator" component={Quote} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
