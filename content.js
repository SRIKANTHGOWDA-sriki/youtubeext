(()=>{ 
    let youtubeLeftControls,youtubePlayer;
    let currentVideo="";

    chrome.runtime.onMessage.addListener((obj, sender, respone) => {
        const{type, value, videoId}= obj;

        if (type === "NEW")
        {
            currentVideo= videoId;
            newVideoLoaded();
        }
    })
})();