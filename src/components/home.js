import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { loaded } from '../redux/airpollutionReducer';
import Continent from './continent';
import Country from './country';

function Home() {
  const continents = useSelector((state) => state.continent.continents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaded());
  }, []);
  const handleClick = (id) => {
    const element = document.getElementById(id);
    const eleArr = element.parentElement.childNodes;
    for (let i = 0; i < eleArr.length; i++) {
      if (eleArr[i].id === id) {
        eleArr[i].children[1].style.height = '100%';
      } else {
        eleArr[i].children[1].style.height = 0;
      }
    }
  };
  return (
    <div className="main-container">
      {continents.map((key) => {
        const idName = uuidv4();
        return (
          <div key={Math.random()} id={idName}>
            <Continent
              name={key.name}
              icon={key.icon}
              event={() => { handleClick(idName); }}
            />
            <div className="country-container" id={key.id}>
              <Country />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
