import { useState, useEffect } from "react"
import AuthStore from "../stores/AuthStore"
import { useSignup } from "../hooks/useSignup"
import { useNavigate } from "react-router"
import FileBase from "react-file-base64"
import Preloader from "../components/Preloader/Preloader"

const Signup = () => {

    const [ accountDets, setAccountDets ] = useState({ email: "", password: "", image: "" })
    const { user } = AuthStore()
    const { signup, error, isLoading } = useSignup()
    const navigate = useNavigate()
    const [showPreloader, setShowPreloader] = useState(true)

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

    
    useEffect(() => {
   
    setTimeout(() => {
      setShowPreloader(false); 
    }, 5000);

    }, []);

    
    return (<>
    { showPreloader ? (<Preloader/>) : ( 
     <div className="signup">
        <form action="" onSubmit={handleSubmit} >
          <input type="text" name="email" placeholder="Email"  onChange={handleChange} />
          <input type="text" name="password" placeholder="Password"  onChange={handleChange} />
          <FileBase
            id="fileInput" 
            name="image"
            type="file"
            multiple={false}
            onDone={({ base64 }) => setAccountDets({...accountDets, image: base64})}
          />
          <button type="submit" >Submit</button>  
        </form>  
        { error && <p>{error}</p> }    
     </div>
      )}
    </>)
  }
  
  export default Signup