


// ingreso table
import componente_ingreso from "./assets/componentes/componente_ingreso.js";
componente_ingreso.showIngreso();

// egreso tabla
import componente_egresos from "./assets/componentes/componente_egresos.js";
componente_egresos.showEngreso();

// nav
import componente_nav from "./assets/componentes/componente_nav.js";
componente_nav.showNav();

// data todal
import componentes_Total from "./assets/componentes/componentes_Total.js";
componentes_Total.showTotal();


const ingresar_egresar = document.querySelector('#option');//Detecta la opción del select para asignar el almacenado a una variable, ya sea la de ingresar o egresar
const input = document.querySelector('.input_ancho');//input data


const escuchador = document.querySelector('.ingreso_data');//fomulario, detecta el evento 'submit'
escuchador.addEventListener('submit',function(condicional){
    if (ingresar_egresar.value == ingreso){
        let ingreso = 'ingreso';
        //llama al worker y envia el mensajee de que let egreso es igual a 'ingreso'
    } else if (ingresar_egresar.value == egreso){
        let egreso = 'egreso';
        //envial a info al worker
    }
})







const worker = new Worker('ws_Component.js')