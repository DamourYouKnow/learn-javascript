String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var output = {
    'index': 0,
    'log': function(x) {
        let area = $('.output-area').eq(0);
        if (area) {
            area.val(`${area.val()}\n${x.valueOf()}`);
        }
    }
};

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

        let runBtn = $('<button>')
                .addClass('run-btn')
                .text("Run!")
                .click(runCode);

        let outputArea = $('<textarea>')
                .addClass('output-area')
                .attr('readonly', true)
                .val("Your output will show up here...");

        elem.append(editorPane);
        elem.append(runBtn);
        elem.append(outputArea);
    }

    function runCode() {
        let editor = $(this).parent('.editor');

        $('.editor').each(function(i) {
            if ($(this).is(editor)) {
                output.index = i;

                $('.output-area').eq(i).val("Your output will show up here...");
                editor.remove('.script-area');

                let content = editors[i].getSession().getValue();
                content = content.replaceAll("console.log", "output.log")

                let scriptArea = $('<script>').addClass('script-area');
                scriptArea.html(content);
                editor.append(scriptArea);
            }
        });
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
