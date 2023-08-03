import app from "."
import errorware from "./middlewares/error.middleware"

let port = 4090
app.listen(port,  () => {
    // mySQL connection

    console.log(
        `:::> Server is listening on ${port}`
    )
})

errorware(app)
app.on("error", (error) => {
    console.error(`<::: Server incurred an error: \n ${error}`)
})
