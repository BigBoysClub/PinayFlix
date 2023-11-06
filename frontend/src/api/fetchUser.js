

export const signupUser = async (user) => {
    const response = await fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, password: user.password, image: user.image })
    })
    
    const data = await response.json()
    return { response, data } 
}

export const loginUser = async (user) => {
    const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, password: user.password })
    })
    
    const data = await response.json()
    return { response, data } 
}