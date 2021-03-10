import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function Head() {
    return(
        <Helmet>
            <link rel="shortcut icon" href={'/favicon.png'} type="image/x-icon" />
        </Helmet>
    )
}

export default Head;
