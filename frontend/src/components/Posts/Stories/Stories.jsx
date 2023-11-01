import Story from "./Story"
import * as StoriesStyles  from './Stories.css'

const Stories = () => {
  
  return (
    <div className="stories container">
        <h3>Stories</h3>
        <div className="story-list">
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>

          <Story/>
          <Story/>
          
        </div>
    </div>
  )
}

export default Stories
