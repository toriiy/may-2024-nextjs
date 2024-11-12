import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import styles from './CommentFull.module.css'

type PropsType = {
    comment: IComment
}
const CommentFull: FC<PropsType> = ({comment}) => {
    return (
        <div className={styles.commentBlock}>
            <h2>Comment {comment.id}</h2>
            <h3>Post id: {comment.postId}</h3>
            <h4>Id: {comment.id}</h4>
            <h4>Name: {comment.name}</h4>
            <h4>Email: {comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentFull;