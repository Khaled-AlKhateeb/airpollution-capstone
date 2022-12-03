import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Countries from '../components/countries';

test('Home page should render correctly', () => {
  render(
    <BrowserRouter>
      <Countries
        countryName="Algeria"
        regionName="Africa"
        aqi={() => 'good'}
        image="https://flagcdn.com/w320/dz.png"
      />
    </BrowserRouter>,
  );
  expect(screen).toMatchSnapshot();
});
