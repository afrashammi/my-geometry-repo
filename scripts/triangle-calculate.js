function calculateTriangleArea(){
const triangleBaseInput=document.getElementById('triangle-base');
const triangleBaseText=triangleBaseInput.value;
const base = parseFloat(triangleBaseText)
console.log(base)

// console.log( typeofBase);
// get triangle height value
const triangleHeightInput= document.getElementById('triangle-height');
const triangleHeightText=triangleHeightInput.value;
const height= perseFloat(triangleHeightText)
console.log(height);
}
// calculate triangle area
const area=0.5* base* height;
console.log('area of the triangle is:',area)

// display triangle area
  const triangleAreaSpan=document.getElementById('triangle-area');
  triangleAreaSpan.innerText=area;