import Link from 'next/link';
import React, {FC} from 'react';
import styles from "./nav.module.scss"
import {useRouter} from "next/router";
const Nav: FC = ({}) => {
    const {pathname} = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.list__item}>
                    <Link href="/" className={pathname === "/" ? styles.list__link_active : styles.list__link}>
                        Главная
                    </Link>
                </li>

                <li className={styles.list__item}>
                    <Link href="/todos"
                          className={pathname === "/todos" ? styles.list__link_active : styles.list__link}>
                        Заметки
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;