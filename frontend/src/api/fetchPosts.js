
// GET ALL POST
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


// ADD POST
export const addPost = async (post, token) => {
    const response = await fetch('http://localhost:5000/api/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify( post )
    })
    const data = await response.json()

    return { response, data }
}


// LIKE POST
export const likePost = async (postId, token) => {
    const response = await fetch(`http://localhost:5000/api/posts/like/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()

    return { response, data }
}


// COMMENT A POST
export const commentPost = async ({text, user}, postId, token) => {
    const response = await fetch(`http://localhost:5000/api/posts/comment/${postId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ text, user })
    })
    const data = await response.json()

    return { response, data }
}