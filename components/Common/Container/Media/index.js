import React, { useEffect } from "react";


const Desktop = ({ children }) => {
    const { isDesktop } = useDevices();
    const [content, setContent] = useEffect(children);

    useEffect(() => {
        if (isDesktop) {
            setContent(children);
        } else {
            setContent(null);
        }
    }, [children, isDesktop]);

    return content || <></>;
}

const Mobile = ({ children }) => {
    const { isDesktop } = useDevices();
    const [content, setContent] = useEffect(children);

    useEffect(() => {
        if (!isDesktop) {
            setContent(children);
        } else {
            setContent(null);
        }
    }, [children, isDesktop])

    return content || <></>;
}

export {
    Desktop, Mobile
}