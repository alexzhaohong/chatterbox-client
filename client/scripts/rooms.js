var Rooms = {
  name: '',
  rooms: [],

  switchRoom: function(newRoom) {
    // change Rooms.name
    this.name = newRoom;
  },

  showUsers: function(users) {
    // show the users who are inside of the same chat room
    this.user = users;
  }

};



