import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/home';
import store from '../redux/Store';

test('Home page should render correctly', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  expect(screen).toMatchSnapshot();
});
