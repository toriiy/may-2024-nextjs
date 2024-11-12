import React from 'react';
import Posts from "@/components/posts/Posts";
import {apiService} from "@/services/api.service";

const PostsPage = async () => {
    const posts = await apiService.postService.getAllPosts();
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsPage;