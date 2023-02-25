import React, {FC} from 'react';
import Link from "next/link";
import styles from "./logo.module.scss"

const Logo: FC = ({}) => {
    return (
        <div className={styles.logo}>
            <h1 className={styles.logo__title}>
                <Link href="/" className={styles.logo__link}>
                    Todos
                </Link>
            </h1>
        </div>
    );
};

export default Logo;