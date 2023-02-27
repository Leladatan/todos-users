import React, {FC} from 'react';
import styles from "./user.module.scss";

export interface UsersData {
    id: number,
    name: string,
    username: string,
    email: string,
    address: FetchAddress,
    phone: string,
    website: string,
    company: FetchCompany
}

interface FetchAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: FetchAddressGeo
}

interface FetchCompany {
    name: string,
    catchPhrase: string,
    bs: string
}

interface FetchAddressGeo {
    lat: string,
    lng: string
}

const User: FC<UsersData> = ({email, name, address, phone, username}) => {
    return (
        <div className={styles.user}>
            <h2 className={styles.user__title}>{name}</h2>
            <span className={styles.user__text}>Логин: {username}</span>
            <span className={styles.user__text}>Электронная почта: {email}</span>
            <span className={styles.user__text}>Адрес: {address.city}</span>
            <span className={styles.user__text}>Номер телефона: {phone}</span>
        </div>
    );
};

export default User;