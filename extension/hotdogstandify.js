// TODO: automate creating this file
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'var el = document.querySelectorAll("*"), i; for(i = 0; i < el.length; i++){el[i].style.setProperty("background", "red", "important"); el[i].style.setProperty("color", "yellow", "important")}'
  });
});
