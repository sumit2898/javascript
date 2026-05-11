const insert = document.querySelector('#insert')

window.addEventListener('keydown',function(e){
    insert.textContent=`${e.key == " " ? "space" : e.key }, ${e.keyCode}` ;
})