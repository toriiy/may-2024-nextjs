const baseUrl: string = 'https://jsonplaceholder.typicode.com';

export const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => baseUrl + urlBuilder.userBaseUrl,
    user: (id: string | number) => baseUrl + urlBuilder.userBaseUrl + '/' + id,
    postBaseUrl: '/posts',
    allPosts: () => baseUrl + urlBuilder.postBaseUrl,
    post: (id: string | number) => baseUrl + urlBuilder.postBaseUrl + '/' + id,
    commentBaseUrl: '/comments',
    allComments: () => baseUrl + urlBuilder.commentBaseUrl,
    comment: (id: string | number) => baseUrl + urlBuilder.commentBaseUrl + '/' + id
}