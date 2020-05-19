import request from './request';

const profile = () => {
  return request.get('api/profile')
  .then((res) => res.data)
}

export default {
  profile
}
