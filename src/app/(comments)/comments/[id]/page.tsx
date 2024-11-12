import React from 'react';
import CommentFull from "@/components/comment-full/CommentFull";
import {apiService} from "@/services/api.service";

type Params = {
    id: string;
}
const CommentPage = async ({params}: { params: Params }) => {
    const comment = await apiService.commentService.getComment(params.id);
    return (
        <div>
            <CommentFull comment={comment}/>
        </div>
    );
};

export default CommentPage;