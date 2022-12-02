import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    countryName,
    id,
    co,
    no,
    no2,
    o3,
    so2,
    pm2,
    pm10,
    nh3,
  } = props;
  return (
    <div className="info-country" id={id}>
      {/* <img className="country-img" src={countryIcon} alt={countryName} /> */}
      <h3 className="country-name">{countryName}</h3>
      <span>
        CO:
        {co}
        . NO:
        {no}
        . NO2:
        {no2}
        . O3:
        {o3}
        .
      </span>
      <span>
        SO2:
        {so2}
        . PM2_5:
        {pm2}
        . PM10:
        {pm10}
        . NH3:
        {nh3}
        .
      </span>
    </div>
  );
};

Country.propTypes = {
  countryName: PropTypes.string.isRequired,
  co: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  no2: PropTypes.number.isRequired,
  o3: PropTypes.number.isRequired,
  so2: PropTypes.number.isRequired,
  pm2: PropTypes.number.isRequired,
  pm10: PropTypes.number.isRequired,
  nh3: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Country;
