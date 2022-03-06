// Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
} 

console.groupEnd();

console.group("Triángulo");

/* Código del triángulo */

function perimetroTriangulo(ladoTrianguloUno, ladoTrianguloDos, baseTriangulo){
    return ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
} 

console.groupEnd();

// Código círculo

console.group("Círculo");

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * Math.PI; // 3.14.15
}

function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * Math.PI; // 3.14.15
}

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro)    
}