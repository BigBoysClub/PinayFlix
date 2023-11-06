import * as styles from "./Comments.css";
import { BsFillCursorFill } from "react-icons/bs";
import { LuImagePlus } from 'react-icons/lu';
import { AiOutlineGift } from 'react-icons/ai';
import { TbChartInfographic } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from "react";
import Comment from "./Comment";
import AuthStore from '../../../../stores/AuthStore';
import { useCommentPost } from "../../../../hooks/useCommentPost";

const Comments = ({ postId, comments }) => {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentInfo, setCommentInfo] = useState({ text: "", user: {} });
  const { user } = AuthStore();
  const { commentPost, isLoading, error } = useCommentPost();
  const initialVisibleComments = 2;

  const handleComment = async (e) => {
    e.preventDefault();
    
    const newComment = {
      text: commentInfo.text,
      user: {
        email: user.email,
        image: user.image
      }
    }

    await commentPost({ text: newComment.text, user: newComment.user }, postId, user.token);
    setCommentInfo({text: "", user: {}})
  }

  return (
    <section className="comments pos-relative">

      {Array.isArray(comments) && comments.length > initialVisibleComments && (
        <span onClick={() => setShowAllComments(!showAllComments)}>
          {showAllComments ? "View fewer comments" : "View more comments"}
        </span>
      )}

      {Array.isArray(comments) &&
        comments.slice(0, showAllComments ? comments.length : initialVisibleComments).map((comment, index) => {
          return (
            <Comment
              key={index}
              userEmail={comment.user?.email}
              text={comment.text}
              userImage={comment.user?.image}
            />
          );
        })
      }
      
      <div className="write-comment">
        <img src={user.image} alt="" />
        <div className="comment-wrapper">
          <form action="" onSubmit={handleComment}>
            <textarea  value={commentInfo.text} type="text" placeholder="Write comment" onChange={(e) => setCommentInfo({ ...commentInfo, text: e.target.value })} />
            <div className="comment-bottom">
              <LuImagePlus />
              <AiOutlineGift />
              <TbChartInfographic />
              <FaLocationDot />
              <AiFillPlusCircle />
              <button type="submit" className="left" ><BsFillCursorFill /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Comments;
