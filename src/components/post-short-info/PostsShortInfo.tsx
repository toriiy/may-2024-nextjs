import React, {FC} from 'react';
import Link from "next/link";
import {IPost} from "@/models/IPost";

type PropsType = {
    post: IPost
}
const PostsShortInfo: FC<PropsType> = ({post}) => {
    return (
        <div>
            <p>
                <Link href={'/posts/' + post.id}> Post id: {post.id} Title: {post.title} </Link>
            </p>
        </div>
    );
};

export default PostsShortInfo;