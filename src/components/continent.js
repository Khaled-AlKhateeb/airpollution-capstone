import React from 'react';
import PropTypes from 'prop-types';

const Continent = (props) => {
  const { name, icon, event } = props;
  return (
    <button className="continent-container" type="button" onClick={event}>
      <img className="continent-img" src={icon} alt={name} />
      <div className="info-container">
        <h1 className="continent-name">{name}</h1>
      </div>
    </button>
  );
};

Continent.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};

export default Continent;
