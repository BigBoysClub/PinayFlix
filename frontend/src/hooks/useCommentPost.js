import { useState } from "react"
import * as api from "../api/fetchPosts"
import PostStore from "../stores/PostStore";

export const useCommentPost =  () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { updatePostComments } = PostStore()
    
    const commentPost = async ({text, user}, postId, token) => {
        
        try {
            const { response, data } = await api.commentPost({text, user}, postId, token)

            if (response.ok) {
                updatePostComments(postId, data.comments)
                setError("")
                setIsLoading(false)                
            }
            
            if (!response.ok) {
                setError(data.error)
                setIsLoading(false)
            }

            console.log(data.comments)

        } catch(error) {
            console.log(error)
        }   
    }
    
    return { commentPost, isLoading, error }
}
