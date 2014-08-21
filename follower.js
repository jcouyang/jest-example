var User = require('./user');
var Repo = require('./repo');
var $ = require('jquery');
function followerOf(user, repo) {
  user.fetch().then(repo.fetch).then(function(_){
    $('#content').text(user.name +"'s followers: " + user.followers +
                       " and his repo "+ repo.name +"'s followers:" + repo.followers);
	});
};

module.exports = followerOf;

	
