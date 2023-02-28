import React from 'react';
import Layout from "@/components/other/Layout/Layout";
import UserId from "@/components/pages/Users/UserId/UserId";
import {NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/router";

const UserIdPage: NextPage = () => {
    const router = useRouter();
    const userId = router.query.userId;
    return (
        <>
            <Head>
                <title>Пользователь {userId}</title>
            </Head>

            <Layout>
                <UserId/>
            </Layout>
        </>
    );
};

export default UserIdPage;