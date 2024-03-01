let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

} 

let scrolltop = document.querySelector('#scroll-top');

window.onscroll = function(){
    if(scrollY >=200){
        scrolltop.style.display = 'block'; 
    }else{
        scrolltop.style.display = 'none';  
    }
}

scrolltop.onclick = function (){
    scroll({
        left: 0,
        top: 0 ,
        behavior: 'smooth'
    }    
        
    )
    
}