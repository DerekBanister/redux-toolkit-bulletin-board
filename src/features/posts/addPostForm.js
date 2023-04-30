import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
    //useState hook to track the state of the form
    //Don't need to send these to global state, use local state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //temp state we track in component then send to store
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    // Event handlers
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    // called by the button's onClick handler
    const onSavePostClicked = () => {
        if (title && content) {

            // dispatch the postAdded action with the form data to the store
            // post added has prepare method that allows us to create the payload outside of the reducer
            dispatch(
                postAdded(title, content, userId)
            );

            //clear the form
            setTitle('');
            setContent('');
        }
    };

    // Check if the form fields are filled out, and if so, enable button
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));


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
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    onClick={onSavePostClicked}
                    // disable button if form fields are empty
                    disabled={!canSave}
                    type="button"
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;