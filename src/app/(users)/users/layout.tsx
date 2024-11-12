import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Users Layout'
}

type Props = { children: React.ReactNode }
const UsersLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UsersLayout;