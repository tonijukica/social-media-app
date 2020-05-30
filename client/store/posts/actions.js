import api from '@/api/post';

const fetchPosts = ({ commit }) => {
  return api.posts()
    .then(data => {
      commit('setPosts', data);
    })
    .catch((err) => {
      commit('setError', err.message)
    });
}

const newPost = ({ commit }, { title, postText }) => {
  return api.makePost({
    title,
    text: postText
  })
    .then(() => {
      commit('addPost', {
        title,
        postText
      })
    })
    .catch((err) => {
      commit('setError', err.message)
    });
}

const toggle = ({commit}) => {
  commit('toggleDialog');
}

export default {
  fetchPosts,
  newPost,
  toggle,
}
