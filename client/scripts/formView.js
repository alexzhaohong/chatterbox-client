var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
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
      text: '<img src="https://media.giphy.com/media/3orif3VHjBeYBDTGlG/giphy.gif" alt="Trulli" width="300" height="150">',
      roomname: '',
    };

    Parse.create(message);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

