import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

// Provides object lookup for emojis
const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕️',
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        // creates an array of arrays, each array has a key and value
        // Object.entries(reactionEmoji) = [ ['thumbsUp', '👍'], ['hooray', '🎉'], ... ]
        // map over the array of arrays, and return a button for each
        return (
            <button
                key={name}
                type="button"
                className="muted-button reaction-button"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    });

    return <div>{reactionButtons}</div>

}

export default ReactionButtons;