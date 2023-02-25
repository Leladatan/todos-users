import React, {FC} from 'react';
import styles from "./home.module.scss";
import Users from "@/components/pages/Home/Users/Users";

const Home: FC = () => {
    return (
        <>
            <div className={styles.content__title}>
                <h1 className={styles.main__title}>
                    Список пользователей
                </h1>
            </div>

            <Users/>
        </>
    );
};

export default Home;