const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.set("view engine", "ejs") //important!!

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public")) //use static  files like CSS

//Use local modules

const date = require(`${__dirname}/date.js`)

let items = []
let workItems = []

app.get("/", (req, res) => {
	let day = date()
	res.render("list", { listTitle: day, newListItems: items })
})

app.post("/", (req, res) => {
	let item = req.body.newItem
	if (req.body.list === "Work") {
		workItems.push(item)
		res.redirect("/work")
	} else {
		items.push(item)
		res.redirect("/")
	}
})

//Work Route

app.get("/work", (req, res) => {
	res.render("list", { listTitle: "Work List", newListItems: workItems })
})

app.post("/work", (req, res) => {
	let workItem = req.body.newItem
	workItems.push(workItem)
	res.redirect("/work")
})

//About Route
app.get("/about", (req, res) => {
	res.render("about")
})

app.listen(4000, () => {
	console.log("Server is running on port 4000")
})
