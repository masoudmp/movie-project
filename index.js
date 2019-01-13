const logger = require("winston");
const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new logger.transports.Console({
      format: logger.format.simple()
    })
  );
}

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  logger.info(`Listening on port ${port}...`)
);
module.exports = server;
