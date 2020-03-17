
var myBar = document.querySelector('.bar');
window.onanimationend = function(e) {
  console.log('Animate: ', e.animationName);
  if (e.animationName == 'html') {
    myBar.classList.remove('play');
    setTimeout(function() {
      myBar.classList.add('play');
    },1);
  }
    
}



/* const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const jsBar = document.querySelector('.bar-javascript');
const reactBar = document.querySelector('.bar-react');
const nodeBar = document.querySelector('.bar-node');

let myEffect = new TimelineLite();

myEffect.fromTo(htmlBar, .75, {width:`calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
.fromTo(cssBar, .75, {width:`calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
.fromTo(jsBar, .75, {width:`calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
.fromTo(reactBar, .75, {width:`calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
.fromTo(nodeBar, .75, {width:`calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(myEffect)
.addTo(contoller)  */