//deployed with link and plus button
let myP = document.querySelector('#p');
let myTitle = document.querySelector('#one');
let mySpan = document.querySelector('#span');
//let myPlus = document.getElementById('span');

let showIt = true;
mySpan.addEventListener('click', function(){
        showIt = !showIt;
        if(!showIt){
            myP.style.display = "flex";
            //myP.style.flexDirection = "column";
            myP.style.width = "80%";
            myP.style.minHeight = "50px";
            myP.style.marginTop = "5px";
            myTitle.style.display = "none";
            mySpan.innerHTML = "X";
            mySpan.style.color = "red";
            mySpan.style.position = "relative";
            mySpan.style.textAlign = "center";
            mySpan.style.width = "20px";
            mySpan.style.height = "20px";
            mySpan.style.borderRadius = "50%";
            mySpan.style.border = "1px solid silver";
            mySpan.style.marginRight = "2%";
        }else if (showIt) {
            document.location.reload();
          }
});
 

/* 2 */
let myP1 = document.querySelector('#p1');
let myTitle1 = document.querySelector('#two');
let mySpan1 = document.querySelector('#span1');
//let myPlus = document.getElementById('span');

let showIt1 = true;
mySpan1.addEventListener('click', function(){
        showIt1 = !showIt1;
        if(!showIt1){
            myP1.style.display = "flex";
            //myP1.style.flexDirection = "column";
            myP1.style.width = "80%";
            myP1.style.minHeight = "50px";
            myP1.style.marginTop = "5px";;
            myTitle1.style.display = "none";
            mySpan1.innerHTML = "X";
            mySpan1.style.color = "red";
            mySpan1.style.position = "relative";
            mySpan1.style.textAlign = "center";
            mySpan1.style.width = "20px";
            mySpan1.style.height = "20px";
            mySpan1.style.borderRadius = "50%";
            mySpan1.style.border = "1px solid silver";
            mySpan1.style.marginRight = "2%";
        }else if (showIt1) {
            document.location.reload();
          }
});

/* 3 */
let myP2 = document.querySelector('#p2');
let myTitle2 = document.querySelector('#three');
let mySpan2 = document.querySelector('#span2');
//let myPlus = document.getElementById('span');

let showIt2 = true;
mySpan2.addEventListener('click', function(){
        showIt2 = !showIt2;
        if(!showIt2){
            myP2.style.display = "flex";
            //myP2.style.flexDirection = "column";
            myP2.style.width = "80%";
            myP2.style.minHeight = "50px";
            myP2.style.marginTop = "5px";
            myTitle2.style.display = "none";
            mySpan2.innerHTML = "X";
            mySpan2.style.color = "red";
            mySpan2.style.position = "relative";
            mySpan2.style.textAlign = "center";
            mySpan2.style.width = "20px";
            mySpan2.style.height = "20px";
            mySpan2.style.borderRadius = "50%";
            mySpan2.style.border = "1px solid silver";
            mySpan2.style.marginRight = "2%";
        }else if (showIt2) {
            document.location.reload();
          }
});

/* 4 */
let myP3 = document.querySelector('#p3');
let myTitle3 = document.querySelector('#four');
let mySpan3 = document.querySelector('#span3');
//let myPlus = document.getElementById('span');

let showIt3 = true;
mySpan3.addEventListener('click', function(){
        showIt3 = !showIt3;
        if(!showIt3){
            myP3.style.display = "flex";
            //myP3.style.flexDirection = "column";
            myP3.style.width = "80%";
            myP3.style.minHeight = "50px";
            myP3.style.marginTop = "5px";
            myTitle3.style.display = "none";
            mySpan3.innerHTML = "X";
            mySpan3.style.color = "red";
            mySpan3.style.position = "relative";
            mySpan3.style.textAlign = "center";
            mySpan3.style.width = "20px";
            mySpan3.style.height = "20px";
            mySpan3.style.borderRadius = "50%";
            mySpan3.style.border = "1px solid silver";
            mySpan3.style.marginRight = "2%";
        }else if (showIt3) {
            document.location.reload();
          }
});

/* 5 */
let myP4 = document.querySelector('#p4');
let myTitle4 = document.querySelector('#five');
let mySpan4 = document.querySelector('#span4');
//let myPlus = document.getElementById('span');

let showIt4 = true;
mySpan4.addEventListener('click', function(){
        showIt4 = !showIt4;
        if(!showIt4){
            myP4.style.display = "flex";
            //myP4.style.flexDirection = "column";
            myP4.style.width = "80%";
            myP4.style.minHeight = "50px";
            myP4.style.marginTop = "5px";
            myTitle4.style.display = "none";
            mySpan4.innerHTML = "X";
            mySpan4.style.color = "red";
            mySpan4.style.position = "relative";
            mySpan4.style.textAlign = "center";
            mySpan4.style.width = "20px";
            mySpan4.style.height = "20px";
            mySpan4.style.borderRadius = "50%";
            mySpan4.style.border = "1px solid silver";
            mySpan4.style.marginRight = "2%";
        }else if (showIt4) {
            document.location.reload();
           /*  myTitle4.style.display = "block";
            myP4.style.display = "none";
            mySpan4.style.display = "block"; */

          }
});





/* var myBar = document.querySelector('.bar');
window.onanimationend = function(e) {
  console.log('Animate: ', e.animationName);
  if (e.animationName == 'html') {
    myBar.classList.remove('play');
    setTimeout(function() {
      myBar.classList.add('play');
    },1);
  }
    
} */



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