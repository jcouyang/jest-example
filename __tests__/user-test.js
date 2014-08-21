jest.dontMock('../user');
describe('User Model', function(){
  var user;
  beforeEach(function(){
		var $ = require('jquery');
		var User = require('../user');
    user = new User('jcouyang');
		$.ajax.mockReturnValue(require('./helper')({followers: 23}));
	});
	
  it('should populate properties with data from github api', function(){
		user.fetch();
		expect(user.followers).toBe(23);
  });
});









