jest.dontMock('../repo');
describe('Repo Model', function(){
  var repo;
  beforeEach(function(){
		var $ = require('jquery').setAjaxReturn({stargazers_count: 23});
		var Repo = require('../repo');
    repo = new Repo('jcouyang', 'gira');

	});
	
  it('should populate properties with data from github api', function(){
		repo.fetch();
		expect(repo.followers).toBe(23);
  });
});
