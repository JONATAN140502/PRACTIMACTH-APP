/**
 * API
 * !backend: Laravel
 */

import axios from "axios";

export default {
  get(request, success, danger) {
    axios
      .get(request.url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          Authorization: `Bearer ${request.token}`,
        },
      })
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-get en api.js ${error}`);
      });
  },

  getplaca(request, success, danger) {
    axios
      .get(request.url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-get en api.js ${error}`);
      });
  },

  post(request, success, danger) {
    axios
      .post(request.url, request.params, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          Authorization: `Bearer ${request.token}`,
        },
      })
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-post en api.js ${error}`);
      });
  },

  update(request, success, danger) {
    axios
      .patch(request.url, request.params)
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-update en api.js ${error}`);
      });
  },

  destroy(request, success, danger) {
    axios
      .delete(request.url, { data: request.params ? request.params : {} })
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-destroy en api.js ${error}`);
      });
  },

  postWithFile(request, success, danger) {
    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(request.url, request.formData, config)
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-post-with-file en api.js ${error}`);
      });
  },

  post_sin_bus(request, success, danger) {
    axios
      .post(request.url, request.params, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          Authorization: `Bearer ${request.token}`,
        },
      })
      .then(
        (res) => {
          success(res);
        },
        (err) => {
          window.Vue.httpCode.accordingStatus(err.response);
          danger(err.response);
        }
      )
      .catch((error) => {
        console.log(`Error-post en api.js ${error}`);
      });
  },
};
