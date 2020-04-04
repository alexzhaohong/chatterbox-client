var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    //********* Psuedocode */

    // get text, username, roomname, store as message
    // make a POST request by calling Parse.create, sending message
    // -- this should update data.results.'messagelog'
    // -- refresh the messagesView
    // -- maybe store in var Messages in messages.js somehow?

    //********* Code */

    // use Messages from messages.js
    // Parse.create(message, successCallBack, errorCallBack = null)

    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').val() || '',
    };

    Parse.create(message);

    console.log('click!');

    // TODO: Fetch messages (new only)
    $('#chats').prepend('<div>click! new message added!</div>');

    // Fetch batch of messages
    App.startSpinner();
    App.fetch(MessagesView.render);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

