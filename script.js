// Function to get a query parameter from the URL
function getQueryParam(param) {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

// Function to set the video source and play it
function setVideoSourceAndPlay() {
    // Extract the videoUrl parameter from the URL
    let videoUrl = getQueryParam('videoUrl');

    // Correct path backslashes and set the video source dynamically
    if (videoUrl) {
        videoUrl = videoUrl.replace(/\\/g, '/'); // Ensure correct path format
        document.getElementById('valentines-video').src = videoUrl;
        document.getElementById('valentines-video').play(); // Start playing the video
    }
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");

    yesBtn.addEventListener("click", function() {
        let videoUrls = [
            "memes/video.mov",
            "memes/video1.mov",
            "memes/video2.mov",
            "memes/video3.mov",
            "memes/video4.mov",
            "memes/video5.mov",
            "memes/video6.mov",
            "memes/video7.mov",
            "memes/video8.mov",
            "memes/video9.mov",
            "memes/video10.mov",
            "memes/video11.mov",
            "memes/video12.mov",
        ];

        let randomIndex = Math.floor(Math.random() * videoUrls.length);
        let randomVideoUrl = videoUrls[randomIndex];

        // Redirect to video.html with video URL as query parameter
        window.location.href = "video.html?videoUrl=" + encodeURIComponent(randomVideoUrl);
    });

    // You can handle the "No" button action here if needed
    noBtn.addEventListener("click", function() {
        // Handle the "No" button click action here if needed
    });

    // Set the video source and play it if the video URL is provided in the query parameter
    setVideoSourceAndPlay();
});
