import Stories from "./Stories/Stories"
import Categories from "./Categories/Categories"
import PostList from "./PostLists/PostList"
import Modal from "./Categories/PostModal/Modal"
import { useState } from "react"
import Rightbar from "./RightBar/Rightbar"

const Posts = () => {

  const [ showModal, setShowModal ] = useState(false)

  return (<>
    <div className="posts container gap">
        <Stories/>
        <div className="main-content flex-row">
            <div className="flex-col gap">
                <Categories setShowModal={setShowModal} />
                <PostList  />
            </div>
            <Rightbar/>
        </div>
    </div>
    <Modal setShowModal={setShowModal} showModal={showModal}/>
  </>)
}

export default Posts