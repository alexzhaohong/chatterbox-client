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
    // TODO: Currently, if username or text has XDD or is just undefined it breaks our for loop and our spinner never stops. So I am thinking of cleaning the code by checking each text and username. If they are wonky, delete it. So we won't have one hundred messages, but rather a few less than that.
    for (var i = 0; i < messagesArr.length; i++) {
      MessagesView.renderMessage(messagesArr[i]);
    }

    callback();
  },

  renderMessage: function(message) {
    if (!message.username || !message.text
    ) {
      return;
    }
    if (!message.createdAt) { message.createdAt = 'earlier'; }
    if (!message.roomname) { message.roomname = 'space'; }
    $('#chats').append(MessageView.render(message));
  },

  // MVC Viewer
  // I: message object that stores username, text, room name (all strings)
  // O:
  // C:
  // E:
  // renderMessage: function(message) {
  //   $chats.append(messageView.render());
  // }

};

var message = {text: 'hello', username: 'name'};

// for (var i = 0; i < messagesArr.length; i++) {
// }

// render: function(callback = ()=>{}) {
//   var messagesArr = Messages.data.results;
//   // TODO: Currently, if username or text has XDD or is just undefined it breaks our for loop and our spinner never stops. So I am thinking of cleaning the code by checking each text and username. If they are wonky, delete it. So we won't have one hundred messages, but rather a few less than that.
//   for (var i = 0; i < messagesArr.length; i++) {
//     MessagesView.renderMessage(messagesArr[i]);
//   }

//   callback();
// },

// renderMessage: function(message) {
//   // if (!message.username || !message.text
//   //   // || (message.text.includes('<audio controls autoplay loop>'))
//   //   ) {
//   //   return;
//   // }
//   $('chats').append(MessageView.render(message));
// },