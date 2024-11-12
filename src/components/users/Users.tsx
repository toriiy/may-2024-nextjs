import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import UserShortInfo from "@/components/user-short-info/UserShortInfo";

type PropsType = {
    users: IUser[]
}
const Users: FC<PropsType> = ({users}) => {
    return (
        <div>
            {users.map(user => <UserShortInfo user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;