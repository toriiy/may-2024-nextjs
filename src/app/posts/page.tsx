import React from 'react';
import Posts from "@/components/posts/Posts";

const PostsPage = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsPage;