import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import Link from "next/link";

type PropsType = {
    comment: IComment
}
const CommentShortInfo: FC<PropsType> = ({comment}) => {
    return (
        <div>
            <p>
                <Link href={'/comments/' + comment.id}> Comment Id: {comment.id} Name: {comment.name}</Link>
            </p>
        </div>
    );
};

export default CommentShortInfo;