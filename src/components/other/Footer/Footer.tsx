import React, {FC} from 'react';
import styles from "./footer.module.scss"
import Logo from "@/components/UI/Logo/Logo";
import Nav from "@/components/UI/Nav/Nav";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <section className={styles.footer__content}>

                    <Logo/>
                    <Nav/>

                </section>
            </div>
        </footer>
    );
};

export default Footer;