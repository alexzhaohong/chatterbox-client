/* eslint-disable func-style */
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    $('#rooms select').append(RoomsView.defaultRooms());
    $('#rooms select').on('click', function() { console.log('room select!!'); } );
    $('#rooms button').on('click', bgChange);
    $('#rooms button').on('click', RoomsView.renderRoom);
  },

  render: function() {

  },

  renderRoom: function(roomName) {
    // should be able to add rooms to DOM
    // if the roomname does not exist, then we want to append it
    // if (roomName !== undefined || roomName === '') {
    //   if (Rooms[roomName] === undefined) {
    //     $('#rooms select').append('<option value="' + roomName + '">' + roomName + '</option>');
    //     Rooms[roomName] = true;
    //   }
    // }

    $('#rooms select').append('<option value="' + roomName + '">' + roomName + '</option>');
  },

  defaultRooms: _.template(`
  <option value="lobby">lobby</option>
  <option value="juniors">juniors</option>
  <option value="seniors">seniors</option>
  <option value="consoleconnoisseurs">consoleconnoisseurs</option>
  `),

};

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
