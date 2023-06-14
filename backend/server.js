import connectDatabase from "./DatabaseConnection/db.js";
import { app } from "./app.js";

const port = 5500

connectDatabase()

const server = app.listen(port, () => {
    console.log(`Server is running on port : ${port} `)
})

