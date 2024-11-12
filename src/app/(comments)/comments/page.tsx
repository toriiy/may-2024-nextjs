import React from 'react';
import Comments from "@/components/comments/Comments";
import {apiService} from "@/services/api.service";

const CommentsPage = async () => {
    const comments = await apiService.commentService.getAllComments();
    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsPage;