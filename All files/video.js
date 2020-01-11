var vid,playpausebtn,seekbar,currtimetext,durtimetext,mutebtn,soundbar,
	screentoggler ;

function InitializePlayer() {
	
	// Set object references
	vid = document.getElementById("my_video");
	playpausebtn = document.getElementById("my_btnPlayPause");
	seekbar = document.getElementById("my_seekbar");
	currtimetext = document.getElementById("my_currtimetext");
	durtimetext = document.getElementById("my_durtimetext");
	mutebtn = document.getElementById("my_btnMute");
	soundbar = document.getElementById("my_soundbar");
	screentoggler = document.getElementById("my_btnFullScreen");
	
	// Add event listeners
	playpausebtn.addEventListener("click",playPause,false);
	seekbar.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seekTimeUpdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	soundbar.addEventListener("change",soundSeek,false);
	screentoggler.addEventListener("click",toggleScreen,false);

}

window.onload = InitializePlayer;

function playPause(){	

	if (vid.paused) {
		vid.play();
		playpausebtn.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
	} else {
		vid.pause();
		playpausebtn.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
	}
	
}


function vidSeek() {
	
	var seekto = vid.duration * (seekbar.value / 100);
	vid.currentTime = seekto ;
	
}


function seekTimeUpdate() {
	
	//Seekbar follows the video when it plays
	var newtime = vid.currentTime * (100 / vid.duration);
	seekbar.value = newtime;
	
	//Showing the time
	var currmins = Math.floor(vid.currentTime / 60);
	var currsecs = Math.floor(vid.currentTime - currmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.round(vid.duration - durmins * 60);
	
	if(currsecs < 10){currsecs = "0" + currsecs;}
	if(dursecs < 10){dursecs = "0" + dursecs;}
	if(currmins < 10){currmins = "0" + currmins;}
	if(durmins < 10){durmins = "0" + durmins;}
	
	currtimetext.innerHTML = currmins + ":" + currsecs;
	durtimetext.innerHTML = durmins + ":" + dursecs;
	
}


function vidmute() {
	if (vid.muted) {
		vid.muted = false;
		mutebtn.innerHTML = "<i class='fa fa-volume-up' aria-hidden='true'></i>";
		soundbar.value = 100;	
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "<i class='fa fa-volume-off' aria-hidden='true'></i>";
		soundbar.value = 0;	
	}
}


function soundSeek() {
	vid.volume = soundbar.value / 100;
}


function toggleScreen() {
	if(vid.requestFullSreen){
		vid.requestFullSreen();
	}else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	}else if(vid.mozRequestFullSceen){
		vid.mozRequestFullSceen();
	}
}


















