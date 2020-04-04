var MessagesView = {

  //using jQuery to find the chats 'div' and store in the variable.
  chats: $('#chats'),

  // TODO: I don't know what this function is for
  initialize: function() {
    // MessagesView.$chats.html(''); Convert the divs to strings??

    // TODO Initialize again sometimes?
  },

  // Take in messages and use $chats big guy. For each chat in $chats, make the message appear (in the right room)
  render: function(callback = ()=>{}) {
    var messagesArr = Messages.data.results;
    // TODO: Currently, if username or
    for (var i = 0; i < messagesArr.length; i++) {
      $('#chats').append(MessageView.render(messagesArr[i]));
    }

    callback();
  },

  // msg Get - asych
  // msg Render
  // spin Stop

  // MVC Viewer
  // I: message object that stores username, text, room name (all strings)
  // O:
  // C:
  // E:
  // renderMessage: function(message) {
  //   $chats.append(messageView.render());
  // }

};
