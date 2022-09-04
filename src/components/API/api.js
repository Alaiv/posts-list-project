import axios from "axios";

export const API = {
    getPosts: async (limit = 10, page = 1) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    },

    getPostPage: async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    },

    getPostComment: async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}

// export default class GetPosts {
//     static async getAll(limit, page){
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
//         return response.data
//     }
// }