import React from "react";

import withHoverOpacity from "../../../hocs/withHoverOpacity";

const AwesomeImage = ({ src }) => {
    return (
        <img src={src} height={300} width={300} />
    )
}

export default withHoverOpacity(AwesomeImage);