jest.dontMock('../follower');
jest.dontMock('jquery');
describe('follower', function(){
  var user, repo, follower;
	var $ = require('jquery');
  beforeEach(function(){
		var Repo = require('../repo');
		var User = require('../user');
		follower = require('../follower');
		user = new User('jcouyang');
    repo = new Repo('jcouyang', 'gira');
		user.fetch.mockReturnValue(require('./helper')('dont care'));
		user.name ='jcouyang';
		user.followers = 20;
		repo.fetch.mockReturnValue(require('./helper')('dont care'));
		repo.name = 'gira';
		repo.followers = 21;
		document.body.innerHTML = '<div id="content"></div>';
	});
	
  it('should populate properties with data from github api', function(){
		follower(user,repo);
		expect($("#content").text()).toBe('jcouyang\'s followers: 20 and his repo gira\'s followers:21');
  });
});
