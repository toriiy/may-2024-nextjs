import React from 'react';
import Users from "@/components/users/Users";
import {apiService} from "@/services/api.service";

const UsersPage = async () => {
    const users = await apiService.userService.getAllUsers();

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;