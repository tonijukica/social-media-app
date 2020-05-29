const setPosts = (state, posts ) => {
  state.posts = posts;
};

const addPost = (state, post) => {
  state.posts.push(post)
};

export default {
  setPosts,
  addPost
}
