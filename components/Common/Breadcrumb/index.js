import React from "react";
import Link from 'next/link'; 

import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ breadcrumbBase }) => {

    return (
        <div className={styles.textMr}>
            <ul>
                {breadcrumbBase.map((item, index) => (
                    <li>
                        <Link href={item.url}><a>{item.label}</a></Link>
                        {(index < breadcrumbBase.length -1) && <span></span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Breadcrumb;