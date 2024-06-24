"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateResetPasswordToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  RESET_PASSWORD_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_EXPIRY
} = process.env;
const generateAccessToken = async user => {
  const {
    id,
    email
  } = user;
  return _jsonwebtoken.default.sign({
    id,
    email
  }, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY
  });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = async user => {
  const {
    id
  } = user;
  return _jsonwebtoken.default.sign({
    id
  }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY
  });
};
exports.generateRefreshToken = generateRefreshToken;
const generateResetPasswordToken = async user => {
  const {
    id,
    email
  } = user;
  return _jsonwebtoken.default.sign({
    id,
    email
  }, RESET_PASSWORD_TOKEN_SECRET, {
    expiresIn: RESET_PASSWORD_TOKEN_EXPIRY
  });
};
exports.generateResetPasswordToken = generateResetPasswordToken;
const verifyToken = async (token, secret) => {
  return _jsonwebtoken.default.verify(token, secret);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=JWTHandler.helper.js.map