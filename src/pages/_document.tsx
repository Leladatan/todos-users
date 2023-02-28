import {Html, Head, Main, NextScript} from 'next/document'
import {NextPage} from "next";

const Document: NextPage = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
export default Document;