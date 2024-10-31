//check connectivity
console.log("connect pagination page");

const galleryitems = document.querySelector('.gallery-items').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const page = document.querySelector('.page-no');
const maxItems = 6;
let index=1;
const pagination = galleryitems.length/maxItems;

prev.addEventListener('click',()=>{
    index--;
    disabled();
    showitems();
    
})
next.addEventListener('click',()=>{
    index++;
    disabled();
    showitems();
})
function disabled() {
    if(index == 1){
        prev.classList.add('disabled');
    }
    else{
        prev.classList.remove('disabled');
    }
    if(index == pagination)
    {
        next.classList.add('disabled');
    } 
    else{
        next.classList.remove('disabled');
    }
}


function showitems(){

for(let i=0 ;i< galleryitems.length; i++){
     galleryitems[i].classList.add('hide');
     galleryitems[i].classList.remove('show')
      if(i >= (index * maxItems)- maxItems && i < index * maxItems){

            galleryitems[i].classList.add('show');
            galleryitems[i].classList.remove('hide');
      }
      page.innerHTML= index;
     
     
}


    
  
}


window.onload=()=>{
    showitems();
    disabled();
}
