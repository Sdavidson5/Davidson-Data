const video = document.getElementById("main-video");
        const clipBtn = document.getElementById("clip-btn");
        const clipsContainer = document.getElementById("clips");

        clipBtn.addEventListener("click", () => {
            if (video.currentTime < 5) {
                alert("Not enough video played to clip!");
                return;
            }

            const clipStart = video.currentTime - 5;
            const clipEnd = video.currentTime;

            const newClip = document.createElement("video");
            newClip.src = `${video.src}#t=${clipStart},${clipEnd}`;
            newClip.controls = true;
            clipsContainer.appendChild(newClip);
        });