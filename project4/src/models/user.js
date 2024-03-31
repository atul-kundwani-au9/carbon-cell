
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
  ];
  
  class User {
    constructor(id, username, password) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
  
    static findByCredentials(username, password) {     
      return users.find(u => u.username === username && u.password === password);
    }
  }
  
  module.exports = User;
  