const clock = document.querySelector('#clock');

// but isse har baar run nahi hoga, only on page refresh

setInterval(function (){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();   
}, 1000)