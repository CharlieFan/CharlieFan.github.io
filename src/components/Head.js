import * as React from "react";
import { Helmet } from "react-helmet";

function Head() {
    return (
        <Helmet>
            <link
                rel="shortcut icon"
                href={"/favicon.png"}
                type="image/x-icon"
            />
        </Helmet>
    );
}

export default Head;
