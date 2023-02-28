import React, {FC, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import Loader from "@/components/other/Loader/Loader";
import styles from "./userId.module.scss";

interface UserData {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

const UserId: FC = () => {
    const [dataUser, setDataUser] = useState<UserData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const router = useRouter();
    const userId = router.query.userId;

    const user = JSON.parse(JSON.stringify(dataUser));

    useEffect(() => {
        if (+userId! > 10) {
            router.push("/");
        }

        const FetchUser = async () => {
            try {
                await axios
                    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(res => {
                        setDataUser(res.data);
                    });
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        FetchUser();
    }, [userId]);


    return (
        <div className={isLoading ? styles.user__content_loader : styles.user__content}>
            {isLoading
                ?
                <Loader/>
                :
                <div className={styles.user}>
                    <div className={styles.user__heading}>
                        <h2 className={styles.user__title}>{user.name}</h2>
                        <span className={styles.user__text}>Логин: {user.username}</span>
                    </div>
                    <span className={styles.user__text}>Электронная почта: {user.email}</span>
                    <span className={styles.user__text}>Адрес: {user.address?.city}, {user.address?.street}</span>
                    <span className={styles.user__text}>Номер телефона: {user.phone}</span>
                    <span className={styles.user__text}>Название компании: {user.company?.name}</span>
                </div>
            }
        </div>
    );
};

export default UserId;