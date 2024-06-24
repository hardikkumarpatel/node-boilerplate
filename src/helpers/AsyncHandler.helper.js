const AsyncHandlerHelper = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export default AsyncHandlerHelper;
