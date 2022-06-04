chrome.tabs.onUpdated.addListener((tabId,tab)=> {
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new UrlSearchParams(queryParameters);
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "New",
            videoId: urlParameters.get("v"),
        })
    }
})