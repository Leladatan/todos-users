import React, {FC} from 'react';
import styles from "./buttonAdd.module.scss";

const ButtonAdd: FC = ({}) => {
    return (
        <>
            <button
                className={styles.button__add}>
                Добавить
            </button>
        </>
    );
};

export default ButtonAdd;