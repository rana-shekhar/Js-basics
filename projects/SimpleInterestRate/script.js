alert('Script is working!');

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const amount = parseFloat(document.querySelector('#amount').value);
  const rate = parseFloat(document.querySelector('#rate').value);
  const time = parseFloat(document.querySelector('#time').value);
  const results = document.querySelector('#results');

  if (amount === '' || isNaN(amount) || amount <= 0) {
      results.innerHTML = 'Please enter a valid principal amount greater than 0';
      return;
  }

  if (rate === '' || isNaN(rate) || rate <= 0) {
      results.innerHTML = 'Please enter a valid rate of interest greater than 0';
      return;
  }

  if (time === '' || isNaN(time) || time <= 0) {
      results.innerHTML = 'Please enter a valid time period greater than 0';
      return;
  }

  const simpleInterest = (amount * rate * time) / 100;
  results.innerHTML = `The interest is: ${simpleInterest.toFixed(2)}`;
});
