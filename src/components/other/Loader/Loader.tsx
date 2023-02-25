import React, {FC} from 'react';
import styles from "./loader.module.scss";

const Loader: FC = () => {
    return (
        <div className={styles.lds__roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;