import { render, screen } from '@testing-library/react';
import Home from '../components/home';
import store from '../redux/Store';
import { Provider } from 'react-redux';

test('Home page should render correctly', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(screen).toMatchSnapshot();
})
