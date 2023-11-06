  import { useEffect } from "react"
  import AuthStore from "../stores/AuthStore"
  import PostStore from "../stores/PostStore";
  import { useNavigate } from "react-router"
  import { useFetchPosts } from "../hooks/useFetchPost"

  const Home = () => {
  
    const { user, logout, signupData } = AuthStore()
    const { posts } = PostStore()
    const { getPosts, error, loading } = useFetchPosts()
    const navigate = useNavigate() 

    const handleLogout = () => {
      localStorage.removeItem('user')
      logout() 
      navigate('/signup')
    }

    useEffect(() => {
      if (user)
        getPosts(user.token)
    }, [])

    return (
      <div>
        <h1>HOME</h1>
        <p>user: {user?.email}</p>
        <hr/>
        <hr />
        <button onClick={handleLogout} >Logout</button>

        <div className="posts">
          { posts &&
            posts.map((post) => {
              return <div key={post._id}>
                      name: { post.name }
                      <br/>
                      description: { post.description }
                    </div>
            }) }
        </div>
        { error && <p>{error}</p> }
      </div>
    )
  }

  export default Home