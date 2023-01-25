const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.set("view engine", "ejs") //important!!

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public")) //use static  files like CSS

let items = []

app.get("/", (req, res) => {
	let today = new Date()
	let options = {
		weekday: "long",
		// year: "numeric",
		month: "long",
		day: "numeric"
	}
	let day = today.toLocaleDateString("en-US", options)
	res.render("list", { kindOfDay: day, newListItems: items })
})

app.post("/", (req, res) => {
	let item = req.body.newItem
	items.push(item)
	res.redirect("/")
})

app.listen(4000, () => {
	console.log("Server is running on port 4000")
})
