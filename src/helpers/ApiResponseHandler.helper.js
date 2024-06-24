class ApiResponseHandler {
  constructor(statusCode = 200, message = "Success", data = null) {
    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.error = null;
    this.data = data;
  }
}

export default ApiResponseHandler;
