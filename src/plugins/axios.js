"use strict";

import Vue from 'vue';
import axios from "axios";
import store from "@/store/index.js";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if(location.href.includes("local")){
      //로컬 서버
      //api 호스트 주소
      config.baseURL = "http://localhost:3005";
    }
    // Do something before request is sent
    //content type : json
    config.headers.put['Content-Type'] = 'application/json';

    //axios 타임아웃 1초
    config.timeout = 2000;

    //서버에서 받은 토큰값을 쿠기에 저장을 할시 true, 저장을 안할시에는 false
    // api 호스트 주소와 같은 오리진을 사용할경우 request header 에 쿠기가 자동적으로 생성이 되는데
    // 다른 오리진일경우에는 생성이되지 않습니다, 이떄 이를 해결하기위해 프론트단에서는 withCredentials 을 true로 설정해줍니다
    config.withCredentials = false;

    //토큰 등록
    if(store.state.token != ""){
      config.headers.common["Authorization"] = "Bearer " + store.state.token;
    }

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
