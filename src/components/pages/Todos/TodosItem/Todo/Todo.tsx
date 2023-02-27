import React, {FC} from 'react';
import styles from "./todo.module.scss";

export interface TodosData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Todo: FC<TodosData> = ({title, body}) => {
    return (
        <div className={styles.todo}>
            <h2 className={styles.todo__title}>
                {title}
            </h2>
            <p className={styles.todo__text}>
                {body}
            </p>
        </div>
    );
};

export default Todo;