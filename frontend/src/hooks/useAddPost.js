import { useState } from "react"
import * as api from "../api/fetchPosts"
import PostStore from "../stores/PostStore";

export const useAddPost =  () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { addPostData } = PostStore()
    
    const addPost = async (post, token) => {
        
        try {
            const { response, data } = await api.addPost(post, token)

            if (response.ok) {
                addPostData(data)
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
    
    return { addPost, isLoading, error }
}
