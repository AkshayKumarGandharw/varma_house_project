//code for text 
console.log('hello pagination');


const gallery = document.querySelector('.gallery-images').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pageno = document.querySelector('.pageno');
let maxitem = 8;
let index = 1;
let pagination= gallery.length/maxitem;  

prev.addEventListener('click',()=>{
    index--;
    showGallery();
    do_not_work();
})
next.addEventListener('click',()=>{
    index++;
    showGallery();
    do_not_work();
})

function do_not_work(){
    if(index == 1){
        prev.classList.add('disabled');
    }
    else{
        prev.classList.remove('disabled');
    }
    
    if(index == 2){
        next.classList.add('disabled');
    }
    else{
        next.classList.remove('disabled');
    }
}
function showGallery(){
    for(let i = 0; i < gallery.length; i++)
    {
       gallery[i].classList.add('hide');
        gallery[i].classList.remove('show');

        if(i >= (index * maxitem) - maxitem && i < index * maxitem){
            gallery[i].classList.add('show');
            gallery[i].classList.remove('hide');
        }
        pageno.innerHTML=index;
       

    }
    
}



window.onload = ()=>{

    showGallery();
    do_not_work();

};
