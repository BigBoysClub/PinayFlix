import * as ModalCss from './Modal.css'
import { LuImagePlus } from 'react-icons/lu'
import { AiOutlineGift } from 'react-icons/ai'
import { TbChartInfographic } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useState } from 'react'
import FileBase from 'react-file-base64'
import AuthStore from '../../../../stores/AuthStore'
import PostStore from '../../../../stores/PostStore'
import { useAddPost } from '../../../../hooks/useAddPost'

const Modal = ({ showModal, setShowModal }) => {

  const [formDetails, setFormDetails] = useState({ creator: { name: "", creatorImage: "" }, title: '', image: '', description: '', likeCount: 0, comments: [] })
  const { user } = AuthStore() 
  const { addPost, isLoading, error } = useAddPost()

  const handleChange = (e) => {
    setFormDetails({...formDetails, [e.target.name]: e.target.value})
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newPost = { 
        creator: { name: user.email,  creatorImage: user.image},
        title: formDetails.title,
        image: formDetails.image,
        description: formDetails.description,
        likeCount: formDetails.likeCount,
        comments: formDetails.comments    
    }

    await addPost(newPost, user.token)
    setShowModal(false)
  }


  return (<>
    { showModal && 
    <div className="modal-drop">
        <div className="modal">
            <div className="top">
                <h4>Create Post</h4>
                <div onClick={() => setShowModal(false)} className="exit">X</div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="center">
                    <img src="public/cm.jpg" alt="" />
                    <div className="input-field">
                        <input name="title" type="text" placeholder='Title...'  className='title' onChange={handleChange} />
                        <textarea  placeholder='Whats on your mind, Nigga?' name="description" id="" cols="30" rows="10" onChange={handleChange} ></textarea>
                    </div>
                </div>
                <div className="bottom">
                    <label htmlFor="fileInput"><LuImagePlus/></label>
                    <FileBase
                        id="fileInput"
                        name="image"
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setFormDetails({...formDetails, image: base64})}
                    />
                    <AiOutlineGift/>
                    <TbChartInfographic/>
                    <FaLocationDot/>
                    <button type='submit'><AiFillPlusCircle className='left'/></button>
                </div>
            </form>
        </div>
    </div> }
    </>)
}

export default Modal