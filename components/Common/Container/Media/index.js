import React, { useEffect } from "react";
import useDevices from "../../../../hooks/useDevices";

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
    const { isDesktop } = useDevicess();
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