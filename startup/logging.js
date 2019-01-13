const winston = require("winston");
require("express-async-errors");

module.exports = function() {
  // if (process.env.NODE_ENV !== "production") {
  //   winston.add(
  //     new winston.transports.Console({
  //       format: winston.format.simple()
  //     })
  //   );
  // }
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.exceptions.handle(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );
  process.on("unhandledRejection", ex => {
    throw ex;
  });
};
