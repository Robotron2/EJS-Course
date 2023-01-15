const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.set("view engine", "ejs") //important!!

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	let today = new Date().getDay()
	let day = ""
	switch (today) {
		case 0:
			day = "Sunday"
			break
		case 1:
			day = "Monday"
			break
		case 2:
			day = "Tuesday"
			break
		case 3:
			day = "Wednesday"
			break
		case 4:
			day = "Thursday"
			break
		case 5:
			day = "Friday"
			break
		case 6:
			day = "Saturday"
			break

		default:
			break
	}
	res.render("list", { kindOfDay: day })
})

app.listen(4000, () => {
	console.log("Server is running on port 4000")
})
