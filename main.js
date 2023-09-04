console.log('main.js');


const funny = document.querySelector('.funny')
const funnyRect1 = document.querySelector('#funnyRect1')
const funnyRect2 = document.querySelector('#funnyRect2')
const funnyRect3 = document.querySelector('#funnyRect3')

document.addEventListener('mousemove', (ev) => {

  funny.style.top = ev.y - 50 + 'px'
  funny.style.left = ev.x - 50 + 'px'
})

// funnyRect1.style.rotate = '20deg'