import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import PostsShortInfo from "@/components/post-short-info/PostsShortInfo";

type PropsType = {
    posts: IPost[]
}
const Posts: FC<PropsType> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <PostsShortInfo key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;