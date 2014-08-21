var mockDefered = jest.genMockFn().mockImplementation(function(data){
	return {
		then: function(cb){
			return mockDefered(cb(data));
		}
	};
});
module.exports = mockDefered;









