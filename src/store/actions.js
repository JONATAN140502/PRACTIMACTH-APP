import api from "../api";
import { bus } from "../main";

/**********************************************************************
 * *Actions for crud's
 * !do not modify, actions used by all components
 **********************************************************************/

export const get = ({ commit }, request) => {
  return new Promise((resolve, reject) => {
    bus.$emit("loading", true);
    api.get(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        setTimeout(() => {
          bus.$emit("loading", false);
        }, 500);
      },
      error => {
        reject(error);
        bus.$emit("loading", false);
      }
    );
  });
};

export const getplaca = ({ commit }, request) => {
  return new Promise((resolve, reject) => {
    bus.$emit("loading", true);
    api.getplaca(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        setTimeout(() => {
          bus.$emit("loading", false);
        }, 500);
      },
      error => {
        reject(error);
        bus.$emit("loading", false);
      }
    );
  });
};

export const post = ({ commit }, request) => {
  return new Promise((resolve, reject) => {
    bus.$emit("loading", true);

    api.post(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        if (bus) {
          setTimeout(() => {
            bus.$emit("loading", false);
          }, 500);
        }
      },
      error => {
        reject(error.data.errors);
        if (bus) bus.$emit("loading", false);
      }
    );
  });
};

export const destroy = ({ commit }, request) => {
  bus.$emit("loading", true);
  return new Promise((resolve, reject) => {
    api.destroy(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        setTimeout(() => {
          bus.$emit("loading", false);
        }, 500);
      },
      error => {
        reject(error);
        bus.$emit("loading", false);
      }
    );
  });
};

export const update = ({ commit }, request) => {
  bus.$emit("loading", true);
  return new Promise((resolve, reject) => {
    api.update(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        setTimeout(() => {
          bus.$emit("loading", false);
        }, 500);
      },
      error => {
        reject(error.data.errors);
        bus.$emit("loading", false);
      }
    );
  });
};

export const create = ({ commit }, request) => {
  bus.$emit("loading", true);
  return new Promise((resolve, reject) => {
    api.update(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        setTimeout(() => {
          bus.$emit("loading", false);
        }, 500);
      },
      error => {
        reject(error.data.errors);
        bus.$emit("loading", false);
      }
    );
  });
};

export const postWithFile = ({ commit }, request) => {
  bus.$emit("loading", true);
  return new Promise((resolve, reject) => {
    api.postWithFile(
      request,
      response => {
        if (request.mutation) commit(request.mutation);
        resolve(response.data);
        bus.$emit("loading", false);
      },
      error => {
        reject(error.data.errors);
        bus.$emit("loading", false);
      }
    );
  });
};

export const execute_commit = ({ commit }, request) => {
  if (request.payload) commit(request.mutation, request.payload);
  else commit(request.mutation);
};

export const post_sin_bus = ({ commit }, request) => {
  return new Promise((resolve, reject) => {
    api.post_sin_bus(
      request,
      response => {
        if (request.mutation) commit(request.mutation, response.data);
        resolve(response.data);
        if (bus) {
          setTimeout(() => {
            bus.$emit("loading", false);
          }, 500);
        }
      },
      error => {
        reject(error.data.errors);
        if (bus) bus.$emit("loading", false);
      }
    );
  });
};
