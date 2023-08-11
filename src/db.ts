import dotenv from "dotenv"
import mysql, { PoolOptions } from "mysql2"
dotenv.config()

const opts: PoolOptions = {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
}
const db = mysql.createPool(opts)

db.on("error", (err) => {
    console.error(`
        <::: Error connecting to database: \n ${err}
    `)
})

process.on("SIGINT", () => {
    db.end()
    process.exit()
})

export default db.promise()