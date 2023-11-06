

export const fetchPosts = async (token) => {
    const response = await fetch('http://localhost:5000/api/posts/', {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json(); 
    
    return { response, data }
}
