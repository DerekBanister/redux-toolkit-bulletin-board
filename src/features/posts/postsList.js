import { useSelector } from 'react-redux';

//tracks the state of the store
import { selectAllPosts } from './postSlice';

import PostAuthor from './postAuthor';
import TimeAgo from './timeAgo';
import ReactionButtons from './reactionBtns';


//component for app.js
const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    // creates a new array that is sorted by date using localeCompare method which compares two strings 
    // and returns a number indicating whether the string comes before, after, or is equal to the given string in sort order
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    // now we map over orderedPosts instead of posts
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            {/* only renders up to 100 characters in case post is too long */}
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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