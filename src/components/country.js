import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Country = () => {
  const name = useParams();
  const data = useSelector((state) => state.continent.continents);
  const continent = data.filter((continent) => continent.continent === name.continent);
  const country = continent[0].data.filter((item) => item.name === name.name);
  const navigate = useNavigate();
  return (
    <div className="info-country" id={country[0].id}>
      <button type="button" className="close-btn" onClick={() => navigate(-1)}>&#x3c;</button>
      <div className="flag-container">
        <h1 className="country-name">{country[0].name}</h1>
        <img className="country-image" src={country[0].flag} alt={country[0].name} />
      </div>
      <div className="components">
        <p className="component">
          CO:&nbsp;
          {country[0].components.co}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          NO:&nbsp;
          {country[0].components.no}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          NO2:&nbsp;
          {country[0].components.no2}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          O3:&nbsp;
          {country[0].components.o3}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          SO2:&nbsp;
          {country[0].components.so2}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          PM2_5:&nbsp;
          {country[0].components.pm2_5}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          PM10:&nbsp;
          {country[0].components.pm10}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          NH3:&nbsp;
          {country[0].components.nh3}
          &nbsp;
          μg/m
          <sup>3</sup>
        </p>
      </div>
    </div>
  );
};

export default Country;
