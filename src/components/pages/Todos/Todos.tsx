import React, {FC} from 'react';
import styles from './todos.module.scss';

const Todos: FC = () => {
    return (
        <>
            <div className={styles.content__title}>
                <h1 className={styles.main__title}>
                    Список заметок
                </h1>
            </div>
        </>
    );
};

export default Todos;