// Express
let app = require("express")()

// Routes
app.use("/", require("./routes"))

module.exports = app
