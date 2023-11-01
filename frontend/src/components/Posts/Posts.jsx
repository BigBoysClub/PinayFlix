import Stories from "./Stories/Stories"
import Categories from "./Categories/Categories"
import PostList from "./PostLists/PostList"
import Rightbar from "./RightBar/Rightbar"

const Posts = () => {
  return (
    <div className="posts container gap">
        <Stories/>
        <div className="main-content flex-row">
            <div className="flex-col gap">
                <Categories/>
                <PostList/>
            </div>
            <Rightbar/>
        </div>
    </div>
  )
}

export default Posts