
/*
HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

*/

// JavaScript Events - A comprehensive list of common events

// 1. Mouse Events
// These events are triggered by mouse actions.

document.addEventListener('click', function() {
  console.log('The mouse was clicked!');
});

document.addEventListener('dblclick', function() {
  console.log('The mouse was double-clicked!');
});

document.addEventListener('mousedown', function() {
  console.log('Mouse button was pressed down.');
});

document.addEventListener('mouseup', function() {
  console.log('Mouse button was released.');
});

document.addEventListener('mousemove', function(event) {
  console.log(`Mouse moved at coordinates: (${event.clientX}, ${event.clientY})`);
});

document.addEventListener('mouseenter', function() {
  console.log('Mouse entered the element!');
});

document.addEventListener('mouseleave', function() {
  console.log('Mouse left the element!');
});

document.addEventListener('mouseover', function() {
  console.log('Mouse is over the element!');
});

document.addEventListener('mouseout', function() {
  console.log('Mouse is out of the element!');
});

// 2. Keyboard Events
// These events are triggered by user input through the keyboard.

document.addEventListener('keydown', function(event) {
  console.log(`Key pressed: ${event.key}`);
});

document.addEventListener('keypress', function(event) {
  console.log(`Key pressed (character): ${event.key}`);
});

document.addEventListener('keyup', function(event) {
  console.log(`Key released: ${event.key}`);
});

// 3. Focus Events
// These events are triggered when elements gain or lose focus.

document.getElementById('inputField').addEventListener('focus', function() {
  console.log('Input field is focused!');
});

document.getElementById('inputField').addEventListener('blur', function() {
  console.log('Input field lost focus!');
});

// 4. Form Events
// These events are triggered when interacting with forms.

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form submission
  console.log('Form submitted!');
});

document.getElementById('inputField').addEventListener('input', function(event) {
  console.log('User typed something: ' + event.target.value);
});

document.getElementById('inputField').addEventListener('change', function(event) {
  console.log('Input value changed to: ' + event.target.value);
});

// 5. Window Events
// These events are triggered by actions affecting the window.

window.addEventListener('resize', function() {
  console.log('Window resized');
});

window.addEventListener('scroll', function() {
  console.log('Window is scrolling');
});

window.addEventListener('load', function() {
  console.log('Window has finished loading');
});

window.addEventListener('beforeunload', function() {
  console.log('Window is about to be closed');
});

// 6. Touch Events
// These events are triggered by touch interactions on mobile devices.

document.addEventListener('touchstart', function(event) {
  console.log('Touch started');
});

document.addEventListener('touchend', function(event) {
  console.log('Touch ended');
});

document.addEventListener('touchmove', function(event) {
  console.log('Touch is moving');
});

document.addEventListener('touchcancel', function(event) {
  console.log('Touch cancelled');
});

// 7. Pointer Events
// These events are a combination of mouse, touch, and pen events. They are useful for handling multiple input devices.

document.addEventListener('pointerdown', function() {
  console.log('Pointer device down');
});

document.addEventListener('pointerup', function() {
  console.log('Pointer device up');
});

document.addEventListener('pointermove', function(event) {
  console.log(`Pointer moved at coordinates: (${event.clientX}, ${event.clientY})`);
});

// 8. Drag and Drop Events
// These events are triggered during drag and drop operations.

document.getElementById('dragElement').addEventListener('dragstart', function() {
  console.log('Drag started');
});

document.getElementById('dragElement').addEventListener('dragend', function() {
  console.log('Drag ended');
});

document.getElementById('dropZone').addEventListener('dragover', function(event) {
  event.preventDefault(); // Necessary to allow dropping
  console.log('Element is being dragged over');
});

document.getElementById('dropZone').addEventListener('drop', function(event) {
  event.preventDefault();
  console.log('Element dropped');
});

// 9. Media Events
// These events are triggered by media elements like <audio> and <video>.

let audio = document.getElementById('audioElement');

audio.addEventListener('play', function() {
  console.log('Audio started playing');
});

audio.addEventListener('pause', function() {
  console.log('Audio paused');
});

audio.addEventListener('ended', function() {
  console.log('Audio finished');
});

// 10. Clipboard Events
// These events are triggered by clipboard interactions.

document.addEventListener('copy', function() {
  console.log('Content copied to clipboard');
});

document.addEventListener('cut', function() {
  console.log('Content cut to clipboard');
});

document.addEventListener('paste', function() {
  console.log('Content pasted from clipboard');
});

// 11. Mutation Events
// These events are triggered when the DOM is changed (e.g., elements added or removed).

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      console.log(mutation);
  });
});

observer.observe(document.body, {
  childList: true, // Observe direct child elements
  subtree: true    // Observe all descendants
});

// 12. Animation Events
// These events are triggered during CSS animations.

document.getElementById('animatedElement').addEventListener('animationstart', function() {
  console.log('Animation started');
});

document.getElementById('animatedElement').addEventListener('animationend', function() {
  console.log('Animation ended');
});

document.getElementById('animatedElement').addEventListener('animationiteration', function() {
  console.log('Animation iteration');
});

// 13. Transition Events
// These events are triggered during CSS transitions.

document.getElementById('transitionElement').addEventListener('transitionstart', function() {
  console.log('Transition started');
});

document.getElementById('transitionElement').addEventListener('transitionend', function() {
  console.log('Transition ended');
});

document.getElementById('transitionElement').addEventListener('transitioncancel', function() {
  console.log('Transition canceled');
});

// 14. Focus and Blur Events
// Focus and blur events are fired when an element gains or loses focus.

document.getElementById('inputField').addEventListener('focus', function() {
  console.log('Element focused');
});

document.getElementById('inputField').addEventListener('blur', function() {
  console.log('Element lost focus');
});


const btn = document.querySelector("#btn");

const random = (number) =>{
       
    return Math.floor(Math.random() * number);
}

btn.addEventListener("click",() => {
    const color = `rgb(${random(355)},${random(355)},${random(355)})`;
    document.body.style.backgroundColor = color;
})


// window.addEventListener("load",() => alert("welcome"))
// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });

// window.onload = (event) => alert("hello")

// document.addEventListener("readystatechange", (event) => {
//     document.write("ready")
//   });

// document.addEventListener("DOMContentLoaded", (event) => {
//     document.write("DOMContentLoaded")
//   });



// window.addEventListener("online", () => console.log("your online"));

// ononline version
// window.ononline = (event) => {
//   console.log("You are now connected to the network.",event);
// };
// window.addEventListener("online", (event) => {
//     console.log("You are now connected to the network.");
//   });


  // addEventListener version
// window.addEventListener("offline", (event) => {
//     console.log("The network connection has been lost.");
//   });
  
//   // onoffline version
//   window.onoffline = (event) => {
//     console.log("The network connection has been lost.");
//   };

  
//   if(window.ononline){
//     alert("You are now connected to the network.")
//   }

//   if(window.onoffline){
//     confirm("The network connection has been lost");
//   }
    
//   console.log(window.ononline);
//   window.removeEventListener("offline",() => {});


const boxContainer = document.querySelector(".boxContainer");
const boxChildren = document.querySelectorAll(".boxChild");


// boxContainer.addEventListener("scrollsnapchange",(event) =>{
//     console.log(event)
//     const currentlySnapped = document.querySelector(".snap-active");

//     if(currentlySnapped){
//         currentlySnapped.classList.remove("snap-active");
//     }

//    event.snapTargetBlock.classList.add("snap-active");

// })

document.querySelector("#demo").addEventListener("copy",(e) =>{

  e.clipboardData.setData('text/plain', 'dont copy please');
//   e.clipboardData.setData('text/html', '<b>Hello, world!</b>');

  e.preventDefault();

})

document.querySelector("#demo").addEventListener("paste",(event) =>{

    // console.log(event.clipboardData.getDat;

})
