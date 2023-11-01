import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faVideo ,faPhotoVideo,faSmile} from '@fortawesome/free-solid-svg-icons'

const Categories = ({ setShowModal }) => {

   
  return (
    <div className="categories overlap-0">
          <div className='wrapper'>
             <div className="row1">
                   <div className="userProfile">
                     <img src="public/cm.jpg" alt="" />
                   </div>                
                   
                   <input onClick={() => setShowModal(true)} type="text" placeholder='Whats on your mind' />

                   <button>Create</button>    
             </div>

              <div className="otherTools">
                 <div className="liveVideo">
                        <FontAwesomeIcon className='icon' icon={faVideo} />
                        <p>Live video</p>
                 </div>

                 <div className="PhotosVidoes">
                        <FontAwesomeIcon className='icon' icon={faPhotoVideo} />
                        <p>Photos/Vidoes</p>
                 </div>

                 <div className="feelingActivities">
                        <FontAwesomeIcon className='icon' icon={faSmile} />
                        <p>Feelings/Activities</p>
                 </div>
              </div> 
            </div>
    </div>
  )
}

export default Categories