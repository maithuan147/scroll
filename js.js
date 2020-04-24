let idVh = document.querySelectorAll('.nav-link a');
let idVhArray = Array.prototype.slice.call(idVh);
let hieuung = document.getElementById('id-link');

idVhArray.forEach(element => {
    element.addEventListener('click',heightvhClick);
    function heightvhClick(event){
        let idScreen = element.getAttribute('data-id');
        removeActive();       
        element.classList.add('active');
        let screenOffsetTop = document.getElementById(idScreen).offsetTop;
        hieuung.style.top = `-${screenOffsetTop}px`;
        sessionStorage.setItem('viTri', screenOffsetTop);
        sessionStorage.setItem('viTriActive', element);
    }
});

document.body.addEventListener('load', load);
function load(){
    setTimeout( () => {
        hieuung.style.top = `-${sessionStorage.getItem('viTri')}px`;
    },500); 
}

function activeUrl(){
    let urlBrown = location.href;
    removeActive();
    idVhArray[0].classList.add('active');
    idVhArray.forEach(element => {
        if(element.href == sessionStorage.getItem('viTriActive')){
            element.classList.add('active');
            idVhArray[0].classList.remove('active');
        }
    });
}

function removeActive() {
    document.querySelector('.nav-link .active').classList.remove('active');
}

window.onscroll = function() {
    console.log(1);
};



activeUrl();
load();
