 
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faComment,faShare,faEllipsis} from '@fortawesome/free-solid-svg-icons'

import './Postlist.css'

const PostList = () => {
  return (
    <div className="post-list container">
      
        <div className="postArea">
          <div className="user-dets">
            <div className="user-wrapper">
              <img src="public/cm.jpg" alt="" />
              <span className="user">
                <h4>Carl Conrad Declaro</h4>
                <small>26 min</small>
              </span>
              <FontAwesomeIcon  className='ellip' icon={faEllipsis}></FontAwesomeIcon>
            </div>
            {/* <div className="hr-line"></div> */}
          </div>       
        
          <div className="post-info">
            <div className="img-wrapper" >
              <img src="public/cm.jpg" alt=""  />
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
        </div>

    
        <div className="postArea">
          <div className="user-dets">
            <div className="user-wrapper">
              <img src="public/cm.jpg" alt="" />
              <span className="user">
                <h4>Carl Conrad Declaro</h4>
                <small>26 min</small>
              </span>
              <FontAwesomeIcon  className='ellip' icon={faEllipsis}></FontAwesomeIcon>
            </div>
          </div>       
        
          <div className="post-info">
            <div className="img-wrapper" >
              <img src="public/cm.jpg" alt=""  />
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

          <div className="reactions">
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
        </div>


        <div className="postArea">
          <div className="user-dets">
            <div className="user-wrapper">
              <img src="public/cm.jpg" alt="" />
              <span className="user">
                <h4>Carl Conrad Declaro</h4>
                <small>26 min</small>
              </span>
              <FontAwesomeIcon  className='ellip' icon={faEllipsis}></FontAwesomeIcon>
            </div>
          </div>       
        
          <div className="post-info">
            <div className="img-wrapper" >
              <img src="../public/cm.jpg" alt=""  />
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

          <div className="reactions">
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
        </div>




        

         
        { /*<div className="postArea">
               <div className="UserPost">
                   <div className="userDetails">  
                          <div>                    
                              <div className="profilePicture">
                                   <img src="public/cm.jpg" alt="" />
                              </div>

                              <div className="userName">                                
                                    <h3>Carl Conrad Declaro</h3>                                                                      
                                    <p>26 mins</p>                                    
                              </div>           
                          </div>     

                          <div className="others">
                          <FontAwesomeIcon className='icon' icon={faEllipsis} />
                         </div>                
                  </div>
                  <hr />

                  <div className="pictures">
                       <img src="public/cm.jpg" alt="" srcSet="" />
                  </div>

                  <div className="captions">

                   <div className="headLines">
                              <div className="catergory">
                                      <h3>Data struct</h3>
                              </div>

                              <div className="title">
                                <h2 >Lorem ipsum dolor</h2>
                              </div>
                   </div>

                   <div className="descriptions">         
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore accusamus reprehenderit ullam? Aliquid ab optio beatae a quod, cumque ad. Cumque pariatur inventore dolores cum architecto, reprehenderit aliquid ratione!</p>             
                    </div>  
                        <hr  className='horizontaLine'/>  

                         <div className="userInteractions">
                                  <div className="likes">
                                  <FontAwesomeIcon className='icon' icon={faHeart} />
                                  <p>Likes</p>
                                  </div>

                                  <div className="comments">
                                  <FontAwesomeIcon  className='icon' icon={faComment} />
                                    <p>comments</p>
                                  </div>

                                  <div className="shares">
                                  <FontAwesomeIcon  className='icon' icon={faShare} />
                                    <p>comments</p>
                                  </div>               
                         </div>
                   </div>                    
              </div>            
  </div> */ }
       



 
    </div>
  )
}

export default PostList