var MODuserlist = function(sb){
	var list, reactor, showList, toggle;

	toggle = function() {
		sb.slideToggle();
	};
	showList = function(users) {
		sb.clear(list);
		var addClass = '';
		for(var i=0, len=users.length; i<len; i++){
			if(users[i]==="thefox") {
				addClass="fox";
			}
			sb.append(list, "<li class=\"user "+addClass+"\">"+users[i]+"</li>");
			addClass = '';
		}
	};
	reactor = function(data, topic) {
		if(data.status==104) {
			showList(data.message);
		}
	};
	return {
	    init: function() {
	    	list = sb.find(sb.CSSuserList)[0];
	    	sb.on('loggedIn', toggle);
	    	sb.on('loggedOut', toggle);
	    	sb.on('WSresponse', reactor);
	    },
	    destroy: function() { 
	    	sb.off('WSresponse');
	    	sb.off('loggedIn');
	    	list = null;	
	    }
	};
};