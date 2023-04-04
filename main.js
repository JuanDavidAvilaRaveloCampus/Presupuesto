// ingreso table
import componente_ingreso from "./assets/componentes/componente_ingreso.js";
componente_ingreso.showIngreso();

// egreso tabla
import componente_egresos from "./assets/componentes/componente_egresos.js";
componente_egresos.showEngreso();

// data total
import componentes_Total from "./assets/componentes/componentes_Total.js";
componentes_Total.showTotal();
componentes_Total.showData();
// componentes_Total.data();


const ingresar_egresar = document.querySelector('#option');//Detecta la opción del select para asignar el almacenado a una variable, ya sea la de ingresar o egresar
const input = document.querySelector('.input_ancho');//input data

// let ingreso_data = document.querySelector('.ingreso_data');
// ingreso_data.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(ingreso_data)

//     let option = document.querySelector('#option');
//     console.log(option.value);

//     let data = document.querySelector('#almacenar');
//     console.log(data.value);

//     let cantidad = document.querySelector('#number');
//     console.log(cantidad.value);
// });

