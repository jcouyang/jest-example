var $ = require('jquery');
function User(name) {
  this.name = name;
  this.followers = 0;
}
User.prototype.fetch = function(){
  return $.ajax({
    url: 'https://api.github.com/users/jcouyang',
    method: 'get',
    dataType: 'json'
  }).then(function(data){
      this.followers = data.followers;
  }.bind(this));
};
module.exports = User;




