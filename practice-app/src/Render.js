import React from 'react'
import PropTypes from 'prop-types';

export default function Render({renderProps}) {
  return (
    // dictates what should be rendered based on the data passed up a level
    <div>
        {renderProps("hello", true)}
    </div>
  )
}

Render.defaultProps = {
    renderProps: (str, bool) => {
        return (
            <div>
                <h1>{str}</h1>
                <h1>{bool ? "true" : "false"}</h1>
            </div>
        )
    }
}

Render.propTypes = {
    renderProps: PropTypes.func.isRequired
}
