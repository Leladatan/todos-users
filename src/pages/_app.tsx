import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import {NextPage} from "next";
import Head from 'next/head';
import {Dancing_Script} from 'next/font/google';
const dancingScript = Dancing_Script({ subsets: ['latin'] });

const App: NextPage<AppProps> = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Project"
                />
                <meta name="author" content="Leladatan"/>
                <meta name="copyright" content="Leladatan"/>
                <title>Todos/Users</title>
            </Head>
            <style jsx global>
                {`html {
                  font-family: ${dancingScript.style.fontFamily};
                }`
                }</style>
            <Component {...pageProps} />
        </>
    );
};
export default App;