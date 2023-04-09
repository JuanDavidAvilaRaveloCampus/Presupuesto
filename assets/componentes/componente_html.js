import config from "../config/config.js";
let total_data_ingreso = config.estructura_data.data_ingreso;
let total_data_egreso = config.estructura_data.data_egreso;

let presupuesto = document.querySelector('#presupuesto'); // = suma de todos los ingresos-ingresos
let ingresos = document.querySelector('#ingreso_total'); // suma de todos los ingresos
let egresos = document.querySelector('#egreso_total');

let total_ingresos = 0;
let total_egresos = 0;

let data_presupuesto = total_ingresos - total_egresos;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let data_name = document.querySelector('#data_name').value; //almacena el valor del name
    let data_amout = document.querySelector('#data_amout').value; //alamcena la cantidad numérica de la data 
    let data_formulario = Object.fromEntries(new FormData(e.target)).option; // ingreso o egreso

    
    // console.log(data_formulario);
    //detecta el value en los inputs
    if (data_formulario == 'ingreso' && data_name != '') {
        config.estructura_data.data_ingreso.unshift([data_name,data_amout]);
        // console.log(config.estructura_data.data_ingreso);

        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 1; j++) {
                total_ingresos += parseInt(total_data_ingreso[0][1]);
                total_ingresos = ingresos;
                console.log(total_egresos);
            };
        };


        document.querySelector('#tabla_ingreso').insertAdjacentHTML("beforeend",`
        <tr class="position-relative">
            <td class="container-fluid d-flex justify-content-between ">
                <div>${total_data_ingreso[0][0]}</div>
                <div>${total_data_ingreso[0][1]}</div>
                <div id="div_hover">25%</div>
            </td>
            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger"><i class="fa-solid fa-xmark"></i></div>
        </tr>
        `);

    } else if (data_formulario == 'egreso' && data_name != '') {
        config.estructura_data.data_egreso.unshift([data_name,data_amout]);
        
        // console.log(config.estructura_data.data_egreso);
        console.log(config.estructura_data.data_egreso);
        document.querySelector('#tabla_egreso').insertAdjacentHTML("beforeend",`
        <tr class="position-relative">
            <td class="container-fluid d-flex justify-content-between ">
                <div>${config.estructura_data.data_egreso[0][0]}</div>
                <div>${config.estructura_data.data_egreso[0][1]}</div>
                <div id="div_hover">25%</div>
            </td>
            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger"><i class="fa-solid fa-xmark"></i></div>
        </tr>
        `);

    } else {
        alert('El nombre del ingreso o su valor, no están especificados')
    }
});



export default {
    show_html() {
        
        let show_presupuesto = document.querySelector('#show_presupuesto').insertAdjacentHTML('beforeend', `
        <div class="mt-4 d-flex flex-column container-fluid text-white">
                <span>Presupuesto Disponible</span>
                <h2 id="presupuesto">$${data_presupuesto}</h2>
            </div>
            <div class="container-fluid  bajar_contador posicionar_div px-0">
                <div class="container-fluid d-flex justify-content-between py-2 ingresos">
                    <span class="text-dark"><b>INGRESOS</b></span>
                    <span class="text-white" id="ingreso_total">$${total_ingresos}</span>
                </div>
            <div class="d-flex">
                <div class="container-fluid d-flex py-2 mt-3 egresos justify-content-between">
                    <span class=""><b>EGRESOS</b></span>
                    <div>
                        <span id="egreso_total">$${total_egresos}</span>
                    </div>
                </div>
                <span class="ms-5 position-absolute span text-white" id="porcentaje_egreso_total">-6.09%</span>
            </div>
        </div>
        `);
        // presupuesto = 
    }
};


// function do_Data_ingreso (){
//     let data_ingreso = config.estructura_data.data_ingreso.unshift(data_name,data_amout); 
//     let elemento = document.querySelector('#name')
//     let insertar_elemento = document.createTextNode(config.estructura_data.data_ingreso[0]);
// //     elemento.appendChild(insertar_elemento)
// // }

// function show_egreso(){
    
// };



