let chrome = window.chrome;
chrome.runtime.onMessage.addListener(function (request) {
    switch (request.type) {
        case 'test':
            console.log("测试");
            break;
    }
});