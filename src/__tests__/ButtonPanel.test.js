import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

describe('checks if ButtonPannel renders', () => {
  const clickHandler = () => {
    '';
  };

  test('should render', () => {
    const tree = renderer
      .create(<ButtonPanel name="+/-" clickHandler={clickHandler} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
