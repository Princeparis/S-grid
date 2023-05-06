const duplicateHtml = (element, quantity) => {
    const content = element.innerHTML

    const newContent = new Array(quantity).fill(content).join('')
    element.innerHTML = newContent
}

const crossesTag = document.querySelector('#crosses')

duplicateHtml(crossesTag, 10)






const cssTransform = anime({
    targets: '#tunnel circle',
    scale: 1.2,
    direction: 'alternate',
    loop: true,
    duration: 250,
    easing: 'easeInOutSine',
    // our delay can be static or dynamic as
    // a function as it is here 
    delay: (el,i) => i * 50
})


// we set the conveyor animation
anime({
    targets: '.conveyor',
    // we move the conveyor to the left by 50%
    translateX: '-50%',
    duration: 1500,
    easing: 'linear',
    loop: true,
    autoplay: true
})


const pathTag = document.querySelector('#zigzag path')
const offset = anime.setDashoffset(pathTag)
pathTag.setAttribute('stroke-dashoffset', offset)

anime({

    targets: pathTag,
    strokeDashoffset: [offset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
})

const waveTag = document.querySelector('#wave path')
const waveoffset = anime.setDashoffset(waveTag)
waveTag.setAttribute('stroke-dashoffset', waveoffset)

anime({

    targets: waveTag,
    strokeDashoffset: [waveoffset, 0],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
})

anime({
    targets: '#crosses path',
    rotate: '1turn',
    duration: 1200,
    delay: (el,i) => i * 100,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true

})

const dotsTag = document.querySelector('#dots')

duplicateHtml(dotsTag, 40)

const dots = document.querySelectorAll('#dots .dot')
dots.forEach(dot => {
    anime({
        targets: dot,
        rotate: (el, i) => anime.random(90, 360),
        duration: (el, i) => anime.random(250, 750),
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
        autoplay: true
    })
})

const circleTags = document.querySelector('#circles')

duplicateHtml(circleTags, 20)

anime({
    targets: '.circle',
    scale: [0,1.2],
    duration: 250,
    delay: (el, i) => i * 100,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
})

anime({
    targets: '.flashing-box',
    backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
    duration: 500,
    delay: (el, i) => (50, 100),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
})

anime({
    targets: '#square-cont .rect',
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: [45, 0, -45],
    duration: (el,i) => 750,
    delay: (el, i) => i * 100,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
})