/***
Eye Elements
***/
const B1Eye = document.getElementById('FB1-Eye');
const B2Eye = document.getElementById('FB2-Eye');
const B3Eye = document.getElementById('FB3-Eye');
/***
Sign Elements (these will be interated through and assigned
mouse listeners. their name must correspond to a position
name in the eye objects)
***/
const Signs = [{
    elements:[document.getElementsByClassName('b1-5')[0],
      document.getElementById('about')],
    name:"about"
  },{
    elements:[document.getElementsByClassName('b3-1')[0],
      document.getElementById('cartoons')],
    name:"cartoons"
  },{
    elements:[document.getElementsByClassName('b2-1')[0],
      document.getElementById('collages')],
    name:"collages"
  },{
    elements:[document.getElementsByClassName('h-3')[0],
      document.getElementById('contact')],
    name:"contact"
  },{
    elements:[document.getElementById('welcome'),
      document.getElementById('Wheel')],
    name:"welcome"
  }
]
/***
Eye objects
contain: starting position in animation array (also updated as it moves),
eye element, coords of starting position on page,
animation array, position of each desired location in the animation array
***/
const Eyes = {
B1:{
  current:19,
  element:B1Eye,
  coords:computeXY(B1Eye),
  trans:(x,y) => { return [
      {transform: 'translate('+(x-170)+'px,'+(y-320)+'px) rotate(133deg)'},//0-contact1
      {transform: 'translate('+(x-183)+'px,'+(y-300)+'px) rotate(126deg)'},
      {transform: 'translate('+(x-200)+'px,'+(y-275)+'px) rotate(119deg)'},
      {transform: 'translate('+(x-206)+'px,'+(y-255)+'px) rotate(112deg)'},
      {transform: 'translate('+(x-210)+'px,'+(y-234)+'px) rotate(105deg)'},
      {transform: 'translate('+(x-215)+'px,'+(y-207)+'px) rotate(98deg)'},
      {transform: 'translate('+(x-215)+'px,'+(y-182)+'px) rotate(91deg)'},
      {transform: 'translate('+(x-210)+'px,'+(y-155)+'px) rotate(84deg)'},
      {transform: 'translate('+(x-205)+'px,'+(y-132)+'px) rotate(77deg)'},
      {transform: 'translate('+(x-195)+'px,'+(y-108)+'px) rotate(70deg)'},
      {transform: 'translate('+(x-180)+'px,'+(y-88)+'px) rotate(63deg)'},
      {transform: 'translate('+(x-168)+'px,'+(y-67)+'px) rotate(56deg)'},
      {transform: 'translate('+(x-153)+'px,'+(y-48)+'px) rotate(49deg)'},
      {transform: 'translate('+(x-135)+'px,'+(y-35)+'px) rotate(42deg)'},
      {transform: 'translate('+(x-110)+'px,'+(y-25)+'px) rotate(35deg)'},
      {transform: 'translate('+(x-88)+'px,'+(y-15)+'px) rotate(28deg)'},
      {transform: 'translate('+(x-70)+'px,'+(y-9)+'px) rotate(21deg)'},
      {transform: 'translate('+(x-46)+'px,'+(y-4)+'px) rotate(14deg)'},
      {transform: 'translate('+(x-24)+'px,'+(y-3)+'px) rotate(7deg)'},
      {transform: 'translate('+x+'px,'+y+'px) rotate(0deg)'}, //19-about
      {transform: 'translate('+(x+23)+'px,'+(y-7)+'px) rotate(-7deg)'},
      {transform: 'translate('+(x+44)+'px,'+(y-15)+'px) rotate(-14deg)'},
      {transform: 'translate('+(x+64)+'px,'+(y-23)+'px) rotate(-21deg)'},
      {transform: 'translate('+(x+82)+'px,'+(y-34)+'px) rotate(-28deg)'},
      {transform: 'translate('+(x+99)+'px,'+(y-49)+'px) rotate(-35deg)'},
      {transform: 'translate('+(x+115)+'px,'+(y-63)+'px) rotate(-42deg)'},
      {transform: 'translate('+(x+130)+'px,'+(y-82)+'px) rotate(-49deg)'},//26-cartoons
      {transform: 'translate('+(x+145)+'px,'+(y-100)+'px) rotate(-56deg)'},
      {transform: 'translate('+(x+154)+'px,'+(y-120)+'px) rotate(-63deg)'},
      {transform: 'translate('+(x+162)+'px,'+(y-142)+'px) rotate(-70deg)'},//29-welcome
      {transform: 'translate('+(x+164)+'px,'+(y-166)+'px) rotate(-77deg)'},//30-collages
      {transform: 'translate('+(x+165)+'px,'+(y-189)+'px) rotate(-84deg)'},
      {transform: 'translate('+(x+165)+'px,'+(y-212)+'px) rotate(-91deg)'},
      {transform: 'translate('+(x+160)+'px,'+(y-234)+'px) rotate(-98deg)'},
      {transform: 'translate('+(x+154)+'px,'+(y-260)+'px) rotate(-105deg)'},
      {transform: 'translate('+(x+145)+'px,'+(y-280)+'px) rotate(-112deg)'},
      {transform: 'translate('+(x+130)+'px,'+(y-300)+'px) rotate(-119deg)'},
      {transform: 'translate('+(x+116)+'px,'+(y-318)+'px) rotate(-126deg)'},
      {transform: 'translate('+(x+100)+'px,'+(y-335)+'px) rotate(-133deg)'},
      {transform: 'translate('+(x+85)+'px,'+(y-350)+'px) rotate(-140deg)'},
      {transform: 'translate('+(x+66)+'px,'+(y-360)+'px) rotate(-147deg)'},
      {transform: 'translate('+(x+40)+'px,'+(y-375)+'px) rotate(-154deg)'},
      {transform: 'translate('+(x+18)+'px,'+(y-378)+'px) rotate(-161deg)'},
      {transform: 'translate('+(x-5)+'px,'+(y-382)+'px) rotate(-168deg)'},
      {transform: 'translate('+(x-30)+'px,'+(y-385)+'px) rotate(-175deg)'},
      {transform: 'translate('+(x-55)+'px,'+(y-385)+'px) rotate(-182deg)'},
      {transform: 'translate('+(x-78)+'px,'+(y-380)+'px) rotate(-189deg)'},
      {transform: 'translate('+(x-103)+'px,'+(y-370)+'px) rotate(-196deg)'},
      {transform: 'translate('+(x-120)+'px,'+(y-362)+'px) rotate(-203deg)'},
      {transform: 'translate('+(x-140)+'px,'+(y-348)+'px) rotate(-210deg)'}]},//50-contact2
  positions:{
    about:[19],
    cartoons:[26],
    collages:[30],
    contact:[0,50],
    welcome:[29]
  }
},
B2:{
  current:0,
  element:B2Eye,
  coords:computeXY(B2Eye),
  trans:(x,y) => { return [{transform: 'translate('+x+'px,'+y+'px)'}, //0-collages
      {transform: 'translate('+(x-10)+'px,'+(y-8)+'px) rotate(7deg)'},
      {transform: 'translate('+(x-17)+'px,'+(y-11)+'px) rotate(14deg)'},
      {transform: 'translate('+(x-28)+'px,'+(y-15)+'px) rotate(21deg)'},
      {transform: 'translate('+(x-45)+'px,'+(y-28)+'px) rotate(28deg)'},//4-cartoons
      {transform: 'translate('+(x-50)+'px,'+(y-33)+'px) rotate(35deg)'},
      {transform: 'translate('+(x-59)+'px,'+(y-43)+'px) rotate(42deg)'},
      {transform: 'translate('+(x-69)+'px,'+(y-58)+'px) rotate(49deg)'},
      {transform: 'translate('+(x-77)+'px,'+(y-73)+'px) rotate(56deg)'},//8-about
      {transform: 'translate('+(x-82)+'px,'+(y-88)+'px) rotate(63deg)'},
      {transform: 'translate('+(x-87)+'px,'+(y-105)+'px) rotate(70deg)'},
      {transform: 'translate('+(x-89)+'px,'+(y-119)+'px) rotate(77deg)'},
      {transform: 'translate('+(x-91)+'px,'+(y-135)+'px) rotate(84deg)'},
      {transform: 'translate('+(x-92)+'px,'+(y-150)+'px) rotate(91deg)'},
      {transform: 'translate('+(x-89)+'px,'+(y-169)+'px) rotate(98deg)'}]},//14-contact
  positions:{
    about:[8],
    cartoons:[4],
    collages:[0],
    contact:[14],
    welcome:[9]
  }
},
B3:{
  current:10,
  element:B3Eye,
  coords:computeXY(B3Eye),
  trans:(x,y) => { return [
      {transform: 'translate('+(x-56)+'px,'+(y-115)+'px) rotate(70deg)'},//0-contact1
      {transform: 'translate('+(x-58)+'px,'+(y-105)+'px) rotate(63deg)'},
      {transform: 'translate('+(x-60)+'px,'+(y-94)+'px) rotate(56deg)'},
      {transform: 'translate('+(x-58)+'px,'+(y-75)+'px) rotate(49deg)'},
      {transform: 'translate('+(x-50)+'px,'+(y-57)+'px) rotate(42deg)'},
      {transform: 'translate('+(x-43)+'px,'+(y-46)+'px) rotate(35deg)'},
      {transform: 'translate('+(x-36)+'px,'+(y-36)+'px) rotate(28deg)'},
      {transform: 'translate('+(x-30)+'px,'+(y-27)+'px) rotate(21deg)'},
      {transform: 'translate('+(x-23)+'px,'+(y-20)+'px) rotate(14deg)'},//8-about
      {transform: 'translate('+(x-14)+'px,'+(y-13)+'px) rotate(7deg)'},
      {transform: 'translate('+x+'px,'+y+'px) rotate(0deg)'},//10-starting position (looks at tail)
      {transform: 'translate('+(x+20)+'px,'+(y+8)+'px) rotate(-7deg)'},
      {transform: 'translate('+(x+30)+'px,'+(y+9)+'px) rotate(-14deg)'},
      {transform: 'translate('+(x+42)+'px,'+(y+9)+'px) rotate(-21deg)'},
      {transform: 'translate('+(x+54)+'px,'+(y+9)+'px) rotate(-28deg)'},//14-cartoons
      {transform: 'translate('+(x+67)+'px,'+(y+7)+'px) rotate(-35deg)'},
      {transform: 'translate('+(x+78)+'px,'+(y+4)+'px) rotate(-42deg)'},
      {transform: 'translate('+(x+89)+'px,'+(y-1)+'px) rotate(-49deg)'},
      {transform: 'translate('+(x+99)+'px,'+(y-7)+'px) rotate(-56deg)'},
      {transform: 'translate('+(x+110)+'px,'+(y-15)+'px) rotate(-63deg)'},
      {transform: 'translate('+(x+115)+'px,'+(y-24)+'px) rotate(-70deg)'},
      {transform: 'translate('+(x+126)+'px,'+(y-34)+'px) rotate(-77deg)'},
      {transform: 'translate('+(x+132)+'px,'+(y-45)+'px) rotate(-84deg)'},
      {transform: 'translate('+(x+140)+'px,'+(y-57)+'px) rotate(-91deg)'},
      {transform: 'translate('+(x+145)+'px,'+(y-69)+'px) rotate(-98deg)'},
      {transform: 'translate('+(x+145)+'px,'+(y-80)+'px) rotate(-105deg)'},
      {transform: 'translate('+(x+145)+'px,'+(y-92)+'px) rotate(-112deg)'},
      {transform: 'translate('+(x+145)+'px,'+(y-104)+'px) rotate(-119deg)'},
      {transform: 'translate('+(x+145)+'px,'+(y-118)+'px) rotate(-126deg)'},//28-collages
      {transform: 'translate('+(x+147)+'px,'+(y-135)+'px) rotate(-133deg)'},
      {transform: 'translate('+(x+140)+'px,'+(y-155)+'px) rotate(-140deg)'},
      {transform: 'translate('+(x+134)+'px,'+(y-165)+'px) rotate(-147deg)'},
      {transform: 'translate('+(x+128)+'px,'+(y-175)+'px) rotate(-154deg)'},
      {transform: 'translate('+(x+117)+'px,'+(y-185)+'px) rotate(-161deg)'},
      {transform: 'translate('+(x+108)+'px,'+(y-195)+'px) rotate(-168deg)'},
      {transform: 'translate('+(x+90)+'px,'+(y-200)+'px) rotate(-175deg)'},
      {transform: 'translate('+(x+80)+'px,'+(y-205)+'px) rotate(-182deg)'},
      {transform: 'translate('+(x+70)+'px,'+(y-210)+'px) rotate(-189deg)'},
      {transform: 'translate('+(x+55)+'px,'+(y-210)+'px) rotate(-196deg)'},
      {transform: 'translate('+(x+40)+'px,'+(y-210)+'px) rotate(-204deg)'},
      {transform: 'translate('+(x+28)+'px,'+(y-207)+'px) rotate(-211deg)'},
      {transform: 'translate('+(x+15)+'px,'+(y-205)+'px) rotate(-218deg)'},
      {transform: 'translate('+(x+5)+'px,'+(y-200)+'px) rotate(-225deg)'},
      {transform: 'translate('+(x-8)+'px,'+(y-196)+'px) rotate(-232deg)'},
      {transform: 'translate('+(x-15)+'px,'+(y-187)+'px) rotate(-239deg)'},
      {transform: 'translate('+(x-26)+'px,'+(y-180)+'px) rotate(-246deg)'},
      {transform: 'translate('+(x-32)+'px,'+(y-170)+'px) rotate(-253deg)'},
      {transform: 'translate('+(x-42)+'px,'+(y-160)+'px) rotate(-260deg)'},
      {transform: 'translate('+(x-49)+'px,'+(y-150)+'px) rotate(-267deg)'},
      {transform: 'translate('+(x-56)+'px,'+(y-138)+'px) rotate(-274deg)'},
      {transform: 'translate('+(x-56)+'px,'+(y-126)+'px) rotate(-281deg)'},
      {transform: 'translate('+(x-56)+'px,'+(y-115)+'px) rotate(-288deg)'}]},//51-contact2
  positions:{
    about:[8],
    cartoons:[14],
    collages:[28],
    contact:[0,51],
    welcome:[3]
  }
},
H1:{
  current:8,//7
  element:HangerEye,
  coords:computeXY(HangerEye),
  trans:(x,y) => {
    return [
      {transform: 'translate('+x+'px,'+y+'px)'},//0-contact
      {transform: 'translate('+(x+2)+'px,'+(y+12)+'px) rotate(7deg)'},
      {transform: 'translate('+(x+3)+'px,'+(y+25)+'px) rotate(15deg)'},
      {transform: 'translate('+(x+3)+'px,'+(y+32)+'px) rotate(22deg)'},
      {transform: 'translate('+(x+4.5)+'px,'+(y+42)+'px) rotate(29deg)'},
      {transform: 'translate('+(x+5)+'px,'+(y+52)+'px) rotate(36deg)'},
      {transform: 'translate('+(x+3)+'px,'+(y+68)+'px) rotate(43deg)'},
      {transform: 'translate('+(x-1)+'px,'+(y+79)+'px) rotate(50deg)'},//7-collage-where hanger starts after initial scene
      {transform: 'translate('+(x-8)+'px,'+(y+87)+'px) rotate(57deg)'},//center?
      {transform: 'translate('+(x-15)+'px,'+(y+97)+'px) rotate(63deg)'},//9-cartoons
      {transform: 'translate('+(x-25)+'px,'+(y+107)+'px) rotate(70deg)'},
      {transform: 'translate('+(x-35)+'px,'+(y+117)+'px) rotate(77deg)'},
      {transform: 'translate('+(x-40)+'px,'+(y+120)+'px) rotate(83deg)'},
      {transform: 'translate('+(x-50)+'px,'+(y+123)+'px) rotate(90deg)'},
      {transform: 'translate('+(x-61)+'px,'+(y+129)+'px) rotate(97deg)'}]},//14-about
  positions:{
    about:[14],
    cartoons:[9],
    collages:[7],
    contact:[0],
    welcome:[8]
  }
}};
/***
Animation Timing - takes in a direction to animate in
***/
const eyePosTiming = (dir) => {
  return {
    duration: 600, //complete animation in .6 secs
    iterations: 1, //only iterate 1 time
    direction: dir, //this tells it to run the animation forward or in reverse
    fill: "forwards" //this makes sure the eye stays where it ends up
  }
};
/***
Determine quickest path from current position,
given the eye subobject, and the desired location
***/
const pathFinder = (eye,goalPos) => {
  let start = eye.current; //get current position in animation
  let goals = eye.positions[goalPos]; //get the position of the goal location in the animation array
  let diffs = goals.map(loc => Math.abs(loc-start)); //get the difference between the current location and each goal location
  let smallest = Math.min(...diffs); //get the shortest distance
  if(smallest===0) return -1; //if the goal is where the eye currently is, return -1
  let index = diffs.indexOf(smallest); //find the position of that small difference
  return goals[index]; //return the goal position in the animation array
}
/***
Animate element based on current position and ending position (the goal position)
***/
const AnimateEye = (eye,goalPos) => {
  let start = eye.current; //get the starting segment of the transition array
  let end = pathFinder(eye,goalPos); //get the ending segement of the transition array
  if(end!==-1){ //only proceed if the eye isnt alrdy where it should be
    //set direction to forward or reverse based on current position in relation to goal position
    let dir = start<end ? "normal" : "reverse" //if where we are going comes before where we are in the animation array, run it in reverse
    let trans = eye.trans(eye.coords.x,eye.coords.y); //get the transition array
    trans = start>end ? trans.slice(end,start+1)
                      : trans.slice(start,end+1) //slice trans array

    eye.element.animate(trans,eyePosTiming(dir)); //animate ! :)
    eye.current = end; //mark the new location
  }
}
/***
Animate all eyes to look at a given location
***/
const AnimateAll = (goalPos) => {
  for (var eye in Eyes) AnimateEye(Eyes[eye],goalPos);
}
/***
Hover event listeners
***/
Signs.forEach(sign =>
  sign.elements.forEach(ele => ele.addEventListener("mouseenter", (event) =>
    AnimateAll(sign.name))));
