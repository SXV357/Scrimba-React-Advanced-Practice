import React from 'react'
import PropTypes from 'prop-types';

export default function PropControls({width, height, color, children}) {
    const styles = {
        background: color,
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
  return (
    <div style = {styles}>{children}</div>
  )
}

PropControls.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string.isRequired
}

PropControls.defaultProps = {
    width: 150,
    height: 150,
    color: "blue" // overrides isRequired since a default value has been specified
  }
