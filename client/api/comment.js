import request from './request';

const makeComment = (postId) => {
  return request.post(`api/post/${postId}/comment`)
    .then(res => res.data);
}

const getPostComments = (postId) => {
  return request.get(`api/post/${postId}/comment`)
    .then(res => res.data);
}

const getUserComments = (userId) => {
  return request.get(`api/user/${userId}/comment`)
    .then(res => res.data);
}

export default {
  makeComment,
  getPostComments,
  getUserComments
}
