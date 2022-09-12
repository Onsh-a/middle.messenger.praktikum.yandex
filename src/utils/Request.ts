import { RequestQuery, RequestQueryExtended } from './types';

export default class HTTPTransport {
  METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  }

  get = (url:string, options:RequestQuery = {}) => {
    url = url + this.transformToGetQuery(options.data || {});
    options.data = {};
    return this.request(url, {...options, method: this.METHODS.GET});
  };

  put = (url:string, options:RequestQuery = {}) => {
    return this.request(url, {...options, method: this.METHODS.PUT});
  };

  delete = (url:string, options:RequestQuery = {}) => {
    return this.request(url, {...options, method: this.METHODS.DELETE});
  };

  post = (url:string, options:RequestQuery = {}) => {
    return this.request(url, {...options, method: this.METHODS.POST});
  }

  transformToGetQuery = (data:Record<string, string>) => {
    return Object.keys(data).reduce((acc, key, index) => {
      return acc += `${index === 0 ? '?' : '&'}${key}=${data[key]}`;
    }, '')
  }

  request = (url:string, options:RequestQueryExtended, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url || '/');
      xhr.timeout = timeout;
      if (options.headers) {
        Object.keys(options.headers).forEach((key:string) => {
          if (options.headers) {
            // почему-то тайпскрипт ругается на то,
            // что options.headers может быть undefined
            // поэтому пришлось добавить вторую проверку
            xhr.setRequestHeader(key, options.headers[key]);
          }
        });
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr);
          } else {
            resolve(xhr)
          }
        }
      }

      xhr.ontimeout = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
      if (options.data) {
        xhr.send(JSON.stringify(options.data));
      } else {
        xhr.send();
      }
    })
  };
}
