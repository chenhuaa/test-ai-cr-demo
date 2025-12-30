import qs from 'qs';
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ElMessage } from 'element-plus';

export const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : '/';

const service = axios.create({
  timeout: 10000,
  baseURL: baseUrl,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['Authorization'] = localStorage.getItem('token') || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    ElMessage.error({
      message:
        error.response.data?.error?.details[0].description ?? error.message,
      type: 'error',
      customClass: 'global-message',
    });
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

function get(url: string, params?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params,
        ...config,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function post(url: string, data?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .post(url, data, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function postForm(url: string, data?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .post(url, qs.stringify(data), config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function put(url: string, data?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .put(url, data, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function putForm(url: string, data?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .put(url, qs.stringify(data), config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function remove(url: string, params?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .delete(url, {
        params,
        ...config,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function patch(url: string, data?: object, config?: object): any {
  return new Promise((resolve, reject) => {
    service
      .patch(url, data, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  get,
  post,
  postForm,
  put,
  putForm,
  delete: remove,
  patch,
};
