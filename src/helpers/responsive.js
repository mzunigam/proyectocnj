const responsive = () => {
    window.addEventListener('resize', () => {
        initialResponsive();
    });
}
const initialResponsive = () => {
    const width = window.innerWidth < 800 ? window.innerWidth*1.25 : window.innerWidth
    const height = window.innerWidth < 600 ? window.innerHeight*1.1 : window.innerHeight
    const fontsize = height / ( window.innerWidth > 800 ? 125 : 100) + width / ( window.innerWidth > 800 ? 350 : 150);
    document.documentElement.style.fontSize = fontsize + 'px';
}
export { responsive, initialResponsive }