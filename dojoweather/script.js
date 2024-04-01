const unit = document.getElementById('unit');
const temptt = document.querySelectorAll('.temperature'); //select all existed temperatures with calss='temperature' 
unit.addEventListener('change', convertTemperatures);

function rmCookie(){
    const test = document.getElementById("cookies");
    test.remove(); 
}

function convertTemperature(test) {
  const currentTemperature = parseInt(test.innerText); // parseFloat(test.innertext);
  const value = unit.value;

  let convertedTemperature;

  if (value === 'cel' &&test.dataset.unit === 'fah') {
    
      convertedTemperature = (currentTemperature - 32) * 5/9;
      test.innerText = convertedTemperature.toFixed(0)+"°C"; //no need for toFixed(0)
      test.dataset.unit = 'cel';
    }
   else if (test.dataset.unit === 'cel') {
      convertedTemperature = (currentTemperature * 9/5) + 32;
      test.innerText = convertedTemperature.toFixed(1)+"°F"; //toFixed(1) for 1 number after the Decimal Point
      test.dataset.unit = 'fah';
    }}

function convertTemperatures() {
  temptt.forEach(convertTemperature);
}