import "./Feed.scss";
import Intro from "../Intro";
import Comments from "../Comments";


const Feed = () => {
    return <div className="feedWrapper">
        <div className="innerFeeds">
        <Intro name="Jane"/>
        <Comments/>
        </div>
    </div>

}
export default Feed;