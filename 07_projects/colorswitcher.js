// on clicking any of the colors the background color will change
// events bhi use hoga isme 

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach( (button) => {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target) //which target se event hora hai 
    if(e.target.id === 'grey')
    body.style.backgroundColor = e.target.id
    if(e.target.id === 'white')
    body.style.backgroundColor = e.target.id
    if(e.target.id === 'blue')
    body.style.backgroundColor = e.target.id
    if(e.target.id === 'yellow')
    body.style.backgroundColor = e.target.id
  })
})