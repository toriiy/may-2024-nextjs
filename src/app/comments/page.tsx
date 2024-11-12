import React from 'react';
import Comments from "@/components/comments/Comments";

const CommentsPage = async () => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsPage;