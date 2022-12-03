import React from 'react';
import PropTypes from 'prop-types';

const Continent = (props) => {
  const { name, icon, event } = props;
  return (
    <div>
      <button className="continent-container" type="button" onClick={event}>
        <img className="continent-img" src={`${icon}.png`} alt={name} />
        <h1 className="continent-name">{name}</h1>
      </button>
      <div />
    </div>
  );
};

Continent.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Continent;
