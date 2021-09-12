import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchPosts } from "../actions/posts.action";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../slices/posts.slice";
import Post from "../components/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasErrors } = useSelector(postsSelector);

  useEffect(() => {
    // fetchPosts(dispatch);
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// We'll pass a parameter called mapStateToProps to connect. This function will take any state from the Redux store and pass it to the props of the React component.
// const mapStateToProps = (state) => ({
//   loading: state.posts.loading,
//   posts: state.posts.posts,
//   hasErrors: state.posts.hasErrors,
// });

// The connect function is a higher-order function that connects the Redux store to a React component.
// export default connect(mapStateToProps)(Posts);
export default Posts;
