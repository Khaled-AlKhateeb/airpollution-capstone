import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Countries = ({
  countryName, regionName, aqi, image,
}) => (
  <button className="country-btn" type="button">
    <h1 className="country-title">{countryName}</h1>
    <img src={image} alt={countryName} className="country-flag" />
    <div className={aqi()}>
      <h4>Air Quality</h4>
      <h3 className="quality">{aqi()}</h3>
    </div>
    <Link className="link" to={`/${regionName}/${countryName}`}>
      <div className="link-btn">View Details</div>
    </Link>
  </button>
);

Countries.propTypes = {
  countryName: PropTypes.string.isRequired,
  regionName: PropTypes.string.isRequired,
  aqi: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Countries;
