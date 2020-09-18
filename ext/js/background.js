chrome.browserAction.onClicked.addListener((_tabs) => {
  console.log('RUNNING')
  chrome.tabs.executeScript(null, { file: 'js/sort.js' })
})
