import React from 'react';
import UserFull from "@/components/user-full/UserFull";
import {apiService} from "@/services/api.service";

type Params = { id: string }
const UserPage = async ({params}: { params: Params }) => {
    const user = await apiService.userService.getUser(params.id);
    return (
        <div>
            <UserFull user={user}/>
        </div>
    );
};

export default UserPage;