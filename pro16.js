let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mon1 = document.getElementById('mon1');
let mon2 = document.getElementById('mon2');
let mon3 = document.getElementById('mon3');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let h1 = document.querySelector('h1');

window.onscroll = function(){
    let value = scrollY ; 
    stars.style.left = value + 'px' ;
    moon.style.top = value*4 + 'px';
    mon1.style.top = value*2 + 'px';
    mon2.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';
    h1.style.fontSize = value + 'px';
    if(value > 100){
        h1.style.fontSize = '100px';
        h1.style.position = 'fixed';
            if(value > 480 ){
                h1.style.display = 'none';

            }else{
                h1.style.display = 'block';


            }
    }




}