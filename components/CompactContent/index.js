import React, { useRef, useMemo, useState, useEffect } from "react";
import classNames from "classnames";

import { IconDownCategory } from "../../asstes/icons";

import styles from "./CompactContent.module.scss";

const CompactContent = ({ compactHeight = 190, children }) => {
    const [isSeeMore, setIsSeeMore] = useState(false);
    const [isShortContent, setIsShortContent] = useState(true);
    const ref = useRef();

    const toggleContent = () => {
        setIsSeeMore(prev => !prev);
    }

    const fullContentHeight = ref.current?.offsetHeight || 'fit-content';

    const currentHeightShow = useMemo(() => {
        return isSeeMore ? fullContentHeight : compactHeight;
    }, [isSeeMore]);

    useEffect(() => {
        setIsShortContent(ref.current?.offsetHeight > compactHeight)
    }, [children])

    return (
        <div className={classNames({
            [styles.compactContent]: true,
            [styles.hasToggle]: isSeeMore,
        })}>
            <div className={styles.body}
                style={{ height: currentHeightShow }}>
                <div ref={ref}>
                    {children}
                </div>
            </div>
            {
                isShortContent &&
                <div className={styles.toggleButton}>
                    <button onClick={() => toggleContent()}>
                        {!isSeeMore ? "Xem thêm" : "Thu gọn"}
                    </button><spam><IconDownCategory/></spam>
                </div>
            }
        </div>
    );
}

export default CompactContent;