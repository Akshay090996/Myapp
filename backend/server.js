const express = require("express")
const colors = require("colors")
const { connectDB } = require("./config/db")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8000

const { errorHandler } = require("./middleware/errorMiddleware")

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support desk API" })
})

//ROUTES
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
