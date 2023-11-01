import * as ModalCss from './Modal.css'
import { LuImagePlus } from 'react-icons/lu'
import { AiOutlineGift } from 'react-icons/ai'
import { TbChartInfographic } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillPlusCircle } from 'react-icons/ai'

const Modal = ({ showModal, setShowModal }) => {

    console.log(showModal)

  return (<>
    { showModal && 
    <div className="modal-drop">
        <div className="modal">
            <div className="top">
                <h4>Create Post</h4>
                <div onClick={() => setShowModal(false)} className="exit">X</div>
            </div>
            <div className="center">
                <img src="public/cm.jpg" alt="" />
                <textarea  placeholder='Whats on your mind, Nigga?' name="" id="" cols="30" rows="10"></textarea>
        
            </div>
            <div className="bottom">
                <LuImagePlus/>
                <AiOutlineGift/>
                <TbChartInfographic/>
                <FaLocationDot/>
                <AiFillPlusCircle className='left' />
            </div>
        </div>
    </div> }
    </>)
}

export default Modal