var $ = require('jquery');
function Repo(owner, repo) {
  this.owner = owner;
  this.name = repo;
	this.stargazers_count = 0;
}
Repo.prototype.fetch = function(){
  return $.ajax({
    url: 'https://api.github.com/repos/' + this.owner + '/' + this.name,
    method: 'get',
    dataType: 'json'
  }).then(function(data){
      this.follower = data.stargazers_count;
  }.bind(this));
};
module.exports = Repo;
