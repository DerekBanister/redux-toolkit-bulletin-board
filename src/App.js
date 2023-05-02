import './App.css';
import PostsList from './features/posts/postsList';
import AddPostForm from './features/posts/addPostForm';
import Navbar from './features/posts/navBar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
