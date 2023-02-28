import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/other/Layout/Layout";
import Users from "@/components/pages/Users/Users";
import Head from "next/head";

const UsersPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Пользователи</title>
            </Head>

            <Layout>
                <Users/>
            </Layout>
        </>
    );
};

export default UsersPage;