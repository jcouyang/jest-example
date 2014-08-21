var data = {};
var mockDefered = function(data){
	return {
		then: function(cb){
			return mockDefered(cb(data));
		}
	};
};

function ajax() {
  return mockDefered(data);
}

function setAjaxReturn(shouldbe){
	data = shouldbe;
}
exports.setAjaxReturn = setAjaxReturn;
exports.ajax = ajax;






