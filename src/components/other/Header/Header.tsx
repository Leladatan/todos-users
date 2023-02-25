import React, {FC} from 'react';
import styles from "./header.module.scss";
import Nav from "@/components/UI/Nav/Nav";
import Logo from "@/components/UI/Logo/Logo";

const Header: FC = ({}) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <section className={styles.header__content}>

                    <Logo/>
                    <Nav/>

                </section>
            </div>
        </header>
    );
};

export default Header;