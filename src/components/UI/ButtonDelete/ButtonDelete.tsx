import React, {FC} from 'react';
import styles from "./buttonDelete.module.scss";

const ButtonDelete: FC = ({}) => {
    return (
        <>
            <button
                className={styles.button__delete}>
                Удалить
            </button>
        </>
    );
};

export default ButtonDelete;