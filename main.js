
const block = document.querySelectorAll('.js-block');

const block1 = 'vanh';

const navBlock = document.querySelectorAll('.block')
const headerNav = document.querySelectorAll('.js-link')

const effectSlide_1 = document.querySelectorAll('.js-effectslide-1');
const effectSlide_2 = document.querySelectorAll('.js-effectslide-2');
const effectSlide_3 = document.querySelectorAll('.js-effectslide-3');



console.log(block.length)

document.addEventListener('scroll',function(){

    var clientHeight = document.documentElement.clientHeight;
    for(var i=0 ; i < block.length ; i++){
        const startHeight = block[i].getBoundingClientRect().height;
        const startY = block[i].getBoundingClientRect().y;

        if(clientHeight > startY + startHeight * (1/8)){
            effectSlide_1[i].style.transform = 'translateY(0)';effectSlide_1[i].style.opacity = '1';
        }else{
            effectSlide_1[i].style.transform = 'translateY(100px)';effectSlide_1[i].style.opacity = '0';
        }

        if(clientHeight > startY + startHeight * (3/8)){
            effectSlide_2[i].style.transform = 'translateY(0)';effectSlide_2[i].style.opacity = '1';
        }else{
            effectSlide_2[i].style.transform = 'translateY(100px)';effectSlide_2[i].style.opacity = '0';
        }
        
        
        if(clientHeight > startY + startHeight * (5/8)){
            effectSlide_3[i].style.transform = 'translateY(0)';effectSlide_3[i].style.opacity = '1';
        }else{
            effectSlide_3[i].style.transform = 'translateY(100px)';effectSlide_3[i].style.opacity = '0';
        }
        
        

    }
});



// document.addEventListener('scroll',function(){

//     var clientHeight = document.documentElement.clientHeight;
//     for(var i=0 ; i < navBlock.length ; i++){
//         const navHeight = navBlock[i].getBoundingClientRect().height;
//         const navY = navBlock[i].getBoundingClientRect().y;
//         const navBottom = navBlock[i].getBoundingClientRect().bottom;

//         if((navBottom - 1 <= navHeight) && (navBottom > 1)){
//             headerNav[i].classList.add('.focus')
//         }else{
//             headerNav[i].classList.remove('.focus')
//         }

//     }
// });