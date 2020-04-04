var Messages = {
  data: null,

};


// The message objects you send to the parse server (via POST requests) should be in the following format:
// var message = {
//   username: 'shawndrost',
//   text: 'trololo', // FormView.$form.find('#message').val() //FormView.elements['message'].value
//   roomname: '4chan' // value of first dropdown element called select OR Rooms.selected || 'lobby'
// };

// Rest API Guide
// http://docs.parseplatform.org/rest/guide/

// Rest API Quick Reference; look at Objects and Request Format
// http://docs.parseplatform.org/rest/guide/#quick-reference

// Objects API
//  URL	                                HTTP Verb	  Functionality
// /parse/classes/<className>	            POST	    Creating Objects
// /parse/classes/<className>/<objectId>	GET	      Retrieving Objects
// /parse/classes/<className>/<objectId>	PUT	      Updating Objects
// /parse/classes/<className>	            GET	      Queries
// /parse/classes/<className>/<objectId>	DELETE	  Deleting Objects

// Request Format
// For POST and PUT requests, the request body must be JSON, with the Content-Type header set to application/json.