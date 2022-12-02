import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    countryName,
    id,
    close,
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
      <button type="button" className="close-btn" onClick={close}>&#x3c;</button>
      <h1 className="country-name">{countryName}</h1>
      <div className="components">
        <p className="component">
          CO:&nbsp;
          {co}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          NO:&nbsp;
          {no}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          NO2:&nbsp;
          {no2}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          O3:&nbsp;
          {o3}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          SO2:&nbsp;
          {so2}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          PM2_5:&nbsp;
          {pm2}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          PM10:&nbsp;
          {pm10}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
        <p className="component">
          NH3:&nbsp;
          {nh3}
&nbsp;
          μg/m
          <sup>3</sup>
        </p>
      </div>
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
  close: PropTypes.func.isRequired,
};

export default Country;
