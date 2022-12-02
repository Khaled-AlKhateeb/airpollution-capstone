import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loaded, fetchStorage } from '../redux/airpollutionReducer';
import Continent from './continent';
import Countries from './countries';
import Country from './country';

function Home() {
  const dispatch = useDispatch();
  if (!localStorage.continentAirPollution) {
    dispatch(loaded());
  } else {
    dispatch(fetchStorage());
  }
  const continents = useSelector((state) => state.continent.continents);
  const handleClick = (name) => {
    const element = document.getElementById(name);
    const eleArr = element.parentElement.children;
    for (let i = 1; i < eleArr.length; i += 1) {
      if (eleArr[i].children[1].id === `${name}-continent`) {
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

  const handleItem = (id) => {
    const ele = document.getElementById(id);
    const root = document.getElementById('root');
    ele.style.visibility = 'visible';
    root.style.height = '100vh';
    root.style.overflow = 'hidden';
  };

  const closeItem = (id) => {
    const ele = document.getElementById(id);
    const root = document.getElementById('root');
    ele.style.visibility = 'hidden';
    root.style.height = 'auto';
    root.style.overflow = 'visible';
  };

  const renderSwitch = (param) => {
    switch (param) {
      case 1:
        return 'good';
      case 2:
        return 'fair';
      case 3:
        return 'moderate';
      case 4:
        return 'poor';
      case 5:
        return 'verypoor';
      default:
        return param;
    }
  };

  return (
    <div className="main-container">
      <div className="nav-continer">
        <h1 className="nav-title">Air Pollution App</h1>
        <div className="key-map">
          <div className="km good">good</div>
          <div className="km fair">fair</div>
          <div className="km moderate">moderate</div>
          <div className="km poor">poor</div>
          <div className="km verypoor">verypoor</div>
        </div>
      </div>
      {continents.map((con) => (
        <div key={Math.random()} id={con.continent}>
          <div className="continent-container">
            <Continent
              name={con.continent}
              icon={con.continent}
              event={() => { handleClick(con.continent); }}
            />
          </div>
          <div className="countries-container" id={`${con.continent}-continent`}>
            {con.data.map((area) => (
              <div key={Math.random()}>
                <Countries
                  countryName={area.name}
                  aqi={() => renderSwitch(area.aqi)}
                  onclick={() => { handleItem(area.id); }}
                />
                <Country
                  countryName={area.name}
                  id={area.id}
                  close={() => { closeItem(area.id); }}
                  co={area.components.co}
                  no={area.components.no}
                  no2={area.components.no2}
                  o3={area.components.o3}
                  so2={area.components.so2}
                  pm2={area.components.pm2_5}
                  pm10={area.components.pm10}
                  nh3={area.components.nh3}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
