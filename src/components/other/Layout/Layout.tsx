import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/other/Header/Header";
import Footer from "@/components/other/Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <section className="main__content">
                        {children}
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;