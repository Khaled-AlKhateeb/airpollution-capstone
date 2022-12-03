import { render, screen } from '@testing-library/react';
import Continent from '../components/continent';

const handleClick = (id) => {
  const element = document.getElementById(id);
  const eleArr = element.parentElement.children;
  for (let i = 1; i < eleArr.length; i += 1) {
    if (eleArr[i].children[1].id === `${id}-continent`) {
      if (eleArr[i].children[1].style.display === 'none') {
        eleArr[i].children[1].style.display = 'flex';
      } else {
        eleArr[i].children[1].style.display = 'none';
      }
    } else {
      eleArr[i].children[1].style.display = 'none';
    }
  }
};

test('Continent page should render correctly', () => {
  render(
    <Continent
      name="Africa"
      icon="Africa.png"
      event={() => { handleClick("Africa"); }}
    />
  );
  expect(screen).toMatchSnapshot();
})

