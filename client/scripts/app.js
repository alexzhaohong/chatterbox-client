var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  data: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(MessagesView.render);
    App.$roomSelect = $('#room select');

    // TODO: Fetch again so I don't have to manually reload the page
    setInterval(App.startSpinner, 5000);
    setInterval(App.stopSpinner, 6000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // data is an Object with .results, which is an Array of 100 "message" Objects
      // messages have objectId, username, roomname, text,

      // TODO: Send 'data.results' aka 'message logs' to messages.js and rooms.js

      // SEE data
      Messages.data = data;

      callback(App.stopSpinner);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);

  }
};






// OUTPUT
// 'first'
// 'second'
