import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loaded, fetchStorage } from '../redux/airpollutionReducer';
import Continent from './continent';
import Countries from './countries';
import Country from './country';

function Home() {
  const continents = useSelector((state) => state.continent.continents);
  const dispatch = useDispatch();
  if (!localStorage.continentAirPollution) {
    dispatch(loaded());
  } else {
    dispatch(fetchStorage());
  }

  const handleClick = (e, name) => {
    console.log(e.target);
    const element = document.getElementById(name);
    const eleArr = element.parentElement.children;
    for (let i = 0; i < eleArr.length; i += 1) {
      if (eleArr[i].id === name) {
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

  const handleItem = () => {

  }

  if (continents === undefined) {
    return;
  }
  const good = 'country-good';
  const fair = 'country-fair';
  const moderate = 'country-moderate';
  const poor = 'country-poor';
  const verypoor = 'country-verypoor';
  return (
    <div className="main-container">
      {continents.map((con) => (
        <div key={Math.random()} id={con.continent}>
          <div className="continent-container">
            <Continent
              name={con.continent}
              icon={con.continent}
              event={(e) => { handleClick(e, con.continent); }}
            />
          </div>
          <div className="countries-container">
            {con.data.map((area) => (
              <div key={Math.random()}>
                <Countries
                  countryName={area.name}
                  aqi={area.aqi === 1 ? good
                    : area.aqi === 2 ? fair
                      : area.aqi === 3 ? moderate
                        : area.aqi === 4 ? poor
                          : verypoor}
                  onclick={() => {handleItem()}}
                />
                <Country
                  countryName={area.name}
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
