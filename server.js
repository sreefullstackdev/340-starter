/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const dotenv = require("dotenv").config()
const static = require("./routes/static")
const db = require("./database/db")

/* App Initialization*/

const app = express()


/* View Engine and Templates */
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root
app.use(express.static("public"))
app.use(static)

// Add your test route here
app.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()")
    res.send(`Database time: ${result.rows[0].now}`)
  } catch (err) {
    console.error("Database error:", err)
    res.status(500).send("Database connection failed")
  }
})


/* ***********************
 * Routes
 *************************/
app.use(static)

app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"



/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on http://${host}:${port}`)
})

//Index route
app.get("/", function(req, res){
  res.render("index", {title: "Home"})
})