const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
tagsEl.innerHTML='';

textarea.focus()


textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)


    if(e.key==="Enter"){
        setTimeout(() => {
            e.target.value='';
            choicepicker();
        }, 10);
    }
})


function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())
    tagsEl.innerHTML='';


    tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tag;
        tagsEl.appendChild(span);
    });
}

function choicepicker() {
const times = 30;
const interval = setInterval(() => {
    const randomTag = picking();
    highlight(randomTag);

    setTimeout(() => {
        unhighlight(randomTag);
    }, 100);
}, 100);

setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
        const randomTag = picking();
        highlight(randomTag);
    }, 100);
}, times * 100);
}

function picking() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
    tag.classList.add('changecolor');
}

function unhighlight(tag) {
    tag.classList.remove('changecolor');
}