import React, {FC} from 'react';
import styles from "./home.module.scss";

const Home: FC = () => {
    return (
        <>
            <div className={styles.content__title}>
                <h1 className={styles.main__title}>
                    Главная Страница
                </h1>
            </div>
        </>
    );
};

export default Home;