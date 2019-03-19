(function($, hljs, ace){
    var editors = [];

    $(document).ready(function() {
        $('.lesson-link').click(function() {
            let lessonPath = $(this).attr('path') + "lesson.md";
            loadFile(lessonPath, function(content) {
                $('#lesson').html(marked(content));           
                highlight();

                // Initialize code editors.
                $('.editor').each(function() { initEditor($(this)); });
            });
        });
    }); 

    function initEditor(elem) {
        //elem.addClass('container-fluid');

        let editorPane = $('<div>').addClass('editor-pane');
        
        let editor = ace.edit(editorPane[0]);
        editor.setTheme("ace/theme/github");
        editor.session.setMode("ace/mode/javascript");
        editors.push(editor);

        let runBtn = $('<button>').text("Run!");
        let outputArea = $('<textarea>')
                .addClass('output-area')/*.prop('readonly')*/;

        elem.append(editorPane);
        elem.append(runBtn);
        elem.append(outputArea);

    }

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
