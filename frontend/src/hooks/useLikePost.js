import { useState } from "react"
import * as api from "../api/fetchPosts"
import PostStore from "../stores/PostStore";

export const useLikePost =  () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { likePostData } = PostStore()
    
    const likePost = async (postId, token) => {
        
        try {
            const { response, data } = await api.likePost(postId, token)

            if (response.ok) {
                likePostData(postId)
                setError("")
                setIsLoading(false)
            }
            
            if (!response.ok) {
                setError(data.error)
                setIsLoading(false)
            }

            console.log(response)

        } catch(error) {
            console.log(error)
        }   
    }
    
    return { likePost, isLoading, error }
}
