import { useState, useEffect } from "react"
import AuthStore from "../stores/AuthStore"
import { useSignup } from "../hooks/useSignup"
import { useNavigate } from "react-router"

const Signup = () => {

    const [ accountDets, setAccountDets ] = useState({ email: "", password: "" })
    const { user } = AuthStore()
    const { signup, error, isLoading } = useSignup()
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setAccountDets({ ...accountDets, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(accountDets) 
    }

    useEffect(() => {
        if (user)
            navigate('/')
    }, [handleSubmit])

    if (user)
        console.log(user)

    return (
     <div className="signup">
        <form action="" onSubmit={handleSubmit} >
          <input type="text" name="email" placeholder="Email"  onChange={handleChange} />
          <input type="text" name="password" placeholder="Password"  onChange={handleChange} />
          <button type="submit" >Submit</button>  
        </form>  
        { error && <p>{error}</p> }    
     </div>
    )
  }
  
  export default Signup