const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.set("view engine", "ejs") //important!!

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	let today = new Date().getDay()
	let day = ""
	if (today === 6 || today === 0) {
		day = "weekend"
	} else {
		day = "weekday"
	}
	res.render("list", { kindOfDay: day })
})

app.listen(4000, () => {
	console.log("Server is running on port 3000")
})
