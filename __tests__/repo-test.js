jest.dontMock('../repo');
describe('Repo Model', function(){
  var repo;
  beforeEach(function(){
		var $ = require('jquery');
		var Repo = require('../repo');
    repo = new Repo('jcouyang', 'gira');
		$.ajax.mockReturnValue(require('./helper')({stargazers_count: 23}));
	});
	
  it('should populate properties with data from github api', function(){
		repo.fetch();
		expect(repo.follower).toBe(23);
  });
});









