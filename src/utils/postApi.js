import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
/* export default function request2(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
} */

export default async function postApi(options) {
  const { url, param, method, headers, formData } = options;
  // const option = {};
  // option.method = method;
  // option.mode = 'cors';
  // option.data = param;
  // if (method === 'post') {
  //   option.body = 'workName=test';
  // }
  const response = await fetch(url, {
    method,
    mode: 'cors',
    data: param,
    headers,
    body: JSON.stringify(formData),
  });
  checkStatus(response);
  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };
  return ret;
}



