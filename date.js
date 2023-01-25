exports.getDate = function getDate() {
	const today = new Date()
	const options = {
		weekday: "long",
		// year: "numeric",
		month: "long",
		day: "numeric"
	}
	const day = today.toLocaleDateString("en-US", options)
	return day
}

exports.getDay = function getDay() {
	const today = new Date()
	const option = {
		weekday: "long"
	}
	const day = today.toLocaleDateString("en-US", option)
	return day
}
