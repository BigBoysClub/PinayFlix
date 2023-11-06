import { useState } from "react"
import * as api from "../api/fetchPosts"
import PostStore from "../stores/PostStore";

export const useFetchPosts =  () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { initPosts } = PostStore()
    
    const getPosts = async (token) => {
        
        try {
            const { response, data } = await api.fetchPosts(token)

            if (response.ok) {
                initPosts(data)
                setError("")
                setIsLoading(false)
                
            }
            
            if (!response.ok) {
                setError(data.error)
                setIsLoading(false)
            }

        } catch(error) {
            console.log(error)
        }   
    }
    
    return { getPosts, isLoading, error }
}
