import React, {FC, useEffect, useState} from 'react';
import styles from "./users.module.scss";
import axios from "axios";
import Loader from "@/components/other/Loader/Loader";
import User, {UsersData} from "@/components/pages/Users/User/User";


const Users: FC = ({}) => {
    const [dataUsers, setDataUsers] = useState<UsersData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const FetchUsers = async () => {
            try {
                await axios
                    .get("https://jsonplaceholder.typicode.com/users")
                    .then(res => {
                        setDataUsers(res.data);
                    });
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        };
        FetchUsers();
    }, []);

    return (
        <div className={isLoading ? styles.users__content_loader : styles.users__content}>
            {isLoading
                ?
                <Loader/>
                :
                dataUsers.map(item => (
                    <User id={item.id} name={item.name} username={item.username} email={item.email}
                          address={item.address}
                          phone={item.phone} website={item.website} company={item.company} key={item.id}/>
                ))
            }
        </div>
    );
};

export default Users;