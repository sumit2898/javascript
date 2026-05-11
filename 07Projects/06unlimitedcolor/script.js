const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalid;

const colorChange = function(){
    document.querySelector('body').style.backgroundColor = randomColor();
}
document.querySelector('#start').addEventListener('click',function(e){
    intervalid=setInterval(colorChange,1000);
})

document.querySelector('#stop').addEventListener('click',function(e) {
     clearInterval(intervalid);
})