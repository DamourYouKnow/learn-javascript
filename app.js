(function($, hljs){
    $(document).ready(function() {
        $('.lesson-link').click(function() {
            let lessonPath = $(this).attr('path') + "lesson.md";
            loadFile(lessonPath, function(content) {
                $('#lesson').html(marked(content));           
                highlight();
            });
        });
    }); 

    function highlight() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
    
    function loadFile(path, callback) {
        $.ajax({
            url: path,
            mimeType: 'text/plain; charset=x-user-defined',
            dataType: "text",
            success: function(content) { callback(content); } 
        });
    }
})(jQuery, hljs);
