const hideGif = new TimelineLite({ paused: true, reversed: true });
const trophies = new TimelineLite({ paused: true, reversed: true });
const navBar = new TimelineLite({ paused: true, reversed: true });
const navOpen = document.querySelector('.nav-opened');
const navButton = document.querySelector('.nav-button');
const leoGif = document.querySelector('#leo-gif');

document.addEventListener('DOMContentLoaded', () => {
    toggleTween(trophies)
    toggleTween(hideGif)
})

trophies.from('#trophy-list', 3, { y:"1000%", ease:Power4.easeOut})
hideGif.to('#leo-gif', 3, {opacity:0}, 3)
.to('#grizzi-gif', 1,{opacity:1}, '-=2')
.to('#grizzi-gif', 0.5,{opacity:0})
.to('#umtiti-gif', 1,{opacity:1}, '-=1')
.to('#umtiti-gif', 0.5,{opacity:0})
.to('#forca-gif', 3,{opacity:1})


navButton.addEventListener('click', (e) => {
    if (navBar.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false
    }
    toggleTween(navBar)
})
navBar.to('.cover', 1, {
    width: "80%",
    ease: "back.out"
})
.to('nav', 0.5, 
    {
        height: "100%",
        ease: Power2.easeOut
    }, 
    '-=0.5'
)
.fromTo('.nav-opened', 1, {
    opacity: 0,
    x: 100,
    ease: "bounce.out"
}, {
    opacity:1,
    x:0,
    onComplete : () =>{
        navOpen.style.pointerEvents = 'auto';
    }
}   
)

toggleTween = (tween) =>{
    tween.reversed() ? tween.play() : tween.reverse();
}

var today = new Date();
let date = today.toString().split(' ')
document.querySelector('.cover-date').innerText = `${date[0]} ${date[1]} ${date[2]}, ${date[3]}`