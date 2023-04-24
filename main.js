let video = document.querySelector("#video");
const videoSrc = localStorage.getItem('videoSrc');

window.onload = function () {
    let $ = function (id) { return document.getElementById(id) }
    let v = $("video");

    $("rewindForward").onclick = function () {
        v.currentTime += 5;
    };

    $("rewindBack").onclick = function () {
        v.currentTime -= 5;
    };

    $("stopButton").onclick = function () {
        v.pause();
        v.currentTime = 0;
        $("playButton").src = "assets/images/start.png";
    };
    $("fullButton").onclick = function () {
        let elem = $("video");

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };

    $("playButton").onclick = function (e) {
        if (v.paused) {
            v.play();
            e.target.src = "assets/images/pause.png";

        }
        else {
            v.pause();
            e.target.src = "assets/images/start.png";
        }
    };

    const buttons = document.querySelectorAll('.videoTrack');
    let video = document.querySelector("#video");
    buttons.forEach(trackBtn => {
        trackBtn.addEventListener('click', function () {
            const videoSrc = `
                <source src="./assets/videos/${this.dataset.src}.mp4"/>`
            video.innerHTML = videoSrc;
            localStorage.setItem('videoSrc', videoSrc);
            video.load();
            video.play();
        });
    })

}
