import React from 'react';
import PostFull from "@/components/post-full/PostFull";
import {apiService} from "@/services/api.service";

type Params = {
    id: string;
}
const PostPage = async ({params}: { params: Params }) => {
    const post = await apiService.postService.getPost(params.id);
    return (
        <div>
            <PostFull post={post}/>
        </div>
    );
};

export default PostPage;