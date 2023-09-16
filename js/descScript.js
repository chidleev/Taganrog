import sight_descs from '../sight_descriptions.json' assert {type: 'json'}

const popup = document.getElementById('popup')
const sight_imgs = document.querySelectorAll('.sight_img')

sight_imgs.forEach(img => {
    img.addEventListener('mouseenter', e => {
        if (e.clientX < window.innerWidth / 2) {
            popup.style.left = '55vw'
        }
        else {
            popup.style.left = '5vw'
        }
        popup.innerText = sight_descs[img.id]
        popup.classList.add('active')
    })

    img.addEventListener('mouseleave', e => {
        popup.classList.remove('active')
    })
})