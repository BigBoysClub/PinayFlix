 
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faComment,faShare,faEllipsis} from '@fortawesome/free-solid-svg-icons'

import './Postlist.css'

const PostList = () => {
  return (
    <div className="post-list container">




     
        <div className="postArea">
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
                                    <p> adipisicing elit. Quisquam quis, vel, omnis nam consectetur recusandae quam atque neque quae fuga consequuntur possimus suscipit pariatur doloribus rem maiores incidunt fugit aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, adipisci. Sunt, dolorum laudantium iusto molestias ab delectus ut incidunt provident iste dicta distinctio doloribus repudiandae id aliquid quisquam, sapiente officiis?</p>              
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
        </div>





        


        <div className="postArea">
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
        </div>
       



 
    </div>
  )
}

export default PostList