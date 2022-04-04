
const block = document.querySelectorAll('.js-block');
const block1 = 'vanh';

const effectSlide_1 = document.querySelectorAll('.js-effectslide-1');
const effectSlide_2 = document.querySelectorAll('.js-effectslide-2');
const effectSlide_3 = document.querySelectorAll('.js-effectslide-3');

const effectSlide_1_FirstTab = document.querySelectorAll('.js-effectslide-1-first');
const effectSlide_2_FirstTab = document.querySelectorAll('.js-effectslide-2-first');
const effectSlide_3_FirstTab = document.querySelectorAll('.js-effectslide-3-first');

console.log(block.length)

document.addEventListener('scroll',function(){

    var clientHeight = document.documentElement.clientHeight;
    for(var i=0 ; i < block.length ; i++){
        for(var a = 0 ; a < 4 ; a++){
            const startHeight = block[i].getBoundingClientRect().height;
            const startY = block[i].getBoundingClientRect().y;

            if(clientHeight > startY + startHeight * (3/8)){
                effectSlide_1[i].style.transform = 'translateY(0)';effectSlide_1[i].style.opacity = '1';
                effectSlide_1_FirstTab[a].style.transform = 'translateY(0)';effectSlide_1_FirstTab[a].style.opacity = '1';
            }
                
            else{
                effectSlide_1[i].style.transform = 'translateY(100px)';effectSlide_1[i].style.opacity = '0';
                effectSlide_1_FirstTab[a].style.transform = 'translateY(100px)';effectSlide_1_FirstTab[a].style.opacity = '0';

            }

            if(clientHeight > startY + startHeight * (5/8)){
                effectSlide_2[i].style.transform = 'translateY(0)';effectSlide_2[i].style.opacity = '1';
                effectSlide_2_FirstTab[a].style.transform = 'translateY(0)';effectSlide_2_FirstTab[a].style.opacity = '1';
                
                
            }
            else{
                effectSlide_2[i].style.transform = 'translateY(100px)';effectSlide_2[i].style.opacity = '0';
                effectSlide_2_FirstTab[a].style.transform = 'translateY(100px)';effectSlide_2_FirstTab[a].style.opacity = '0'
                
                
            }


            if(clientHeight > startY + startHeight * 6/8){
                effectSlide_3[i].style.transform = 'translateY(0)';effectSlide_3[i].style.opacity = '1';
                effectSlide_3_FirstTab[a].style.transform = 'translateY(0)';effectSlide_3_FirstTab[a].style.opacity = '1'
                
                
            }

            else{
                effectSlide_3[i].style.transform = 'translateY(100px)';effectSlide_3[i].style.opacity = '0';
                effectSlide_3_FirstTab[a].style.transform = 'translateY(100px)';effectSlide_3_FirstTab[a].style.opacity = '0'
                
                
            }
        }

        
    }
});