import Jwt from "jsonwebtoken";
const {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  RESET_PASSWORD_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_EXPIRY
} = process.env;

const generateAccessToken = async (user) => {
  const { id, email } = user;
  return Jwt.sign(
    {
      id,
      email
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY
    }
  );
};

const generateRefreshToken = async (user) => {
  const { id } = user;
  return Jwt.sign(
    {
      id
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
};

const generateResetPasswordToken = async (user) => {
  const { id, email } = user;
  return Jwt.sign(
    {
      id,
      email
    },
    RESET_PASSWORD_TOKEN_SECRET,
    {
      expiresIn: RESET_PASSWORD_TOKEN_EXPIRY
    }
  );
};

const verifyToken = async (token, secret) => {
  return Jwt.verify(token, secret);
};

export { generateAccessToken, generateRefreshToken, generateResetPasswordToken, verifyToken };
