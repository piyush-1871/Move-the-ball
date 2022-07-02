let circle = document.getElementById('ball');
let moveBy = 40;

window.addEventListener('load',()=>{
    ball.style.position = 'absolute';
    ball.style.left = 0;
    ball.style.top = 0;
});

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case ('w'):
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case ('a'):
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case ('s'):
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;  
        case ('d'):
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;           
    }
});