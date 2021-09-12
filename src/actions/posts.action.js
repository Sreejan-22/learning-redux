// we are going to make an API call which is an asynchronous action
// so this needs Redux Thunk
// but we need not do anything other than setting up thunk in the store which we have already done in index.js

// create redux action types
export const GET_POSTS = "GET_POSTS"; // begin telling Redux we're going to fetch posts from an API
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // pass the posts to Redux on successful API call
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE"; //  inform Redux that an error was encountered during Redux on failed API call

// create redux action creators that return an action

// this would tell the reducer that api call is about to begin and "loading" state variable should be assigned "true"
export const getPosts = () => ({
  type: GET_POSTS,
});

// this send the data to be assigned to the state variable "posts" and conveys that api call was successful and the required data has been received
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

// this conveys that there were errors in the api call(e.g cors issue)
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
