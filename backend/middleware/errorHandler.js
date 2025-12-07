const errorHandler = (err, req, res, next) => {
  const error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    error.message = "Resource not found";
    error.statusCode = 404;
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error.message = messages || "Validation failed";
    error.statusCode = 400;
  }

  if (err.code === 11000) {
    error.message = `Email already in use`;
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
  });
};

module.exports = errorHandler;
