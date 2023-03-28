function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;

    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor");
    B = parseInt(prompt(""));

    suma = A + B;
    alert("El resultado de la suma es" + suma);

}

function opbasicas(){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multipicación = 0;
    var división = 0

    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor");
    B = parseInt(prompt(""));

    suma = A + B;
    alert("El resultado de la suma es" + suma);
    resta = A - B;
    alert("El resultado de la resta es" + resta);
    multiplicación = A * B;
    alert("El resultado de la multiplicación es" + multiplicación);
    división = A / B;
    alert("El resultado de la división es" + división);

}

function promedioN (){
    var nota1 = 0    
    var nota2 = 0
    var nota3 = 0
    var nota4 = 0
    var nota5 = 0
    var nota6 = 0
    var nota7 = 0
    nota1=parseInt(prompt("Por favor ingrese la primer nota"));
    nota2=parseInt(prompt("Por favor ingrese la segunda nota"));
    nota3=parseInt(prompt("Por favor ingrese la tercera nota"));
    nota4=parseInt(prompt("Por favor infgrese la cuarta nota"));
    nota5=parseInt(prompt("Por favor ingrese la quinta nota"));
    nota6=parseInt(prompt("Por favotr inggrese la sexta nota"));
    nota7=parseInt(prompt("Por favor ingrese la séptima nota"));
    promedio=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;
    alert("el promedio es= "+promedio)
    if(promedio>6.1){
        alert("aprobó")
    }else{
        alert("reprobó")
    }
}

function InversionCap(){
    var capital=0;
    var ganancia=0;
    var año=0;
    var total=0;
    capital=parseInt(prompt("Por favor ingrese el capital"));
    año=parseInt(prompt("Por favor ingrese el año"))
    ganancia=(capital*0,204)*año;
    total=capital+ganancia;
    alert("La ganancia es="+ ganancia);
    alert("Obtuvo un total de="+ total);
}

function MayordeDN(){
    var A=0;
    var B=0;
    A=parseInt(prompt("Por favor ingrese el primer valor"));
    B=parseInt(prompt("Por favor ingrese el segundo valor"));
    
    if(A>B){
        alert("El mayor es"+A);
    }
    else{
        alert("el mayor es"+B);
    }
}

function MenordeTN(){
    var A=0;
    var B=0;
    var C=0;
    A=parseInt(prompt("Por favor ingrese el primer valor"));
    B=parseInt(prompt("Por favor ingrese el segundo valor"));
    C=parseInt(prompt("Por favor ingrese el tercer valor"));

    if(A<B,A<C){
        alert("El menor es"+A);
    }
    
    else if(B<A,B<C){
        alert("El menor es"+B);
    }
    else{
        alert("El menor es"+C)
    }

}

function AreadeUT(){
    var A=0;
    var B=0;
    var H=0;
    B=parseInt(prompt("Por favor ingrese el valor de la base"));
    H=parseInt(prompt("Por favor ingrese el valor de la altura"));
    A=(B*H)/2;
    alert("El valor del area del triangulo es"+A);
}

function CalcularAN(){
    var Añoactual=0;
    var Edad=0;
    var AñoN
    Añoactual=parseInt(prompt("Por favor ingrese el año actual"));
    Edad=parseInt(prompt("Por favor ingrese la edad"));
    AñoN=(Añoactual-Edad);
    alert("El año de nacimiento es"+AñoN);
}

function Circulo(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Circulo");
}

function Rectangulo(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Rectangulo");
}

function Rombo(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Rombo");
}

function Gif(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Gif");
}

function Izquierda(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Izquierda");
}

function Derecha(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Derecha");
}

function Arriba(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Arriba");
}
function Abajo(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Abajo");
}
function Diagonal(){
    var figura= document.getElementById("figura");
    figura.classList.toggle("Diagonal");
}