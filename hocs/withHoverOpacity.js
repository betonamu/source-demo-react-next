import React, { useState } from "react";


const withHoverOpacity = (WrapperComponent) => {
    return (props) => {
        const [isHover, setIsHover] = useState(false);

        return (
            <div style={{ opacity: isHover ? 0.5 : 1, cursor: 'poiter' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}

export default withHoverOpacity;