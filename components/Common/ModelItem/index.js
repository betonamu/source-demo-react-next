import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";

import styles from "./ModelItem.module.scss";

const ModelItem = ({item}) =>{

    const openNewTab = () =>{
        window.open(`/images/XIUREN No.2943 Maleah_AOT/${item.toString().padStart(3,0)}.jpg`,"_blank");
    }

    return(
        <div className={styles.modelItemWrapper} onClick={()=>openNewTab()}>
            <img src={`/images/XIUREN No.2943 Maleah_AOT/${item.toString().padStart(3,0)}.jpg`}/>
            <p>MALEAH 2005</p>
        </div>
    )
}

export default ModelItem;