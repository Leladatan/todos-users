import React, {FC} from 'react';
import styles from './todos.module.scss';
import TodosItem from "@/components/pages/Todos/TodosItem/TodosItem";

const Todos: FC = () => {
    return (
        <>
            <div className={styles.content__title}>
                <h1 className={styles.main__title}>
                    Список заметок
                </h1>
            </div>

            <TodosItem/>
        </>
    );
};

export default Todos;