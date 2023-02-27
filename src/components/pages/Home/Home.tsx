import React, {FC} from 'react';
import styles from "./home.module.scss";
import UsersItem from "@/components/pages/Home/UsersItem/UsersItem";

const Home: FC = () => {
    return (
        <>
            <div className={styles.content__title}>
                <h1 className={styles.main__title}>
                    Список пользователей
                </h1>
            </div>

            <UsersItem/>
        </>
    );
};

export default Home;