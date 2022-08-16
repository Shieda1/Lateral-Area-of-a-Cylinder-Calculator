// https://calculator.swiftutors.com/lateral-area-of-a-cylinder-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lateralAreaofaCylinderRadio = document.getElementById('lateralAreaofaCylinderRadio');
const radiusofthecylinderRadio = document.getElementById('radiusofthecylinderRadio');
const heightofthecylinderRadio = document.getElementById('heightofthecylinderRadio');

let lateralAreaofaCylinder;
const PI = Math.PI;
const two = 2;
let radiusofthecylinder = v1;
let heightofthecylinder = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

lateralAreaofaCylinderRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Radius of the cylinder';
  variable2.textContent = '(h) Height of the cylinder';
  radiusofthecylinder = v1;
  heightofthecylinder = v2;
  result.textContent = '';
});

radiusofthecylinderRadio.addEventListener('click', function() {
  variable1.textContent = 'Lateral Area of a Cylinder';
  variable2.textContent = '(h) Height of the cylinder';
  lateralAreaofaCylinder = v1;
  heightofthecylinder = v2;
  result.textContent = '';
});

heightofthecylinderRadio.addEventListener('click', function() {
  variable1.textContent = 'Lateral Area of a Cylinder';
  variable2.textContent = '(r) Radius of the cylinder';
  lateralAreaofaCylinder = v1;
  radiusofthecylinder = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lateralAreaofaCylinderRadio.checked)
    result.textContent = `Lateral Area of a Cylinder = ${computeLateralAreaofaCylinder().toFixed(2)}`;

  else if(radiusofthecylinderRadio.checked)
    result.textContent = `Radius of the cylinder = ${computeRadiusofthecylinder().toFixed(2)}`;

  else if(heightofthecylinderRadio.checked)
    result.textContent = `Height of the cylinder = ${computeHeightofthecylinder().toFixed(2)}`;
})

// calculation

function computeLateralAreaofaCylinder() {
  return two * PI * Number(radiusofthecylinder.value) * Number(heightofthecylinder.value);
}

function computeRadiusofthecylinder() {
  return Number(lateralAreaofaCylinder.value) / (two * PI * Number(heightofthecylinder.value));
}

function computeHeightofthecylinder() {
  return Number(lateralAreaofaCylinder.value) / (two * PI * Number(radiusofthecylinder.value));
}