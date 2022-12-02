import React from 'react';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const { countryName, aqi, onclick } = props;
  return (
    <button className={`country-btn ${aqi()}`} onClick={onclick} type="button">{countryName}</button>
  );
};

Countries.propTypes = {
  countryName: PropTypes.string.isRequired,
  aqi: PropTypes.func.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Countries;
