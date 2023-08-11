import app from "."
import errorware from "./middlewares/error.middleware"

let port = process.env.PORT
app.listen(port, () => {
    console.log(
        `:::> Server is listening on ${port}`
    )
})

errorware(app)
app.on("error", (error) => {
    console.error(`<::: Server incurred an error: \n ${error}`)
})