// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perímetro de cuadrado mide: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El área del cuadrado mide: ${areaCuadrado} cm^2`);

console.groupEnd();

console.group("Triángulo");

/* Código del triángulo */

const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados de triángulo miden: ${ladoTrianguloUno} cm ${ladoTrianguloDos} cm ${baseTriangulo} cm`);
console.log(`La altura del triángulo mide: ${alturaTriangulo} cm `);

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo

console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El área del tríangulo es: ${areaTriangulo} cm ^2`);

console.groupEnd();

// Código circulo

console.group("Cirdulo");

const radioCirculo = 4;

const DiametroCirculo = radioCirculo * 2;

const PI = Math.PI; // 3.14.15

const perimetroCirculo = DiametroCirculo * PI;

const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(`El radio del círculo es: ${radioCirculo} cm`);
console.log(`El diámetro del círculo es: ${DiametroCirculo} cm`);
console.log(`Valor de PI: ${PI}`);

console.log(`El perímetro del círculo es: ${perimetroCirculo} cm`);
console.log(`El área del círculo es: ${areaCirculo} cm ^2`);

console.groupEnd();