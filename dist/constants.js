"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RAYGUN_REQ_FIELDS = exports.RAYGUN_ENDPOINT = exports.PLUGIN_NAME = void 0;
const PLUGIN_NAME = 'RaygunSourceMapPlugin';
exports.PLUGIN_NAME = PLUGIN_NAME;
const RAYGUN_ENDPOINT = 'https://app.raygun.com/upload/jssymbols/';
exports.RAYGUN_ENDPOINT = RAYGUN_ENDPOINT;
const RAYGUN_REQ_FIELDS = ['accessToken', 'appId', 'publicPath'];
exports.RAYGUN_REQ_FIELDS = RAYGUN_REQ_FIELDS;