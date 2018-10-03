
console.log('A message')


$(document).ready(function() {
	$('.showPlz').click(function() {
    //		chrome.runtime.sendMessage({ showPlz: true })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {hidePlz: false}, function(response) {
            console.log(response.farewell);
        });
    });

            console.log('ShowPlz clicked')
        })
        
    $('.hidePlz').click(function() {
//		chrome.runtime.sendMessage({ hidePlz: true })
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {hidePlz: true}, function(response) {
            console.log(response.farewell);
        });
    });
        console.log('HidePlz clicked')
        })

})



