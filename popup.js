document.getElementById("approveButton").addEventListener("click", () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        function: clickVisibleButton
    });
});
