import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    countryName,
    countryIcon,
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
    <div className="country-container">
      <img className="country-img" src={countryIcon} alt={countryName} />
      <div className="info-country">
        <h1 className="country-name">{countryName}</h1>
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
    </div>
  );
};

Country.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryIcon: PropTypes.string.isRequired,
  co: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  no2: PropTypes.number.isRequired,
  o3: PropTypes.number.isRequired,
  so2: PropTypes.number.isRequired,
  pm2: PropTypes.number.isRequired,
  pm10: PropTypes.number.isRequired,
  nh3: PropTypes.number.isRequired,
};

export default Country;
