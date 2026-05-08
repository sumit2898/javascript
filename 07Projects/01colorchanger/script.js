const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (buttons) => {
    console.log(buttons);
    buttons.addEventListener('click',(e) => {
        console.log(e);
        
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor= e.target.id;
                break;
            case 'white':
                body.style.backgroundColor= e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor= e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor= e.target.id;
                break;
        }

    });
    
});