

export const Paralax = () => {
    window.addEventListener('scroll', function(){
        //get backbground and do parallax thing
        const bg = document.querySelector('.background');
        bg.style.backgroundPosition = '100% 100%'
        bg.style.backgroundSize = '100% '+ (100 + window["pageYOffset"]/12) + '%';
        console.log(bg);
    });
}
