"use client"
import React, {FC, useEffect, useState} from 'react';
import styles from "./users.module.scss";
import axios from "axios";
import Loader from "@/components/other/Loader/Loader";
import User, {UsersData} from "@/components/pages/Home/Users/User/User";


const Users: FC = ({}) => {
    const [data, setData] = useState<UsersData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const Fetch = async () => {
            try {
                await axios
                    .get("https://jsonplaceholder.typicode.com/users")
                    .then(res => {
                        setData(res.data);
                    });
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        };
        Fetch();
    }, []);

    return (
        <div className={isLoading ? styles.users__content_loader : styles.users__content}>
            {isLoading
                ?
                <Loader/>
                :
                data.map(item => (
                    <User id={item.id} name={item.name} username={item.username} email={item.email}
                          address={item.address}
                          phone={item.phone} website={item.website} company={item.company} key={item.id}/>
                ))
            }
        </div>
    );
};

export default Users;