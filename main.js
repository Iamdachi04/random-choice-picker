const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
tagsEl.innerHTML='';

textarea.focus()


textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
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