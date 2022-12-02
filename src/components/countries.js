import React from 'react';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const { countryName, aqi, onclick } = props;
  return (
    <h2 className={aqi} onClick={onclick}>{countryName}</h2>
  );
};

Countries.propTypes = {
  countryName: PropTypes.string.isRequired,
  aqi: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Countries;
