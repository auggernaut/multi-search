function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function () {
    var port = chrome.runtime.connect({ name: "source" + Math.random().toString().substr(2, 8) });
    document.addEventListener('click', e => {
        var clickedUrl = e.target.closest('a'); 
        if(clickedUrl){
            console.log("Got this element: " + clickedUrl);
            port.postMessage(clickedUrl.toString());
        }
    })
});
