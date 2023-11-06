import { create } from 'zustand'

const PostStore = create((set) => ({
    posts: [],
    initPosts: (postData) => set({
        posts: postData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }),
    addPostData: (newPost) => set((state) => ({ posts: [newPost, ...state.posts] })),
    likePostData: (id) => set((state) => ({
        posts: state.posts.map((post) => {
            if (id === post._id)
                return { ...post, likeCount: post.likeCount + 1 }
            return post
        })
    })),
    updatePostComments: (postId, updatedComments) =>
        set((state) => ({
            posts: state.posts.map((post) => {
                if (postId === post._id) return { ...post, comments: updatedComments };
                return post;
            }),
        })),
}))

export default PostStore
