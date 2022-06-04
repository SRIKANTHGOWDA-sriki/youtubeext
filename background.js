chrome.tabs.onUpdated.addlistener((tabId,tab)=> {
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = newUrlSearchParams(queryParameters);
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "New",
            videoId: urlParameters.get("v"),
        })
    }
})