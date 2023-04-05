// PRESUPUESTO DISPONIBLE

let presupuesto = document.querySelector('#presupuesto');

let ingreso_total = document.querySelector('#ingreso_total');

let egreso_total = document.querySelector('#egreso_total');

let porcentaje_egreso_total = document.querySelector('#porcentaje_egreso_total');

// NAV
let options = document.querySelector('#options').value; // condicional según la opción

let data_name = document.querySelector('#data_name').value;

let data_amout = document.querySelector('#data_amout').value;

let formulario = document.querySelector('#formulario');
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data.option);

    if (data.option == ingreso){
        
    } else {

    }

    console.log(options);
    console.log(data_name);
    console.log(data_amout);
})

