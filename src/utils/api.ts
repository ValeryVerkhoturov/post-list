export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export const api = {
    getPosts: async (): Promise<Post[]> => {
        return await fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json());
    },

    getPostById: async (id: number): Promise<Post> => {
        return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
    },

    getPostCommentsById: async (id: number): Promise<Comment[]> => {
        return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json());
    }
}