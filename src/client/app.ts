import highlight from 'highlightjs';
import marked from 'marked';

document.addEventListener('DOMContentLoaded', function(){
    
});

function resolveLesson() {
    const target = window.location.hash;
    if (target) {
        for (const link of document.querySelectorAll('.lesson-link')) {
            
        } 
    }
}

async function loadLesson(path: string) {
    const content = await getFile(`${path}lesson.md`);
    const lessonContainer = document.getElementById('lesson');
    if (lessonContainer) {
        lessonContainer.innerHTML = marked(content);
        highlightCode();
    }
}

function highlightCode() {
    for (const codeblock of document.querySelectorAll('pre code')) {
        highlight.highlightBlock(codeblock);
    }
}

function getFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(Error(xhr.statusText));
                }
            }
        };
    });
}
