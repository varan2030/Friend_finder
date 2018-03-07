// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// Below code handles when users home or the survey page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
	app.get('/', function (request, result) {
		result.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function (request, result) {
		result.sendFile(path.join(__dirname + '/../public/survey.html'));
	});	
};