import {NextPage} from "next";
import Layout from "@/components/other/Layout/Layout";
import Todos from "@/components/pages/Todos/Todos"
import Head from "next/head";
import React from "react";

const TodosPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Заметки</title>
            </Head>

            <Layout>
                <Todos/>
            </Layout>
        </>
    )
}
export default TodosPage;