import React from 'react';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const {
    countryName,
    aqi,
    onclick,
    image,
  } = props;
  return (
    <button className="country-btn" onClick={onclick} type="button">
      <h1 className="country-title">{countryName}</h1>
      <img src={image} alt={countryName} className="country-flag" />
      <div className={aqi()}>
        <h4>Air Quality</h4>
        <h3 className="quality">{aqi()}</h3>
      </div>
    </button>
  );
};

Countries.propTypes = {
  countryName: PropTypes.string.isRequired,
  aqi: PropTypes.func.isRequired,
  onclick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Countries;
