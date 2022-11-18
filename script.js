/***
Elements
***/
const Squid = document.getElementById('Squid-Wheel');
const Balloons = document.getElementsByClassName('Falling-Balloons');
const HangerArms = document.getElementById('Arms-Master');
const HangerHead = document.getElementById('Head-Master');
const HangerEye = document.getElementById('Hanger-Eye');
/***
Find elements coords
***/
const computeXY = (element) => {
  const matrix = getComputedStyle(element).transform;
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', '); //parse 2D CSS matrix string
  return {x:Math.round(matrixValues[4]),
          y:Math.round(matrixValues[5])}
}
/***
Animation Settings
***/
const rotate360 = [
  { transform: 'rotate(0)'},
  { transform: 'rotate(360deg)'}
];

const rotateTiming = {
  duration: 40000,
  iterations: Infinity,
};

const rotate2 = [
  { transform: 'rotate(-1deg)'},
  { transform: 'rotate(1deg)'},
  { transform: 'rotate(-1deg)'},
];

const rotate2Timing = (i) => {
  return {
    delay: i*1000,
    duration: 4000,
    iterations: Infinity,
    fill: 'forwards',
    composite: 'add'
  }
};

const dropIn = (x,y,i) => {
  let extension = i*150; //how many additional pixels to raise the element
  let newY = y-(800+extension); //how much to raise the element based on starting pos
  return [
    {transform: 'translate('+x+'px,'+newY+'px)'},
    {transform: 'translate('+x+'px,'+y+'px)'}
  ];
}

const dropInTiming = (i) => {
  let delay = i*2200;
  return {
    duration: 15000+delay,
    iterations: 1,
    easing: 'ease-in-out'
  };
}

const eyeMove = (x,y) => {
  return [
    {transform: 'translate('+x+'px,'+y+'px)'},
    {transform: 'translate('+(x+2)+'px,'+(y+12)+'px) rotate(7deg)'},
    {transform: 'translate('+(x+3)+'px,'+(y+25)+'px) rotate(15deg)'},
    {transform: 'translate('+(x+3)+'px,'+(y+32)+'px) rotate(22deg)'},
    {transform: 'translate('+(x+4.5)+'px,'+(y+42)+'px) rotate(29deg)'},
    {transform: 'translate('+(x+5)+'px,'+(y+52)+'px) rotate(36deg)'},
    {transform: 'translate('+(x+3)+'px,'+(y+68)+'px) rotate(43deg)'},
    {transform: 'translate('+(x-1)+'px,'+(y+79)+'px) rotate(50deg)'},
    {transform: 'translate('+(x-8)+'px,'+(y+87)+'px) rotate(57deg)'}
  ];
}

const eyeMoveTiming = {
  duration: 5000,
  iterations: 1,
  delay: 3500,
  easing: "ease-in-out",
  fill: "forwards"
};
/***
Animate !!!!
***/
Squid.animate(rotate360,rotateTiming);

let armCoords = computeXY(HangerArms);
let headCoords = computeXY(HangerHead);
HangerArms.animate(dropIn(armCoords.x,armCoords.y,-3.5),dropInTiming(-.5));
HangerHead.animate(dropIn(headCoords.x,headCoords.y,-3.5),dropInTiming(-4));

let eyeCoords = computeXY(HangerEye);
HangerEye.animate(eyeMove(eyeCoords.x,eyeCoords.y),eyeMoveTiming);

for(let i=0;i<Balloons.length;i++){
  let coords = computeXY(Balloons[i]);
  Balloons[i].animate(dropIn(coords.x,coords.y,i+2),dropInTiming(i));
  Balloons[i].animate(rotate2,rotate2Timing(i));
}
