

const Comment = ({ text, userEmail, userImage }) => {

  return (
   <div className="comment">
        <img src={userImage} alt="" />
        <div className="comment-info">
            <h5>{userEmail}</h5> 
            <p>{text}</p>
        </div>
   </div>
  )
}

export default Comment