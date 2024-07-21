import { useState } from "react";
import { unlockBody } from "../../utils/helperUtility";
import LoginModal from "../LoginModal";
import "./Comments.scss";
import ChatBubble from "./assets/chatBubble.svg";
import { comments } from "./constants";

interface commentType {
    name: string;
    timeAgo: number;
    profilePic: string;
    editedOrNot: boolean;
    content: string;
    totalComments: number;
    emoticon: string;
}
const Comments = () => {
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

    const handleLoginModal = (val: boolean) => setOpenLoginModal(val);

    const renderCreateNewPostComment = () => {
        return <div className="createPostClass commentParent" onClick={() => handleLoginModal(true)}>
            <div className="profileSection">
                <div className="leftSection">
                    <div className="ownerName">Create post</div>
                </div>
            </div>
            <div className="commentContectSection">
                <div className="emoticon">
                        💬
                </div>
                <div className="content">
                    How are you feeling today?
                </div>
            </div>
            <div className="postBtn">Post</div>
        </div>
    }

    const renderComment = (comment: commentType, index: number) => {
        return <div className="commentParent" key={index} onClick={() => handleLoginModal(true)}>
            <div className="profileSection">
                <div className="leftSection">
                    <img src={require(`./assets/${comment.profilePic}`)}/>
                    <div>
                    <div className="ownerName">{comment.name}</div>
                    <p>{`${comment.timeAgo}min${comment.timeAgo > 1 ? "s" : ""} ago`}{comment.editedOrNot ? <div className="edited">Edited</div> : ""}</p>
                    </div>
                </div>
                <div className="dotSection">
                    ...
                </div>
            </div>
            <div className="commentContectSection">
                <div className="emoticon">
                    {comment.emoticon}
                </div>
                <div className="content">
                    {comment.content}
                </div>
            </div>
            <div className="totalComments">
                <img src={ChatBubble}/>
                {comment.totalComments} comments</div>
        </div>
    }
    return <><div className="commentsWrapper">
        {renderCreateNewPostComment()}
        {comments.map((comment: commentType, index: number) => renderComment(comment, index))}</div>
        {openLoginModal && <LoginModal closeModal={() => { handleLoginModal(false); unlockBody() }} />}
    </>

}
export default Comments;