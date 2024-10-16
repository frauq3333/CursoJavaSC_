// Area de un Ciculo
function AreaCirculo(radio){
    const Pi = Math.PI;
    return (Pi * radio * radio);

}

let radio = 4;
console.log ("el area del circulo es:" + AreaCirculo(radio));

//Area del triangulo 

function AreaTriangulo(base, altura){
    return (base * altura) /2;

}

let BaseT = 20;
let AlturaT= 22;
console.log ("Area del Triangulo es" + AreaTriangulo(BaseT,AlturaT));

// Area del Rectangulo

function AreaRectangulo(base, altura){
    return base * altura;

}

let BaseRec = 5;
let AlturaRec = 4;
console.log ("Area del Rectangulo es" + AreaRectangulo(BaseRec,AlturaRec));
