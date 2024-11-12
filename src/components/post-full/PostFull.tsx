import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import styles from './PostFull.module.css'

type PropsType = {
    post: IPost
}
const PostFull: FC<PropsType> = ({post}) => {
    return (
        <div className={styles.postBlock}>
            <h2>Post {post.id}</h2>
            <h3>User id: {post.userId}</h3>
            <h4>Id: {post.id}</h4>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostFull;