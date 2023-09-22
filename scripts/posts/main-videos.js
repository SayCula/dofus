const MainVideos = document.querySelector("#main-videos");

MainVideos.innerHTML = `
<div id="ls-videos">
            <div id="videos">
                <div id="vid-one">
                    <div id="vid-text">
                        <h2>this video for tuto Color Picker</h2>
                        <p>best Picker </p> 
                        <a id="btn-change" href="http://" target="_blank"></a>
                    </div>
                    <video controls src="videos/test.mp4" width="480px"></video>
                </div>
        
                <div id="vid-two">
                    <div id="vid-text">
                        <h2>this video for tuto Color Picker</h2>
                        <p>best Picker </p>
                        <a href="http://" target="_blank"> Click here</a>
                    </div>
                    <video controls src="videos/test.mp4" ></video>
                </div>
            </div>
        </div>
`;