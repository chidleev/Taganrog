window.addEventListener('scroll', (event) => {
    let blurValue = Math.min(10, (window.scrollY / 150));
    document.querySelector('#bg_img').style.filter = `blur(${blurValue}px)`;
});

function toPersents(vec) {
    return {
        x: `${(1+vec.x) * 50}%`,
        y: `${(1+vec.y) * 50}%`
    }
}

window.addEventListener('mousemove', (event) => {
    const toMouseDir = { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight }

    document.querySelector('#bg_img').style.backgroundPosition = `${toPersents(toMouseDir).x} ${toPersents(toMouseDir).y}`
})