import dotenv from "dotenv"
import "express-async-errors"

import cors from "cors"
import morgan from "morgan"
import router from "./routes/recipe.route"
import express, { Application } from "express"
dotenv.config()

const app: Application = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/v1", router)

export default app