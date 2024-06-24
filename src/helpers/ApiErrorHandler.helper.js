class ApiErrorHandler extends Error {
  constructor(statusCode = 500, message = "Something went wrong", error = null, stack = null) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.error = error;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiErrorHandler;
