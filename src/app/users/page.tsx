import React from 'react';
import Users from "@/components/users/Users";

const UsersPage = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;