import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faComment,faShare,faEllipsis} from '@fortawesome/free-solid-svg-icons'

import './Postlist.css'
import Comments from './Comments/Comments'
import Post from './Post'  

import { useFetchPosts } from '../../../hooks/useFetchPost'
import PostStore from '../../../stores/PostStore'
import { useEffect, useState } from 'react'
import AuthStore from '../../../stores/AuthStore'
import { useLikePost } from '../../../hooks/useLikePost'


const PostList = () => {
 
  const { getPosts, isLoading, error } = useFetchPosts()
  const { posts } = PostStore()
  const { user } = AuthStore()
  const { likePost } = useLikePost()
  const [ likeColorFlag, setLikeColorFlag ] = useState(false)

  useEffect(() => {
    if (user)
      getPosts(user.token)

  }, [])

  
 
  const handleLikePost = async (post) => {
    const { _id, likeBy } = post
    await likePost(_id, user.token)

    if (likeBy.includes(user.userId))   
      setLikeColorFlag(true)
  }



  return (
    <div className="post-list container">
        { /*
        <div className="postArea">
          <div className="user-dets">
            <div className="user-wrapper"  >
              <img src="public/cm.jpg" alt="" />
              <span className="user">
                <h4>Carl Conrad Declaro</h4>
                <small>26 min</small>
              </span>
              <FontAwesomeIcon  className='ellip' icon={faEllipsis}></FontAwesomeIcon>
            </div>
          </div>       
        
          <div className="post-info">
            <div className="img-wrapper" style={{ backgroundImage: "url(public/cm.jpg)"  }} >
            </div>
            <div className="offset">
              <span className='caption'>
                <div className="catergory">
                  <h3>Data struct</h3>
                </div>
                <h2>Lorem Ipsum</h2>
              </span>
              <article className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quo vel officiis cum corrupti saepe. Dicta eaque illum alias iusto aliquid animi earum et sed iure ab, voluptas doloribus quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis rerum earum beatae odio. Ratione, omnis nulla? Est, earum? Vero repellat repellendus sunt, vitae deleniti aliquid minus placeat quas ratione veniam!
              </article>
              <div className="hr-line"></div>
            </div>
          </div>

          <div className="reactions overlap-0">
            <span>
              <FontAwesomeIcon className='neutral-grey' icon={faHeart}></FontAwesomeIcon>
              <p>Like</p>
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
          <Comments/>
  </div> */ }




      


    
        {/*  */}

        { posts && 
          posts.map((post) => {
            return (
              <Post key={post._id} post={post}  comments={post.comments || []}  />
            )
          }) 
        }
       

 
    </div>
  )
}

export default PostList