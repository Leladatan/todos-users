import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import styles from "./todosItem.module.scss";
import Loader from "@/components/other/Loader/Loader";
import Todo, {TodosData} from "@/components/pages/Todos/TodosItem/Todo/Todo";

const TodosItem: FC = () => {
    const [dataTodos, setDataTodos] = useState<TodosData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [isButtonAdd, setIsButtonAdd] = useState<boolean>(false);
    const [isButtonDelete, setIsButtonDelete] = useState<boolean>(false);

    useEffect(() => {
        const FetchTodos = async () => {
            try {
                await axios
                    .get("https://jsonplaceholder.typicode.com/posts")
                    .then(res => {
                        setDataTodos(res.data);
                    });
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        };
        FetchTodos();
    }, []);

    return (
        <div className={isLoading ? styles.todos__content_loader : styles.todos__content}>
            {isLoading
                ?
                <Loader/>
                :
                dataTodos.map(item => (
                    <Todo key={item.id} userId={item.userId} id={item.id} title={item.title} body={item.body}/>
                ))
            }
        </div>
    );
};
export default TodosItem;