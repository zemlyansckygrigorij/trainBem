      /*play video*/
$(document).on('click', '.demo-film__play', function (e) {
	
    var video = $("#videoPlayer").get(0);
	console.log(video);
    if (video.paused === false) {
        video.pause();
    } else {
        video.play();
    }
    return false;
});