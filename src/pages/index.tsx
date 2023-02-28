import {NextPage} from "next";
import Layout from "@/components/other/Layout/Layout";
import Home from "@/components/pages/Home/Home";
import Head from "next/head";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Главная страница</title>
            </Head>

            <Layout>
                <Home/>
            </Layout>
        </>
    )
}
export default HomePage;