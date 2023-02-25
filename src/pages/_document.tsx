import {Html, Head, Main, NextScript} from 'next/document'
import {NextPage} from "next";

const Document: NextPage = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
export default Document;