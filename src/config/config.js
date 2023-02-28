require("dotenv").config()

module.exports.config = {
    port: process.env.port,
    jwt: process.env.jwt,
    db: process.env.db
}