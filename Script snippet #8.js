document.addEventListener('mouseover', mouseoverHandler);
const textDiv = document.createElement('div')
textDiv.style.position = 'absolute'
textDiv.style.top = '0'
textDiv.style.left = '0'
document.body.appendChild(textDiv)
function mouseoverHandler (e){
    const el = e.target;

    
    let parentEl = findVueComp(el)
    if(parentEl){
        textDiv.style.top = e.clientY + 'px'
        textDiv.style.left = e.clientX + 'px'
        textDiv.innerText = parentEl.__vue__.$options.name
    }
    
    
}

function findVueComp (el){
    let curr = el
    while(curr && !curr.__vue__){
        curr = curr.parentElement
    }
    return curr
}

