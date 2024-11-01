const form = document.querySelector('form');
// this usecase will give u empty value
// yahape height and weight isliye nahi lere cuz we want value on clicking submit and not on just loading the page, else empty value will be there
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); //string mei milta hai
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span> ${bmi}</span>`
    if(bmi < 18.6){
      let newresults = document.createElement('span')
      newresults.innerHTML = `<br><span>UnderWeight</span>`
      results.appendChild(newresults)
    }
    else if(bmi < 25){
      let newresults = document.createElement('span')
      newresults.innerHTML = `<br><span>Normal Weight</span>`
      results.appendChild(newresults)
    }
    else{
      let newresults = document.createElement('span')
      newresults.innerHTML = `<br><span>Overweight</span>`
      results.appendChild(newresults)
    }
  }

  
});
