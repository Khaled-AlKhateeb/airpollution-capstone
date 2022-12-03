import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loaded, fetchStorage, filterUIstore } from '../redux/airpollutionReducer';
import Continent from './continent';
import Countries from './countries';

function Home() {
  const filteredData = [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.continentAirPollution) {
      dispatch(loaded());
    } else {
      dispatch(fetchStorage());
    }
  }, [dispatch]);
  const continents = useSelector((state) => state.continent.continents);
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

  const filterUI = (aqi) => {
    const newData = JSON.parse(localStorage.getItem('continentAirPollution'));
    newData.map((obj) => {
      const data = obj.data.filter((item) => item.aqi === aqi);
      filteredData.push({ continent: obj.continent, data });
      return filteredData;
    });
    dispatch(filterUIstore(filteredData));
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
          <button type="button" className="km nav-good" onClick={() => { filterUI(1); }}>good</button>
          <button type="button" className="km nav-fair" onClick={() => { filterUI(2); }}>fair</button>
          <button type="button" className="km nav-moderate" onClick={() => { filterUI(3); }}>moderate</button>
          <button type="button" className="km nav-poor" onClick={() => { filterUI(4); }}>poor</button>
          <button type="button" className="km nav-verypoor" onClick={() => { filterUI(5); }}>very poor</button>
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
                  regionName={area.region}
                  aqi={() => renderSwitch(area.aqi)}
                  image={area.flag}
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
