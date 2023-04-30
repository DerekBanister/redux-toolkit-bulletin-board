import { useSelector } from 'react-redux';

//tracks the state of the store
import { selectAllPosts } from './postSlice';

import PostAuthor from './postAuthor';
import TimeAgo from './timeAgo';


//component for app.js
const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            {/* only renders up to 100 characters in case post is too long */}
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ));

    return (
        <section class="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
}

export default PostsList;