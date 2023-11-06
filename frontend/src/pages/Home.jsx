import Navbar from "../components/Navbar/Navbar"
import Posts from "../components/Posts/Posts"
import Sidebar from "../components/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import Preloader from "../components/Preloader/Preloader"

const Home = () => {

  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
   
    setTimeout(() => {
      setShowPreloader(false); 
    }, 5000);

  }, []);

  
  return (<>
  { showPreloader ? <Preloader/> :
    <>
    <Navbar/>
    <div className="main container grid">
        <Sidebar/>
        <Posts/>
    </div>
    </> }
  </>)
}

export default Home;