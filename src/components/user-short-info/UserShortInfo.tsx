import React, {FC} from 'react';
import Link from "next/link";
import {IUser} from "@/models/IUser";

type PropsType = {
    user: IUser
}
const UserShortInfo: FC<PropsType> = ({user}) => {
    return (
        <div>
            <p><Link href={'/users/' + user.id}> Id: {user.id} Name: {user.name}</Link></p>
        </div>
    );
};

export default UserShortInfo;