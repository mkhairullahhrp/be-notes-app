//errorHandler() yang nantinya bakal kita set di konfigurasi utama
// di dalam file app.js untuk dijadikan middleware error handling

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server error",
  });
};

export default errorHandler;
