import {NextPage} from "next";
import Layout from "@/components/other/Layout/Layout";
import Todos from "@/components/pages/Todos/Todos"

const TodosPage: NextPage = () => {
    return (
        <>
            <Layout>
                <Todos/>
            </Layout>
        </>
    )
}
export default TodosPage;