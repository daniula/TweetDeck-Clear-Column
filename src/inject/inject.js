/* global chrome, $ */
chrome.extension.sendMessage({}, function() {
    $(function(){
        $(document).on('keyup', function(event){
            var key = parseInt(String.fromCharCode(event.keyCode), 10);
            var selector = '.js-chirp-container';
            if (event.altKey && !isNaN(key)) {
                if (key > 0) {
                    selector += ':eq(_)'.replace('_', key - 1);
                }
                $(selector).empty();
            }
        });
    });
});
