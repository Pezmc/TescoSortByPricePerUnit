/* global chrome */

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url?.includes('tesco.com/groceries')) {
    chrome.pageAction.show(tabId)
    chrome.pageAction.setTitle({
      tabId,
      title: 'Sort page by Price Per Unit',
    })
  } else {
    chrome.pageAction.hide(tabId)
    chrome.pageAction.setTitle({
      tabId,
      title: 'Sorting not available on this page',
    })
  }
}
chrome.tabs.onUpdated.addListener(checkForValidUrl)

chrome.pageAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, { file: 'js/sort.js' })
})
