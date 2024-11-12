import {urlBuilder} from "@/urls/urls";
import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";


export const apiService = {
    userService: {
        getAllUsers: async (): Promise<IUser[]> => {
            const users = await fetch(urlBuilder.allUsers())
                .then(value => value.json());
            return users;
        },
        getUser: async (id: string | number): Promise<IUser> => {
            const user = await fetch(urlBuilder.user(id))
                .then(value => value.json());
            return user;
        }
    },
    postService: {
        getAllPosts: async (): Promise<IPost[]> => {
            const posts = await fetch(urlBuilder.allPosts())
                .then(value => value.json());
            return posts;
        },
        getPost: async (id: string | number): Promise<IPost> => {
            const post = await fetch(urlBuilder.post(id))
                .then(value => value.json());
            return post;
        }
    },
    commentService: {
        getAllComments: async (): Promise<IComment[]> => {
            const comments = await fetch(urlBuilder.allComments())
                .then(value => value.json());
            return comments;
        },
        getComment: async (id: string | number): Promise<IComment> => {
            const comment = await fetch(urlBuilder.comment(id))
                .then(value => value.json());
            return comment;
        }
    }
}

