import Comments from "./Comments/Comments"
import { useLikePost } from '../../../hooks/useLikePost'
import { useState, useEffect } from "react"
import AuthStore from '../../../stores/AuthStore'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faComment,faShare,faEllipsis} from '@fortawesome/free-solid-svg-icons'
import defaultImage from '../../../assets/defaultProfile.jpg';
import formatTimeDifference  from "../../../utils/postTimeFormatter"

const Post = ({post, comments}) => {

    const { likePost } = useLikePost()
    const [ likeColorFlag, setLikeColorFlag ] = useState(false)
    const { user } = AuthStore()
    
    const handleLikePost = async (post) => {
        const { _id, likeBy } = post
        await likePost(_id, user.token)
        setLikeColorFlag(true)
    }

    // console.log(comments)

    useEffect(() => {
        if (post.likeBy.includes(user.userId)) 
            setLikeColorFlag(true)
    }, [handleLikePost])


    

  return (
    <div className="postArea">
                <div className="user-dets">
                  <div className="user-wrapper">
                    <img src={post.creator.creatorImage || defaultImage} alt="" />
                    <span className="user">
                      <h4>{post.creator.name}</h4>
                      <small>{ formatTimeDifference(post.createdAt) }</small>
                    </span>
                    <FontAwesomeIcon  className='ellip' icon={faEllipsis}></FontAwesomeIcon>  
                  </div>
                  {/* <div className="hr-line"></div> */}
                </div>       
              
                <div className="post-info">
                  <div className="img-wrapper" >
                    <img src={post.image} alt=""  />
                  </div>
                  <div className="offset">
                    <span className='caption'>
                      <div className="catergory">
                        <h3>Data struct</h3>
                      </div>
                      <h2>{post.title}</h2>
                    </span>
                    <article className="description">
                      { post.description }
                    </article>
                    <div className="hr-line"></div>
                  </div>
                </div>

                <div className="reactions overlap-0">
                  <span>
                    <FontAwesomeIcon  style={{ "color": likeColorFlag ? "#6332ca" : "" }} className='neutral-grey' icon={faHeart} onClick={() => handleLikePost(post)} ></FontAwesomeIcon>
                    <p>Like {post.likeCount}</p>
                  </span>
                  <span>
                    <FontAwesomeIcon className='neutral-grey' icon={faComment}></FontAwesomeIcon>
                    <p>Comment</p>
                  </span>
                  <span>
                    <FontAwesomeIcon className='neutral-grey' icon={faShare}></FontAwesomeIcon>
                    <p>Share</p>
                  </span>
                </div>
                {/*  */}
                <Comments postId={post._id} comments={comments} />
              </div>
  )
}

export default Post