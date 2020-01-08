const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-opened');

// const tl = new TimelineLite({});
const tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.cover', 1, {
    width: "60%",
    ease: Power2.easeOut
})
.to('nav', 0.5, 
    {
        height: "100%",
        ease: Power2.easeOut
    }, 
    '-=0.5'
)
.fromTo('.nav-opened', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity:1,
    x:0,
    onComplete : () =>{
        navOpen.style.pointerEvents = 'auto';
    }
}   
)

navButton.addEventListener('click', (e) => {
    if (tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false
    }

    toggleNavOpen(tl)
})

toggleNavOpen = (tween) =>{
    tween.reversed() ? tween.play() : tween.reverse();
}