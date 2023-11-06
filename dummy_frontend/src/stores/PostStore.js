import { create } from 'zustand'

const PostStore = create((set) => ({
    posts: [],
    initPosts: (postData) => set({ posts: postData }) 
})) 

export default PostStore