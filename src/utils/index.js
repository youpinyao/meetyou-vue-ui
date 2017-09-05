import uuidV4 from 'uuid/v4';

const utils = {
  each,
  isNull,
  isEmpty,
  isArray,
  uuid,
  href,
  fullPath,
};

export default utils;

function href(path, params) {
  let newPath = '';

  if (isObject(path)) {
    const route = path;
    newPath = fullPath(route);

    if (isNull(params)) {
      params = route.params;
    }
  } else {
    newPath = `${path}`;
  }

  setPathParams(newPath, params);

  return newPath;
}

function setPathParams(path, params) {
  let newPath = `${path}`;

  if (isArray(path)) {
    newPath = path.join('/');
  }

  each(params, (value, key) => {
    const reg = new RegExp(`:${key}`, 'g');
    newPath.replace(reg, value);
  });

  if (isArray(path)) {
    return newPath.split('/');
  }

  return newPath;
}

function fullPath(route) {
  let pathArr = [];

  pathArr.push(route.path);
  pathArr = setPathParams(pathArr, route.params);
  while (route.parent) {
    pathArr.unshift(href(route.parent.path, route.parent.params || {}));
    pathArr = setPathParams(pathArr, route.parent.params);
    route = route.parent;
  }

  return pathArr.join('/');
}

function each(data, callback) {
  if (!data) {
    return;
  }

  if (isObject(data)) {
    if (!isNaN(data.length)) {
      data.forEach((v, k, f) => {
        callback.call(v, v, k, f);
      });
    } else {
      const items = Object.keys(data);
      each(items, (v) => {
        callback.call(data[v], data[v], v, data);
      });
    }
  }
}

function isNull(value) {
  if (value === '' || value === undefined || value === null) {
    return true;
  }
  return false;
}

function isEmpty(data) {
  if (isNull(data)) {
    return true;
  }
  let count = 0;

  each(data, () => {
    count += 1;
  });

  return count <= 0;
}

function isObject(data) {
  return typeof data === 'object' && data !== null;
}

function isArray(data) {
  if (Array.isArray) {
    return Array.isArray(data);
  }
  if (typeof data === 'object' && data && data.length) {
    return true;
  }
  return false;
}

function uuid() {
  // const uuidV1 = require('uuid/v1');
  // uuidV1();
  // const uuidV4 = require('uuid/v4');
  return uuidV4();
}
