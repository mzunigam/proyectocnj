
export const Animation = (e) => {
    const element = e.currentTarget;
    switch (element.id){
        case 'school':

    }
}


const schoolAnimation = (element) => {
    element.addEventListener('mouseenter', function() {
        if (!element.classList.contains('in')) {
            element.classList.add('in');
        }
    });
    element.addEventListener('mouseout', function() {
        if (!element.classList.contains('out')) {
            element.classList.add('out');
        }
    });

}