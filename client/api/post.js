import request from './request';

const posts = () => {
  return request.get('api/posts')
    .then(res => res.data);
}

const getPostsLimit = (limit) => {
  return request.get(`api/posts/${limit}`)
    .then(res => res.data);
}

const getPost = (id) => {
  return request.get(`api/post/${id}`)
    .then(res => res.data);
}

const makePost = (post) => {
  return request.post('api/post', post)
    .then(res => res.data);
}

const getUserPosts = (id) => {
  return request.get(`api/user/${id}/posts`)
    .then(res => res.data);
}

export default {
  getPost,
  posts,
  getPostsLimit,
  makePost,
  getUserPosts
}
