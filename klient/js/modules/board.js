var MODboard = function(sb){
	var container, show, receiveMessage, hide, username;

	show = function(data, topic) {
		username = data;
		console.log(username);
		sb.addClass(sb.CSSchat, 'expanded');
		setTimeout(sb.fadeToggleModule,600);
	};
	hide = function(data, topic) {
		sb.removeClass(sb.CSSchat, 'expanded');
		sb.toggleModule();
	};
	receiveMessage = function(data, topic) {
		var message = data.message,
			room = data.room,
			sender = data.sender
			now = new Date(),
			additionalClass = (username === sender) ? 'mine' : '',
			msgTemplate = '<li class="msgContainer clearfix"><div class="avatar '+additionalClass+'"><div class="nick">'+sender+'</div></div><div class="message '+additionalClass+'"><div class="bubble">'+message+'<div class="info">'+now.toString().match(/\d\d:\d\d:\d\d/)[0]+'</div></div></div></li>',
            room = sb.find('.room_'+room)[0];
            if(room) {
            	sb.append(room, msgTemplate);
            	sb.scrollTop(room, room.scrollHeight);
            }
	};
	return {
	    init: function() {
	    	container = sb.find(sb.CSSmessagesContainer)[0];
	    	sb.on('loggedIn', show);
	    	sb.on('loggedOut', hide);
	    	sb.on('WSreceivedMessage', receiveMessage);
	    },
	    destroy: function() { 
	    	sb.off('loggedIn');
	    	container = null;	
	    }
	};
};