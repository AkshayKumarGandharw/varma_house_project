//check connectivity
console.log('hello');

//code for pagination 

const varmagallery = document.querySelector('#varma_gallery_section').children;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const page = document.querySelector('.pageNo');
const maxItems = 6;
let index = 1;
function displayGallary()
{
    for(let i = 0; i < varmagallery.length; i++)
    {
        varmagallery[i].classList.add('hide');
    }
}
window.onload=displayGallary();