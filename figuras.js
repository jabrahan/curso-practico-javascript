//Code of Square
console.group("Squares");

function perimeterSquare(side){
  return side * 4; 
} 
 
function areaSquare(side){
  return side * side; 
}

console.groupEnd();

//Code of Triangle 
console.group("Triangles");

function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle){
  
  return sideTriangle1 + sideTriangle2 + baseTriangle;
}

function areaTriangle(baseTriangle, heightTriangle) {
  return (baseTriangle * heightTriangle)/2; 
}
console.groupEnd();


//Code of Circle
console.group("Circles"); 
// Diameter
function diameterCircle(radioCircle){
    return radioCircle * 2;   
}
// PI
const PI = Math.PI; 
console.log("PI es: " + PI + " cm.");
//Circumference
function perimeterCircle(radioCircle) {
    const diameter = diameterCircle(radioCircle); 
    return diameter * PI; 
}
//Area 
function areaCircle(radioCircle) {
    return (radioCircle * radioCircle) * PI;
}

console.groupEnd();


//Interaccion with HTML 
//Square
function calPerimetreSquare() {
  const input = document.getElementById("inputSquare");
  const value = input.value;

  const perimeter = perimeterSquare(value);
  alert(perimeter); 

}
function calAreaSquare() {
  const input = document.getElementById("inputSquare");
  const value = input.value;

  const area = areaSquare(value);
  alert(area);
}

//Triangle

function calPerimeterTriangle () {
  const input = document.getElementById("inputTriangle");
  const value = parseInt(input.value);

  const inputB = document.getElementById("inputTriangleB");
  const valueB = parseInt(inputB.value);

  const inputC = document.getElementById("inputTriangleC");
  const valueC = parseInt(inputC.value);
  
  const perimeter = perimeterTriangle(value, valueB , valueC);

  alert(perimeter); 
}

function calAreaTriangle () {
  const inputC = document.getElementById("inputTriangleC");
  const valueC = parseInt(inputC.value);

  const inputH = document.getElementById("inputTriangleH");
  const valueH = parseInt(inputH.value);

  const area = areaTriangle(valueC, valueH);
  alert(area); 
}

//Circle

function calPerimeterCircle() {
  const input = document.getElementById("inputCircle");
  const value = parseInt(input.value);

  const perimeter = perimeterCircle(value);
  alert(perimeter);
}
function calDiameterCircle() {
  const input = document.getElementById("inputCircle");
  const value = parseInt(input.value);

  const diameter = diameterCircle(value);
  alert(diameter);
}
function calAreaCircle() {
  const input = document.getElementById("inputCircle");
  const value = parseInt(input.value);

  const area = areaCircle(value);
  alert(area); 
}