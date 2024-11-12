import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import CommentShortInfo from "@/components/comment-short-info/CommentShortInfo";

type PropsType = {
    comments: IComment[]
}
const Comments: FC<PropsType> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <CommentShortInfo key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;