import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
    //useState hook to track the state of the form
    //Don't need to send these to global state, use local state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Event handlers
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    // called by the button's onClick handler
    const onSavePostClicked = () => {
        if (title && content) {

            // dispatch the postAdded action with the form data to the store
            // post added has prepare method that allows us to create the payload outside of the reducer
            dispatch(
                postAdded(title, content)
            );

            //clear the form
            setTitle('');
            setContent('');
        }
    };



    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    onClick={onSavePostClicked}
                    type="button"
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;