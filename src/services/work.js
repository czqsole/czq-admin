import request from '../utils/request';
import postApi from '../utils/postApi';

const queryUrl = 'http://127.0.0.1:8080/api/work/query';
const addUrl = 'http://127.0.0.1:8080/api/work/add';

export function query(data) {
  return request({
    url: queryUrl,
    method: 'get',
  });
}

export function add(data) {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
  };
  return postApi({
    url: addUrl,
    method: 'post',
    formData: data,
    headers,
  });
}
