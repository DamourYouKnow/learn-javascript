(function($, hljs, ace){
    var editors = [];

    $(document).ready(function() {
        $('.lesson-link').click(function() {
            let lessonPath = $(this).attr('path') + "lesson.md";
            loadFile(lessonPath, function(content) {
                $('#lesson').html(marked(content));           
                highlight();

                // Initialize code editors.
                for (let elem of document.getElementsByClassName('editor')) {
                    let editor = ace.edit(elem);
                    editor.setTheme("ace/theme/github");
                    editor.session.setMode("ace/mode/javascript");
                    editors.push(editor);
                }
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
})(jQuery, hljs, ace);
