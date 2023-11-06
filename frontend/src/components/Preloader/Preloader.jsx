import './Preloader.css'
import AuthStore from '../../stores/AuthStore'

const Preloader = () => {

  const { user } = AuthStore()

  return (
    <>
        <div className="pre">
            <div className="type">
               { user && <blockquote>
                “ to get something you never had,<br/>
                you need to do something you never did ” 
                </blockquote> }
            </div>
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Preloader