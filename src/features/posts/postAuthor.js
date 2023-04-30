import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

// still have to receive userId prop from parent component
const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    // find the user with the matching id
    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor;